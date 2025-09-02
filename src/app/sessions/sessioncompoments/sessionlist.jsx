import styles from "@/styles/sessions/sessioncompoments/sessionlist.module.scss"
import Session01 from "media/images/session/1.webp"
import Image from "next/image"
import Link from "next/link"

const SessionList = () => {
    return (
        <>

            <div className={styles.sessionList}>
                <div className={styles.sessionTitle}>Fitness Session</div>
                <div className={styles.sessionWarrper}>
                    <div className={styles.sessionListing}>
                        <div className={styles.Image}>
                            <Image src={Session01.src} alt="Profile Image" width={45} height={45} />
                        </div>
                        <div className={styles.Content}>
                            <h4><Link href="/session-details">Scheduled a Session With Your Fitness Admin</Link></h4>
                            <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
                        </div>
                        <div className={styles.buttonSec}>
                            <Link href="/session-details">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.sessionWarrper}>
                    <div className={styles.sessionListing}>
                        <div className={styles.Image}>
                            <Image src={Session01.src} alt="Profile Image" width={45} height={45} />
                        </div>
                        <div className={styles.Content}>
                            <h4>Scheduled a Session With Your Fitness Admin</h4>
                            <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
                        </div>
                        <div className={styles.buttonSec}>
                            <Link href="/session-details">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sessionList}>
                <div className={styles.sessionTitle}>Health Care Session</div>
                <div className={styles.sessionWarrper}>
                    <div className={styles.sessionListing}>
                        <div className={styles.Image}>
                            <Image src={Session01.src} alt="Profile Image" width={45} height={45} />
                        </div>
                        <div className={styles.Content}>
                            <h4>Scheduled a Session With Your Fitness Admin</h4>
                            <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
                        </div>
                        <div className={styles.buttonSec}>
                            <Link href="/session-details">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.sessionWarrper}>
                    <div className={styles.sessionListing}>
                        <div className={styles.Image}>
                            <Image src={Session01.src} alt="Profile Image" width={45} height={45} />
                        </div>
                        <div className={styles.Content}>
                            <h4>Scheduled a Session With Your Fitness Admin</h4>
                            <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
                        </div>
                        <div className={styles.buttonSec}>
                            <Link href="/session-details">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sessionList}>
                <div className={styles.sessionTitle}>Life Coaching</div>
                <div className={styles.sessionWarrper}>
                    <div className={styles.sessionListing}>
                        <div className={styles.Image}>
                            <Image src={Session01.src} alt="Profile Image" width={45} height={45} />
                        </div>
                        <div className={styles.Content}>
                            <h4>Scheduled a Session With Your Fitness Admin</h4>
                            <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
                        </div>
                        <div className={styles.buttonSec}>
                            <Link href="/session-details">Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.sessionWarrper}>
                    <div className={styles.sessionListing}>
                        <div className={styles.Image}>
                            <Image src={Session01.src} alt="Profile Image" width={45} height={45} />
                        </div>
                        <div className={styles.Content}>
                            <h4>Scheduled a Session With Your Fitness Admin</h4>
                            <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
                        </div>
                        <div className={styles.buttonSec}>
                            <Link href="/session-details">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SessionList