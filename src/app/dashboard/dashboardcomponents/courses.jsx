import styles from "@/styles/dashboard/dashboardcomponents/courses.module.scss"
import Image from "next/image";
import Link from "next/link";

const Courses = ({ item }) => {
    return (
        <div className={styles.coursesSection}>
            <div className={styles.coursesImg}>
                <Image src={item.img} alt="Profile Image" fill />
            </div>
            <div className={styles.coursesTxt}>
                <h3>{item.tit}</h3>
                <p>{item.txt}</p>
                <Link href={item.link}>
                    Purchase
                </Link>
            </div>
        </div>
    )
}

export default Courses