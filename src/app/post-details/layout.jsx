export const metadata = {
    title: "Post Details",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Post Details",
        description: "",
        url: "/post-details",
        siteName: "Liora HQ",
        locale: "en_US",
        type: "website",
        images: "#",
    },
    //===== Canonical =====
    alternates: { canonical: "/post-details" },

};

export default function RootLayout({ children }) {
    return children;
}