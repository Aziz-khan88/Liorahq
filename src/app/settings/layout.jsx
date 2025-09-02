export const metadata = {
    title: "Settings",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Settings",
        description: "",
        url: "/settings",
        siteName: "Liora HQ",
        locale: "en_US",
        type: "website",
        images: "#",
    },
    //===== Canonical =====
    alternates: { canonical: "/settings" },

};

export default function RootLayout({ children }) {
    return children;
}