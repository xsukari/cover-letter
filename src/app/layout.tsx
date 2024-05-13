import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import * as data from "./components/data"

const _recipient = data.getData(data.categories.recipient) as data.Recipient

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "cover letter - " + _recipient.company,
    description: "cover letter",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
