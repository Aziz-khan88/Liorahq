
import styles from "@/styles/sessions/sessions.module.scss"
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import MainSetting from "@/src/app/settings/settingcomponents/mainsetting";



const Page = () => {
    return (
        <div className={styles.sessionPage}>
            <div className={styles.sessionContent} >
                <HeaderSession title="Settings" />
                <MainSetting />
            </div>
        </div>
    );
};

export default Page;
