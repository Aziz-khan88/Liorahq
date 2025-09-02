
import styles from "@/styles/sessions/sessions.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import SessionList from "@/src/app/sessions/sessioncompoments/sessionlist"



const Page = () => {
    return (
        <div className={styles.sessionPage}>
            <div className={styles.sessionContent} >
                <HeaderSession title="Session" />
                <SessionList />
            </div>
        </div>
    );
};

export default Page;
