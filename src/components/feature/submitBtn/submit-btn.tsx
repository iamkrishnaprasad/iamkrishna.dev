import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = ({
  disabled = false,
  pending = false
}: {
  disabled?: boolean;
  pending: boolean;
}) => {
  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className="group flex h-12 w-32 items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-60 dark:text-black"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            disabled={disabled}
            className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-disabled:translate-x-0 group-disabled:translate-y-0"
          />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
