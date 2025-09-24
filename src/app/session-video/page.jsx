
import styles from "@/styles/sessions/sessions.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";

import Video from "@/src/app/session-video/components/video";



const Page = () => {
    return (
        <div className={styles.sessionPage}>
            <div className={styles.sessionContent} >
                <HeaderSession title="Session Vidoe" />
                <Video />
            </div>
        </div>
    );
};

export default Page;
