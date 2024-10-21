import "./globals.css";

export const metadata = {
  title: "Hello there!", 
  image: "favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
