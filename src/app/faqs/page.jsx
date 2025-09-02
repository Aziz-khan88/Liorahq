
import styles from "@/styles/faqs/faqs.module.scss";
import HeaderSession from "@/src/app/sessions/sessioncompoments/headersession";
import Faq from "@/src/app/faqs/faqcomonents/faq";


const Page = () => {
    return (
        <div className={styles.faqsPage}>
            <div className={styles.sessionContent}>
                <HeaderSession title="FAQ's" />
            </div>
            <div className={styles.faqsContent}>
                <Faq />
            </div>
        </div>
    );
};

export default Page;
