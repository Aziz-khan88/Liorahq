import styles from "@/styles/dashboard/dashboardcomponents/sessionbar.module.scss"
import ProImg from "media/images/dashboardImages/profileImg1.webp";
import Image from "next/image";


const SessionBar = () => {
    return (
        <div className={styles.sessionBar}>
            <div className={styles.sessionImg}>
                <Image src={ProImg.src} alt="Profile Image" fill />
            </div>
            <div className={styles.sessionContent}>
                <h4>Scheduled a Session With Your Fitness Admin</h4>
                <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
            </div>
            <div className={styles.sessionButton}>
                <button>Book Now in $49.99</button>
            </div>
        </div>
    )
}

export default SessionBar