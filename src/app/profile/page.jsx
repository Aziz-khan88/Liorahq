
import styles from "@/styles/sessions/sessions.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import ProfileView from "@/src/app/profile/components/profileview";



const Page = () => {
    return (
        <div className={styles.sessionPage}>
            <div className={styles.sessionContent} >
                <HeaderSession title="Profile" />
                <ProfileView />
            </div>
        </div>
    );
};

export default Page;
