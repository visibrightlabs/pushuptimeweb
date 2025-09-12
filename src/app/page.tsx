import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto max-w-3xl p-6 sm:p-10 space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">Policies</h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          View our legal pages for PushUp Time.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
