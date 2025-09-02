export const metadata = {
    title: "New Post",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "New Post",
        description: "",
        url: "/create-post",
        siteName: "Liora HQ",
        locale: "en_US",
        type: "website",
        images: "#",
    },
    //===== Canonical =====
    alternates: { canonical: "/create-post" },

};

export default function RootLayout({ children }) {
    return children;
}