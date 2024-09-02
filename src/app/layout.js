import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sunhealthcarenursingservice.in",
  description: "A health care services provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <ClientLayout>
          {children}
         </ClientLayout>
      </body>
    </html>
  );
}