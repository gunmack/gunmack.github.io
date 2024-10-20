export const metadata = {
  title: "Julkar Naine Reedoy", 
  image: "favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
