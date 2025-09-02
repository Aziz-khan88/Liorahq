import styles from "@/styles/community/communitycomponents/communitypost.module.scss"
import Post01 from "media/images/post/1.webp"
import Post02 from "media/images/post/2.webp"
import ProImg from "media/images/dashboardImages/profileImg.webp";
import Image from "next/image";
import { CommentsIcon, HeartIcon, ShareIcon, ThreeDots } from "../../app-constants";

const CommunityPost = () => {
    return (
        <>
            <div className={styles.communitypostWapper}>
                <div className={styles.communitypostHeader}>
                    <div className={`${styles.communitypostImg} ${styles.active}`}>
                        <Image src={ProImg.src} alt="Profile Image" fill />
                    </div>
                    <div className={styles.communitypostContent}>
                        <h6>Corey Geidt</h6>
                        <div className={styles.date}>1 day ago</div>
                    </div>
                    <div className={styles.communitypostbtn}><ThreeDots /></div>
                </div>
                <div className={styles.communitypostTxt}>
                    <h5>Quis penatibus laoreet tincidunt nunc</h5>
                    <p>Non id elit phasellus consectetur nisi amet faucibus eu convallis. Odio cras arcu feugiat metus eu volutpat. Condimentum sapien nec nunc sit enim elit viverra enim aenean feugiat metus eu volutpat. Condimentum metus eu volutpat</p>
                </div>
                <div className={styles.communitypostBanner}>
                    <Image src={Post01.src} alt="Profile Image" fill />
                </div>
                <div className={styles.communitypostSocial}>
                    <div className={styles.socialItem}><HeartIcon />42 likes</div>
                    <div className={styles.socialItem}><CommentsIcon />10 Comments</div>
                    <div className={styles.socialItem}><ShareIcon />Share</div>
                </div>

            </div>
            <div className={styles.communitypostWapper}>
                <div className={styles.communitypostHeader}>
                    <div className={`${styles.communitypostImg} ${styles.active}`}>
                        <Image src={ProImg.src} alt="Profile Image" fill />
                    </div>
                    <div className={styles.communitypostContent}>
                        <h6>Corey Geidt</h6>
                        <div className={styles.date}>1 day ago</div>
                    </div>
                    <div className={styles.communitypostbtn}><ThreeDots /></div>
                </div>
                <div className={styles.communitypostTxt}>
                    <h5>Quis penatibus laoreet tincidunt nunc</h5>
                    <p>Non id elit phasellus consectetur nisi amet faucibus eu convallis. Odio cras arcu feugiat metus eu volutpat. Condimentum sapien nec nunc sit enim elit viverra enim aenean feugiat metus eu volutpat. Condimentum metus eu volutpat</p>
                </div>
                <div className={styles.communitypostBanner}>
                    <Image src={Post02.src} alt="Profile Image" fill />
                </div>
                <div className={styles.communitypostSocial}>
                    <div className={styles.socialItem}><HeartIcon />42 likes</div>
                    <div className={styles.socialItem}><CommentsIcon />10 Comments</div>
                    <div className={styles.socialItem}><ShareIcon />Share</div>
                </div>

            </div>
            <div className={styles.communitypostWapper}>
                <div className={styles.communitypostHeader}>
                    <div className={`${styles.communitypostImg} ${styles.active}`}>
                        <Image src={ProImg.src} alt="Profile Image" fill />
                    </div>
                    <div className={styles.communitypostContent}>
                        <h6>Corey Geidt</h6>
                        <div className={styles.date}>1 day ago</div>
                    </div>
                    <div className={styles.communitypostbtn}><ThreeDots /></div>
                </div>
                <div className={styles.communitypostTxt}>
                    <h5>Quis penatibus laoreet tincidunt nunc</h5>
                    <p>Non id elit phasellus consectetur nisi amet faucibus eu convallis. Odio cras arcu feugiat metus eu volutpat. Condimentum sapien nec nunc sit enim elit viverra enim aenean feugiat metus eu volutpat. Condimentum metus eu volutpat</p>
                </div>
                <div className={styles.communitypostBanner}>
                    <Image src={Post01.src} alt="Profile Image" fill />
                </div>
                <div className={styles.communitypostSocial}>
                    <div className={`${styles.socialItem} ${styles.active}`}><HeartIcon />42 likes</div>
                    <div className={styles.socialItem}><CommentsIcon />10 Comments</div>
                    <div className={styles.socialItem}><ShareIcon />Share</div>
                </div>

            </div>        </>

    )
}

export default CommunityPost