import GetSessionProvider from "@/components/GetSessionProvider";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <GetSessionProvider>{children}</GetSessionProvider>
      </body>
    </html>
  );
}
