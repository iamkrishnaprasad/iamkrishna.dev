import { deepCopy, getErrorMessage, isEmail } from "@/utils";
import { kv } from "@vercel/kv";
import ms from "ms";
import validate from "deep-email-validator";

const getSeconds = (value) => Number(ms(value) / 1000);

const generateKeyString = (key) => {
  return `${process.env.APP_ENV}-${key}`.toLowerCase();
};

const get = async (key) => {
  const data = await kv.get(generateKeyString(key));
  if (data === null) return null;
  return deepCopy(data);
};

const set = async (key, fetcher, expiresIn = "15m") => {
  const data = await fetcher();
  await kv.set(generateKeyString(key), JSON.stringify(data), {
    ex: getSeconds(expiresIn),
    nx: true
  });
  return deepCopy(data);
};

const fetchFromRedis = async (key, fetcher, expiresIn) => {
  const data = await get(key);
  if (data !== null) return data;
  return set(key, fetcher, expiresIn);
};

const generateResponse = (response, statusCode = 200) => {
  return new Response(
    JSON.stringify({
      ...response
    }),
    {
      status: statusCode,
      headers: {
        "content-type": "application/json"
      }
    }
  );
};

export async function POST(request) {
  let response;
  let statusCode;
  try {
    const { senderEmail } = await request.json();
    if (!senderEmail || senderEmail?.trim() === "") {
      response = {
        message: "'senderEmail' is required.",
        isValid: false,
        isValidationError: true
      };
      statusCode = 400;
    } else if (!isEmail(senderEmail?.trim())) {
      response = {
        message: "Please enter a valid email address.",
        isValid: false,
        isValidationError: true
      };
      statusCode = 400;
    } else {
      response = await fetchFromRedis(
        senderEmail,
        async () => {
          const { valid, validators, reason } = await validate(senderEmail.trim());
          if (valid) {
            return {
              message: "",
              isValid: true,
              isValidationError: false
            };
          } else {
            statusCode = 400;
            return {
              message: deepCopy(validators[reason]?.reason),
              isValid: false,
              isValidationError: false
            };
          }
        },
        "15m"
      );
    }
  } catch (error) {
    response = {
      message: getErrorMessage(error)
    };
    statusCode = 500;
  } finally {
    return generateResponse(response, statusCode);
  }
}
