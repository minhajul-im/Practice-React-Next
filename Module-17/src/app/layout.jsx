import "./globals.css";

export const metadata = {
  title: "Module-17",
  description: "This is react, next, & prisma!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
