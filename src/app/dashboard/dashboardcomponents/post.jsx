import styles from "@/styles/dashboard/dashboardcomponents/post.module.scss"
import Post01 from "media/images/post/1.webp"
import Post02 from "media/images/post/2.webp"
import ProImg from "media/images/dashboardImages/profileImg.webp";
import Image from "next/image";
import { CommentsIcon, HeartIcon, ShareIcon, Star, ThreeDots } from "@/src/app/app-constants";
import Link from "next/link";

const Post = () => {
    return (
        <>
            <div className={styles.postWapper}>
                <div className={styles.postHeader}>
                    <div className={styles.postImg}>
                        <Image src={ProImg.src} alt="Profile Image" fill />
                    </div>
                    <div className={styles.postContent}>
                        <h6>Corey Geidt <span className={styles.star}><Star />4.5</span></h6>
                        <div className={styles.date}>Apr 23, 2023 • 08:00 PM</div>
                    </div>
                    <div className={styles.postbtn}><ThreeDots /></div>
                </div>
                <div className={styles.postTxt}>
                    <h5>Quis penatibus laoreet tincidunt nunc</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.</p>
                </div>
                <div className={styles.postBanner}>
                    <Link href="/post-details">
                        <Image src={Post01.src} alt="Profile Image" fill />
                    </Link>
                </div>
                <div className={styles.postSocial}>
                    <div className={styles.socialItem}><HeartIcon />42 likes</div>
                    <div className={styles.socialItem}><CommentsIcon />10 Comments</div>
                    <div className={styles.socialItem}><ShareIcon />Share</div>
                </div>

            </div>
            <div className={styles.postWapper}>
                <div className={styles.postHeader}>
                    <div className={styles.postImg}>
                        <Image src={ProImg.src} alt="Profile Image" fill />
                    </div>
                    <div className={styles.postContent}>
                        <h6>Corey Geidt <span className={styles.star}><Star />4.5</span></h6>
                        <div className={styles.date}>Apr 23, 2023 • 08:00 PM</div>
                    </div>
                    <div className={styles.postbtn}><ThreeDots /></div>
                </div>
                <div className={styles.postTxt}>
                    <h5>Quis penatibus laoreet tincidunt nunc</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.</p>
                </div>
                <div className={styles.postBanner}>
                    <Image src={Post02.src} alt="Profile Image" fill />
                </div>
                <div className={styles.postSocial}>
                    <div className={styles.socialItem}><HeartIcon />42 likes</div>
                    <div className={styles.socialItem}><CommentsIcon />10 Comments</div>
                    <div className={styles.socialItem}><ShareIcon />Share</div>
                </div>

            </div>
            <div className={styles.postWapper}>
                <div className={styles.postHeader}>
                    <div className={styles.postImg}>
                        <Image src={ProImg.src} alt="Profile Image" fill />
                    </div>
                    <div className={styles.postContent}>
                        <h6>Corey Geidt <span className={styles.star}><Star />4.5</span></h6>
                        <div className={styles.date}>Apr 23, 2023 • 08:00 PM</div>
                    </div>
                    <div className={styles.postbtn}><ThreeDots /></div>
                </div>
                <div className={styles.postTxt}>
                    <h5>Quis penatibus laoreet tincidunt nunc</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.</p>
                </div>
                <div className={styles.postBanner}>
                    <Image src={Post01.src} alt="Profile Image" fill />
                </div>
                <div className={styles.postSocial}>
                    <div className={styles.socialItem}><HeartIcon />42 likes</div>
                    <div className={styles.socialItem}><CommentsIcon />10 Comments</div>
                    <div className={styles.socialItem}><ShareIcon />Share</div>
                </div>

            </div>

        </>

    )
}

export default Post