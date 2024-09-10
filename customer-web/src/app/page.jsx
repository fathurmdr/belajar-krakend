import { cookies } from "next/headers";
import SetCookieButton from "./SetCookieButton";
import FetchApiForm from "./FetchApiForm";

const webBaseUrl = process.env.WEB_BASE_URL;

export default async function Home() {
  const customerCookie = cookies().get("customer-cookie")?.value;
  const adminCookie = cookies().get("admin-cookie")?.value;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-semibold">Web Customer</h1>
        <ol className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Customer Cookie: {customerCookie}</li>
          <li className="mb-2">Admin Cookie: {adminCookie}</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <SetCookieButton />
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href={`${webBaseUrl}/admin`}
          >
            Go to Admin Web
          </a>
        </div>
        <FetchApiForm />
      </main>
    </div>
  );
}
