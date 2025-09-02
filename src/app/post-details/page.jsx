
import styles from "@/styles/post-details/postdetails.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import PostDetails from "@/src/app/post-details/postdetailcomponents/postdetails";
import PostComments from "@/src/app/post-details/postdetailcomponents/postcomments";


const Page = () => {
    return (
        <>
            <div className={styles.postdetailsContent} >
                <HeaderSession title="Post Details" />
            </div>
            <div className={styles.postdetailsPage}>
                <div className={styles.postdetailsContent}>
                    <PostDetails />
                </div>
                <div className={styles.postdetailsSide}>
                    <PostComments />
                </div>
            </div>
        </>
    );
};

export default Page;
