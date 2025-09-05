import styles from "@/styles/post-details/postdetailcomponents/postcomments.module.scss"
import ProImg from "media/images/dashboardImages/profileImg.webp";
import Image from "next/image";
import { CommentsIcon } from "@/src/app/app-constants";


const PostComments = () => {
    return (
        <div className={styles.postComments}>
            <h2>Comments - 23</h2>
            <div className={styles.postCommentBox}>
                <div className={styles.postCommentItem}>
                    <div className={styles.postCommentHeader}>
                        <div className={styles.Image}>
                            <Image src={ProImg.src} alt="Profile Image" fill />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.namee}>
                                <h4>Livia Aminoff</h4>
                                <span className={styles.time}>28 mins ago</span>
                            </div>
                            <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur. Non elit phasellus nisi consectetur amet faucibus eu convallis.</div>
                            <div className={styles.replyIcon}> <CommentsIcon />Reply</div>
                        </div>
                    </div>
                    <div className={styles.commentsReply}>
                        <div className={styles.postCommentHeader}>
                            <div className={styles.Image}>
                                <Image src={ProImg.src} alt="Profile Image" fill />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.namee}>
                                    <h4>Livia Aminoff</h4>
                                    <span className={styles.time}>28 mins ago</span>
                                </div>
                                <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur. Non elit phasellus nisi consectetur amet faucibus eu convallis.</div>
                                <div className={styles.replyIcon}> <CommentsIcon />Reply</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.postCommentHeader}>
                        <div className={styles.Image}>
                            <Image src={ProImg.src} alt="Profile Image" fill />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.namee}>
                                <h4>Livia Aminoff</h4>
                                <span className={styles.time}>28 mins ago</span>
                            </div>
                            <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur. Non elit phasellus nisi consectetur amet faucibus eu convallis.</div>
                            <div className={styles.replyIcon}> <CommentsIcon />Reply</div>
                        </div>

                    </div>
                    <div className={styles.postCommentHeader}>
                        <div className={styles.Image}>
                            <Image src={ProImg.src} alt="Profile Image" fill />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.namee}>
                                <h4>Livia Aminoff</h4>
                                <span className={styles.time}>28 mins ago</span>
                            </div>
                            <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur. Non elit phasellus nisi consectetur amet faucibus eu convallis.</div>
                            <div className={styles.replyIcon}> <CommentsIcon />Reply</div>
                        </div>

                    </div>
                </div>
                <div className={styles.replyBox}>
                    <div className={styles.formBox}>
                        <input type="text" placeholder="Type your comment..." required />
                        <button type="submit">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComments