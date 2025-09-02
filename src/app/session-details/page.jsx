
import styles from "@/styles/session-details/sessiondetails.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import RelatedCourses from "@/src/app/community-board/communitycomponents/relatedcourses";
import SessionDetails from "@/src/app/session-details/sessiondetailcompoments/sessiondetails";



const Page = () => {
    return (
        <>
            <div className={styles.sessiondetailsContent} >
                <HeaderSession title="Session Details" />
            </div>
            <div className={styles.sessiondetailsPage}>
                <div className={styles.sessiondetailsContent}>
                    <SessionDetails />
                </div>
                <div className={styles.sessiondetailsSide}>
                    <RelatedCourses />
                </div>
            </div>
        </>
    );
};

export default Page;
