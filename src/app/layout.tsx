import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <StyledComponentsRegistry>
        <Header />
        {children}
        <Footer />
      </StyledComponentsRegistry>
      </body>
      </html>
  );
}