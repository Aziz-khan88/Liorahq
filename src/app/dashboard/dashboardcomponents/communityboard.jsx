import styles from "@/styles/dashboard/dashboardcomponents/communityboard.module.scss"
import ProImg from "media/images/dashboardImages/profileImg1.webp";
import Image from "next/image";


const CommunityBoard = () => {
    return (
        <div className={styles.communityBoard}>
            <h2>Community Board</h2>
            <div className={styles.communityFrom}>
                <div className={styles.communityImg}>
                    <Image src={ProImg.src} alt="Profile Image" fill />
                </div>
                <div className={styles.communityInput}>
                    <input type="text" name="" placeholder="Create your post..." />
                </div>
            </div>
        </div>
    )
}

export default CommunityBoard