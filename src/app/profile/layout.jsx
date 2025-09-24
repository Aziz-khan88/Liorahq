export const metadata = {
    title: "Profile",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Profile",
        description: "",
        url: "/profile",
        siteName: "Liora HQ",
        locale: "en_US",
        type: "website",
        images: "#",
    },
    //===== Canonical =====
    alternates: { canonical: "/profile" },

};

export default function RootLayout({ children }) {
    return children;
}