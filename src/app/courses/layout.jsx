export const metadata = {
    title: "Dashboard",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "dashboard",
        description: "",
        url: "/dashboard",
        siteName: "Liora HQ",
        locale: "en_US",
        type: "website",
        images: "#",
    },
    //===== Canonical =====
    alternates: { canonical: "/dashboard" },

};

export default function RootLayout({ children }) {
    return children;
}