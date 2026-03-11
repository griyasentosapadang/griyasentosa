import "./globals.css";

export const metadata = {
  title: "Griya Sentosa",
  description: "Perumahan Nyaman dan Modern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}