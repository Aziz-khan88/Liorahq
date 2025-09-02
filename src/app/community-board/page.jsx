
import styles from "@/styles/community/community.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import CommunityPost from "@/src/app/community-board/communitycomponents/communitypost";
import RelatedCourses from "@/src/app/community-board/communitycomponents/relatedcourses";




const Page = () => {
    return (
        <div >
            <div className={styles.sessionContent}>
                <HeaderSession title="Community Board" />
            </div>
            <div className={styles.communityPage}>
                <div className={styles.communityContent}>
                    <CommunityPost />
                </div>
                <div className={styles.communitySide}>
                    <RelatedCourses />
                </div>
            </div>
        </div>
    );
};

export default Page;
