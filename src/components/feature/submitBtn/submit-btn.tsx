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
      className="group flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 outline-none hover:bg-gray-700 active:bg-gray-800 disabled:bg-opacity-60 disabled:hover:bg-gray-900 disabled:hover:bg-opacity-60"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit <FaPaperPlane disabled={disabled} className="text-xs opacity-70" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
