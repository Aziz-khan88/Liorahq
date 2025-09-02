export const metadata = {
    title: "Community Board",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Community Board",
        description: "",
        url: "/community-board",
        siteName: "Liora HQ",
        locale: "en_US",
        type: "website",
        images: "#",
    },
    //===== Canonical =====
    alternates: { canonical: "/community-board" },

};

export default function RootLayout({ children }) {
    return children;
}