
import styles from "@/styles/sessions/sessions.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import CoursesListing from "@/src/app/courses/coursescomponents/courseslisting";



const Page = () => {
    return (
        <div className={styles.sessionPage}>
            <div className={styles.sessionContent}>
                <HeaderSession title="Courses" />
                <CoursesListing />
            </div>
        </div>
    );
};

export default Page;
