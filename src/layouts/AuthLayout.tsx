import Image from "next/image"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl flex justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="Prepare Logo"
            width={140}
            height={40}
            priority
            className="h-auto w-[120px] md:w-[140px]"
          />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-6 md:py-12 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[320px] sm:max-w-[380px] md:max-w-md">
          {children}
        </div>
      </main>
      <footer className="w-full mt-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prepare. All rights reserved.
        </div>
      </footer>
    </div>
  )
}