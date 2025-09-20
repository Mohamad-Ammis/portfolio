import type { Metadata } from "next";
import Script from "next/script";
import "../app/globals.css";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "Mohamad Ammis",
  description: "Mohamad Ammis Flutter Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem("theme");
                if (!theme || theme === "dark") {
                  document.documentElement.classList.add("dark");
                }
              } catch (_) {}
            })();
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
