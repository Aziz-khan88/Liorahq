
import styles from "@/styles/post-details/postdetails.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import Assessment from "@/src/app/session-assessment/components/assessment";


const Page = () => {
    return (
        <>
            <div className={styles.postdetailsContent} >
                <HeaderSession title="Session Assessment" />
            </div>
            <div className={styles.postdetailsPage}>
                <Assessment />
            </div>
        </>
    );
};

export default Page;
