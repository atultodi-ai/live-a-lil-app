import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live A Little — Your Life, Experienced",
  description:
    "An AI companion that helps you prioritize and pursue the experiences that matter most. You only have one life. Make it count.",
  openGraph: {
    title: "Live A Little",
    description: "Stop preparing. Start living.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
