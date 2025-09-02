
import styles from "@/styles/post-details/postdetails.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import NewPost from "@/src/app/create-post/components/newpost";


const Page = () => {
    return (
        <>
            <div className={styles.postdetailsContent} >
                <HeaderSession title="Create Post" />
            </div>
            <div className={styles.postdetailsPage}>
                <NewPost />
            </div>
        </>
    );
};

export default Page;
