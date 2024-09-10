"use client";

import { setCookie } from "./service";

export default function SetCookieButton() {
  function onClick() {
    setCookie("admin-cookie", "Cookie value from Admin Web", {
      optionshttpOnly: true,
      sameSite: "strict",
      path: "/",
    });
  }
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    >
      Set cookie from Admin
    </button>
  );
}
