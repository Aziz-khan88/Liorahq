
import styles from "@/styles/dashboard/dashboard.module.scss"
import SessionBar from "./dashboardcomponents/sessionbar";
import AvailableCourses from "./dashboardcomponents/availablecourses";
import Overview from "./dashboardcomponents/overview";
import CommunityBoard from "./dashboardcomponents/communityboard";
import Post from "./dashboardcomponents/post";


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
