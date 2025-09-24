
import styles from "@/styles/sessions/sessions.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import EditProfile from "@/src/app/edit-profile/components/editpro";



const Page = () => {
    return (
        <div className={styles.sessionPage}>
            <div className={styles.sessionContent} >
                <HeaderSession title="Edit Profile" />
                <EditProfile />
            </div>
        </div>
    );
};

export default Page;
