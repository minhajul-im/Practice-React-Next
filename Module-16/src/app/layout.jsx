import "./globals.css";
import { Toaster } from "react-hot-toast";
import FooterAllPage from "@/components/footer/FooterAllPage";
import NavbarAllPage from "@/components/navbar/NavbarAllPage";
import SubscribeSection from "@/components/reuseable/SubscribeSection";

export const metadata = {
  icons: {
    icon: "/LogoWorld.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NavbarAllPage />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
        <SubscribeSection />
        <FooterAllPage />
      </body>
    </html>
  );
}
