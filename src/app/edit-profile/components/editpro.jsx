
import styles from "@/styles/settings/mainsetting.module.scss"


const EditProfile = () => {

    return (
        <div className={styles.mainSetting}>
            <form action="">
                <div className={styles.editProfileWapper}>
                    <div className={styles.editProFiled}>
                        <label>First Name</label>
                        <input type="text" defaultValue="James" />
                    </div>
                    <div className={styles.editProFiled}>
                        <label>Last Name</label>
                        <input type="text" defaultValue="Bergson" />
                    </div>
                    <div className={styles.editProFiled}>
                        <label>Email</label>
                        <input type="email" defaultValue="james_berg@gmail.com" />
                    </div>
                    <div className={styles.editProFiled}>
                        <label>Gender</label>
                        <select name="gender" defaultValue="Male">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={styles.editProFiled}>
                        <label>Date of Birth</label>
                        <input type="date" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfile