import styles from "@/styles/questionnaire/questionnaire.module.scss";
import { PriceIcon } from "@/src/app/app-constants";


const Page = () => {


    return (
        <div className={styles.questionWrapper}>
            <div className={styles.questionContainer}>
                <div className={styles.questionHeader}>
                    <div className={styles.questionTitle}>
                        <h1>Unlock Exclusive Perks.</h1>
                        <p>
                            Join our community of insiders and get access to members-only benefits. From early product launches to special discounts—it's all yours. Enjoy tailored updates, expert tips, and premium content. Why wait? Subscribe now and experience more than just updates.
                        </p>
                    </div>
                    <div className={styles.questionBtn}>
                        <button
                            className={styles.skipBtn}
                        >
                            Skip
                        </button>
                    </div>
                </div>
                <div className={styles.pricingContainer}>
                    <div className={styles.pricingItem}>
                        <div className={styles.name}>Free Plan <span>Free for personal payments.</span></div>
                        <div className={styles.price}>$0<span>/month</span></div>
                        <ul>
                            <li><PriceIcon />Up to 200 appointments</li>
                            <li><PriceIcon />Accept payments</li>
                            <li><PriceIcon />Your custom Booking Page</li>
                        </ul>
                        <button>
                            Get Free Plan
                        </button>
                    </div>
                    <div className={styles.pricingItem}>
                        <div className={styles.name}>Advanced <span>Minimal fees for advanced transactions</span></div>
                        <div className={styles.price}>$19<span>/month</span></div>
                        <ul>
                            <li><PriceIcon />Up to 200 appointments</li>
                            <li><PriceIcon />Accept payments</li>
                            <li><PriceIcon />Your custom Booking Page</li>
                            <li><PriceIcon />iOS and Android apps</li>

                        </ul>
                        <button>
                            Get Advanced Plan
                        </button>
                    </div>
                    <div className={styles.pricingItem}>
                        <div className={styles.name}>Business <span>Premium business transactions</span></div>
                        <div className={styles.price}>$0<span>/month</span></div>
                        <ul>
                            <li><PriceIcon />Up to 200 appointments</li>
                            <li><PriceIcon />Accept payments</li>
                            <li><PriceIcon />Your custom Booking Page</li>
                            <li><PriceIcon />iOS and Android apps</li>
                        </ul>
                        <button>
                            Get Business Plan
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;
