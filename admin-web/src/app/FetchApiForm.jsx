"use client";

import { useState } from "react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function FetchApiForm() {
  const [apiPath, setApiPath] = useState("/");

  const [result, setResult] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(apiBaseUrl + apiPath, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resBody = await res.json();

      setResult(resBody);
    } catch (error) {
      setResult(null);
    }
  }
  return (
    <div>
      <form action="" onSubmit={onSubmit} className="w-full">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <input
            type="text"
            placeholder="/"
            onChange={(e) => {
              if (e.target.value.startsWith("/")) {
                setApiPath(e.target.value);
              } else {
                setApiPath("/");
              }
            }}
            value={apiPath}
            className="w-full px-5 h-10 rounded-md text-background"
          />
          <button className="rounded-full shrink-0 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-10 px-6">
            Fetch API
          </button>
        </div>
      </form>
      {result && (
        <div className="w-full flex flex-col gap-4">
          <p>Result:</p>
          <p>{JSON.stringify(result)}</p>
        </div>
      )}
    </div>
  );
}
