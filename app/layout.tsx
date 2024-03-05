import { Metadata } from "next"

// These styles apply to every route in the application and we only have one i guess.
import "./globals.css"
import "./animista.css"
export const metadata: Metadata = {
    title: "PORTFOLIO",
    description:
        "PORTFOLIO FOR MY NERD FRIEND.. which im slowly transforming into a beast.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-dark">{children}</body>
        </html>
    )
}
