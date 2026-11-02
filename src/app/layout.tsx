import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NORDIX — Аксессуары для техники", description: "Технологичные аксессуары. Розничные и оптовые цены." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ru"><body>{children}</body></html>; }
