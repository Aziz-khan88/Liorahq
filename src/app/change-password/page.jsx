
import styles from "@/styles/sessions/sessions.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import ChangePassword from "@/src/app/change-password/components/changepassword";



const Page = () => {
    return (
        <div className={styles.sessionPage}>
            <div className={styles.sessionContent} >
                <HeaderSession title="Change Password" />
                <ChangePassword />
            </div>
        </div>
    );
};

export default Page;
