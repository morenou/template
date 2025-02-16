import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div aria-hidden role="presentation" className="absolute inset-0 -z-10 max-h-96 bg-[radial-gradient(ellipse_80%_70%_at_20%_-20%,var(--bg-color),transparent)] duration-300 [--bg-color:var(--color-indigo-400)] dark:[--bg-color:var(--color-zinc-800)]"></div>

                    <div aria-hidden className="absolute inset-x-0 top-0 mx-auto hidden max-w-7xl lg:block">
                        <div className="absolute left-0 top-0 h-56 w-px bg-gradient-to-b from-gray-950/[0.07] dark:from-white/[0.07]"></div>
                        <div className="absolute right-0 top-0 h-56 w-px bg-gradient-to-b from-gray-950/[0.07] dark:from-white/[0.07]"></div>
                        <div className="absolute -left-20 top-16 h-12 w-20 p-2">
                            <div className="-z-10 h-full w-full bg-[radial-gradient(var(--bg-color)_1px,transparent_1px)] [--bg-color:theme(colors.gray.950/0.1)] [background-size:6px_6px] dark:[--bg-color:theme(colors.white/0.05)]"></div>
                        </div>

                        <div className="absolute -right-20 top-16 h-12 w-20 p-2">
                            <div className="-z-10 h-full w-full bg-[radial-gradient(var(--bg-color)_1px,transparent_1px)] [--bg-color:theme(colors.gray.950/0.1)] [background-size:6px_6px] dark:[--bg-color:theme(colors.white/0.05)]"></div>
                        </div>
                    </div>

                    <div aria-hidden className="absolute inset-x-0 top-16 z-20 mx-auto h-12 border-y border-gray-950/[0.07] dark:border-white/5" />

                    <header>
                        <div className="mx-auto flex max-w-7xl justify-between px-6 py-4">
                            <Link href="/" className="flex w-fit items-center gap-2">
                                <svg className="size-7" viewBox="0 0 71 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M61.25 1.625L70.75 1.5625C70.75 4.77083 70.25 7.79167 69.25 10.625C68.2917 13.4583 66.8958 15.9583 65.0625 18.125C63.2708 20.25 61.125 21.9375 58.625 23.1875C56.1667 24.3958 53.4583 25 50.5 25C46.875 25 43.6667 24.2708 40.875 22.8125C38.125 21.3542 35.125 19.2083 31.875 16.375C29.75 14.4167 27.7917 12.8958 26 11.8125C24.2083 10.7292 22.2708 10.1875 20.1875 10.1875C18.0625 10.1875 16.25 10.7083 14.75 11.75C13.25 12.75 12.0833 14.1875 11.25 16.0625C10.4583 17.9375 10.0625 20.1875 10.0625 22.8125L0 22.9375C0 19.6875 0.479167 16.6667 1.4375 13.875C2.4375 11.0833 3.83333 8.64583 5.625 6.5625C7.41667 4.47917 9.54167 2.875 12 1.75C14.5 0.583333 17.2292 0 20.1875 0C23.8542 0 27.1042 0.770833 29.9375 2.3125C32.8125 3.85417 35.7708 5.97917 38.8125 8.6875C41.1042 10.7708 43.1042 12.3333 44.8125 13.375C46.5625 14.375 48.4583 14.875 50.5 14.875C52.6667 14.875 54.5417 14.3125 56.125 13.1875C57.75 12.0625 59 10.5 59.875 8.5C60.7917 6.5 61.25 4.20833 61.25 1.625Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="sr-only font-bold">ns UI</span>
                            </Link>
                            <div className="-mr-2 flex items-center">
                                <Button asChild variant="link" className="gap-1">
                                    <Link href="" className="text-sm">
                                        GitHub
                                        <ArrowUpRight className="!size-3.5 opacity-50" />
                                    </Link>
                                </Button>
                                <ThemeToggle />
                            </div>
                        </div>
                    </header>

                    <main>
                        <section>
                            <div className="mx-auto max-w-7xl px-6">
                                <div className="max-w-xl pb-12 md:pb-16">
                                    <h1 className="mt-24 text-3xl font-bold sm:mt-28 sm:text-4xl md:text-nowrap">Shadcn Pricing Blocks</h1>
                                    <p className="mt-4 text-base md:text-lg">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>
                                </div>
                            </div>
                        </section>

                        {children}
                    </main>

                    <footer className="py-4">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="-mb-2 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-gray-700 dark:text-gray-300">
                                Designed by Tailus UI in
                                <div className="flex items-start justify-center gap-2 text-center font-semibold text-gray-950 sm:gap-1 dark:text-white">
                                    <div className="block">
                                        <div className="block pb-2">DR Congo</div>
                                        <div className="-mt-5 grow overflow-hidden">
                                            <svg aria-hidden="true" className="w-16" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" strokeWidth="4"></path>
                                                <defs>
                                                    <linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#facc15"></stop>
                                                        <stop offset="1" stopColor="#a855f7"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    )
}
