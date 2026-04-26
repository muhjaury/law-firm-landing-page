import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kantor Hukum Nuzul Qadriy, S.H. & Rekan",
  description:
    "Kantor Hukum Nuzul Qadriy, S.H. & Rekan adalah firma hukum yang bergerak di bidang litigasi dan non-litigasi, dengan fokus pada penyelesaian perkara secara efektif, efisien, dan profesional. Kami berkomitmen memberikan pelayanan hukum yang mengedepankan keadilan, integritas, dan kerahasiaan klien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
