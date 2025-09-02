export const metadata = {
    title: "Login Page",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Login Page",
        description: "",
        url: "/sign-in",
        siteName: "Liora HQ",
        locale: "en_US",
        type: "website",
        images: "#",
    },
    //===== Canonical =====
    alternates: { canonical: "/sign-in" },

};

export default function RootLayout({ children }) {
    return children;
}