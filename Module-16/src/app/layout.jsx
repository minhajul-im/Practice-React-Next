import "./globals.css";

export const metadata = {
  title: "Module-16",
  description: "This is an agency site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
