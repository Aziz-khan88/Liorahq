import styles from "@/styles/create-post/newpost.module.scss"
import { FileIcon } from "@/src/app/app-constants"

const NewPost = () => {
    return (
        <div className={styles.newPost}>
            <div className={styles.newPostBox}>
                <div className={styles.inputFile}>
                    <input type="file" name="image" required />
                    <div className={styles.fileItem}>
                        <FileIcon />
                        <div className={styles.name}>Upload Media <span>Click to browse 50mb max</span></div>
                        <button>Browse</button>
                    </div>
                </div>
                <div className={styles.inputField}>
                    <label>Title</label>
                    <input type="text" name="title" required />
                </div>
                <div className={styles.inputField}>
                    <label>Description</label>
                    <textarea name="msg" required></textarea>
                </div>
            </div>

        </div>
    )
}

export default NewPost