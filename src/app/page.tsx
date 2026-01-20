import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <main className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* App Screenshot */}
          <div className="flex justify-center">
            <div className="w-48 sm:w-56 md:w-64 lg:w-72">
              <Image
                src="/App Store Screenshots (3).png"
                alt="PushUp Time App Screenshot"
                width={600}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* App Store Button */}
          <div className="flex justify-center">
            <a
              href="https://apps.apple.com/us/app/pushup-time-app-blocker/id6749405784"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs">Download on the</span>
                <span className="text-lg sm:text-xl font-semibold -mt-1">App Store</span>
              </div>
            </a>
          </div>

          {/* Footer Links */}
          <footer className="text-center pt-4 space-y-4">
            <div className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-black underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-black underline">
                Terms of Service
              </Link>
            </div>
            
            {/* Contact Button */}
            <div>
              <a
                href="mailto:support@pushuptimeapp.com"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-black text-xs sm:text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
