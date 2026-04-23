import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import Transition from "@/components/Transition/Transition";
import { ToastProvider } from "@/context/ToastContext";
import Toast from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "HER-Cosmetics",
  icons: {
    icon: "/her.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Open+Sans:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SearchProvider>
          <CartProvider>
            <Transition />
            <ToastProvider>

            {children}
            <Toast/>
            </ToastProvider>
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
