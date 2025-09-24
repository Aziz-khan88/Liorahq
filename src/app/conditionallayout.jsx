"use client";
import Footer from "@/src/app/layout/footer";
import Header from "@/src/app/layout/header";
import { usePathname } from "next/navigation";
import AuthLayout from "@/src/app/layout/authlayout";
import DashboardLayout from "@/src/app/layout/dashboadlayout";
import QuestionLayout from "@/src/app/layout/questionlayout";

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();

    const authRoutes = ["/sign-up", "/sign-in", "/forgot-password", "/opt-verification", "/reset-password"];
    const dashboardRoutes = [
        "/dashboard",
        "/sessions",
        "/session-details",
        "/courses",
        "/post-details",
        "/community-board",
        "/faqs",
        "/settings",
        "/change-password",
        "/terms-and-conditions",
        "/privacy-policy",
        "/create-post",
        "/session-assessment",
        "/profile",
        "/edit-profile",
        "/session-video"
    ];

    const isAuthPage = authRoutes.includes(pathname);
    const isDashPage = dashboardRoutes.includes(pathname);
    const questionnaireRoutes = ["/questionnaire", "/pricing"];
    const isQuestionnaire = questionnaireRoutes.includes(pathname);

    return (
        <>
            {isAuthPage ? (
                <AuthLayout>{children}</AuthLayout>
            ) : isDashPage ? (
                <DashboardLayout>{children}</DashboardLayout>
            ) : isQuestionnaire ? (
                <QuestionLayout>{children}</QuestionLayout>
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
};

export default ConditionalLayout;
