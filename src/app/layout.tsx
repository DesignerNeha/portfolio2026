import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Background3D from "@/components/Background3D";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Neha Sharma | Creative Frontend Engineer & UX Architect",
  description: "Portfolio of Neha Sharma, Senior Frontend Engineer and UX Architect showcasing beautiful, immersive interfaces built with Next.js, Tailwind CSS, and Framer Motion.",
  keywords: ["Neha Sharma", "Frontend Engineer", "Creative Developer", "Next.js Portfolio", "Framer Motion", "Tailwind CSS"],
  authors: [{ name: "Neha Sharma" }],
  creator: "Neha Sharma",
  openGraph: {
    title: "Neha Sharma | Creative Frontend Engineer & UX Architect",
    description: "Immersive frontend portfolio displaying advanced interactive web design, clean UI components, and premium animation work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        <Background3D />
        {children}
      </body>
    </html>
  );
}


