import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
    title: {
        template: "$s - Online Shopcart",
        default: "Online Shopcart",
    },
    description: "Online Shopcart, Have everything you need in one place",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
