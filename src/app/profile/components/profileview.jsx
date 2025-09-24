import styles from "@/styles/settings/mainsetting.module.scss"
import Link from "next/link"
import { ArrowDownIcon, ProIcon } from "@/src/app/app-constants"
import Image from "next/image"
import ProImg from "media/images/dashboardImages/profileImg.webp";
const ProfileView = () => {
    return (
        <div className={styles.mainSetting}>
            <div className={styles.profileView}>
                <div className={styles.profileImage}>
                    <Image src={ProImg.src} alt="Profile Image" fill />
                    <div className={styles.profileIcon}>
                        <input type="file" />
                        <ProIcon />
                    </div>
                </div>
                <h3>James Bergson</h3>
                <Link href="/edit-profile" className={styles.btnEdit}>Edit Profile</Link>
            </div>
            <h5>Questionnaire</h5>
            <ul>
                <li><Link href="#">Gender</Link> <span><ArrowDownIcon /></span></li>
                <li><Link href="#">What goals do you have in mind?</Link> <span><ArrowDownIcon /></span></li>
                <li><Link href="#">What is your fitness level?</Link> <span><ArrowDownIcon /></span></li>
                <li><Link href="#">How much time can you commit to training each day?</Link> <span><ArrowDownIcon /></span></li>
                <li><Link href="#">When do you prefer to train?</Link> <span><ArrowDownIcon /></span></li>
            </ul>
        </div>
    )
}

export default ProfileView