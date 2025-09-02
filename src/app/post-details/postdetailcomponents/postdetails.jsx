import styles from "@/styles/post-details/postdetailcomponents/postitem.module.scss"
import Post01 from "media/images/post/1.webp"
import Image from "next/image"
import ProImg from "media/images/dashboardImages/profileImg.webp";
import { CommentsIcon, HeartIcon, ShareIcon, ThreeDots } from "../../app-constants";

const PostDetails = () => {
    return (
        <div className={styles.detailspostWapper}>
            <div className={styles.detailspostHeader}>
                <div className={`${styles.detailspostImg} ${styles.active}`}>
                    <Image src={ProImg.src} alt="Profile Image" fill />
                </div>
                <div className={styles.detailspostContent}>
                    <h6>Corey Geidt</h6>
                    <div className={styles.date}>1 day ago</div>
                </div>
                <div className={styles.detailspostbtn}><ThreeDots /></div>
            </div>

            <div className={styles.detailspostBanner}>
                <Image src={Post01.src} alt="Profile Image" fill />
            </div>
            <div className={styles.detailspostSocial}>
                <div className={styles.socialItem}><HeartIcon />42 likes</div>
                <div className={styles.socialItem}><CommentsIcon />10 Comments</div>
                <div className={styles.socialItem}><ShareIcon />Share</div>
            </div>
            <div className={styles.detailspostTxt}>
                <h5>Quis penatibus laoreet tincidunt nunc</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Non id elit phasellus consectetur nisi amet faucibus eu convallis. Odio cras arcu feugiat metus eu volutpat. Lorem ipsum dolor sit amet consectetur. Non id elit phasellus consectetur nisi amet faucibus eu convallis. Odio cras arcu feugiat metus eu volutpat.Lorem ipsum dolor sit amet consectetur. Non id elit phasellus consectetur nisi amet faucibus eu convallis. Odio cras arcu feugiat metus eu volutpat.</p>
            </div>
        </div>
    )
}

export default PostDetails