
import styles from "@/styles/dashboard/dashboard.module.scss"
import SessionBar from "@/src/app/dashboard/dashboardcomponents/sessionbar";
import AvailableCourses from "@/src/app/dashboard/dashboardcomponents/availablecourses";
import Overview from "@/src/app/dashboard/dashboardcomponents/overview";
import CommunityBoard from "@/src/app/dashboard/dashboardcomponents/communityboard";
import Post from "@/src/app/dashboard/dashboardcomponents/post";


const Page = () => {
    return (
        <div className={styles.dashboardPage}>
            <div className={styles.dashboardContent}>
                <SessionBar />
                <AvailableCourses />
                <Overview />
            </div>
            <div className={styles.dashboardSide}>
                <CommunityBoard />
                <Post />
            </div>

        </div>
    );
};

export default Page;
