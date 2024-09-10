"use server";

import { cookies } from "next/headers";

export async function setCookie(key, value, options) {
  cookies().set(key, value, options);
}
