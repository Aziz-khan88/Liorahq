import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Footer from "@/src/app/layout/footer";
import Header from "@/src/app/layout/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  // metadataBase: new URL("#"),
  title: "Home",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "Home",
    description: "",
    url: "/",
    siteName: "Liora HQ",
    locale: "en_US",
    type: "website",
    images: "#",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
