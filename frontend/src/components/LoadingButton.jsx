import React from "react";

export default function LoadingButton({ children, loading, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center gap-2 px-4 py-2 rounded " +
        "bg-blue-600 text-white disabled:opacity-60 " +
        className
      }
      disabled={loading || props.disabled}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"></circle>
          <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
}
