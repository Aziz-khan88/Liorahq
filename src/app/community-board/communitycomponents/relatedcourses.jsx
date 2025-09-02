import styles from "@/styles/community/communitycomponents/relatedcourses.module.scss"
import Course01 from "media/images/courses/course01.webp";
import Course02 from "media/images/courses/course02.webp";
import Course03 from "media/images/courses/course03.webp";
import Image from "next/image";
import Link from "next/link";


const coursesData = [
    { id: 1, title: "High Intensity Zero Equipment Workout", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$36.00", img: Course01.src, status: "not-started" },
    { id: 2, title: "Yoga for Flexibility", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$40.00", img: Course02.src, status: "in-progress" },
    { id: 3, title: "Advanced Strength Training", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$50.00", img: Course03.src, status: "completed" },
    { id: 4, title: "Cardio Blast", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$36.00", img: Course03.src, status: "in-progress" },
    { id: 5, title: "Pilates Core Workout", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$45.00", img: Course03.src, status: "not-started" },
    { id: 6, title: "HIIT for Beginners", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$36.00", img: Course02.src, status: "completed" },
    { id: 7, title: "Strength & Conditioning", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$55.00", img: Course01.src, status: "not-started" },
    { id: 8, title: "Mobility Training", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$38.00", img: Course02.src, status: "in-progress" },
    { id: 9, title: "Endurance Boost", description: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.", price: "$42.00", img: Course03.src, status: "completed" },
];


const RelatedCourses = () => {
    return (
        <div className={styles.relatedcourses}>
            <h2>Related Courses</h2>
            <div className={styles.coursesContent}>
                {coursesData.map(course => (
                    <div className={styles.coursesSection} key={course.id}>
                        <div className={styles.coursesImg}>
                            <Image src={course.img} alt={course.title} fill />
                        </div>
                        <div className={styles.coursesTxt}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <div className={styles.coursesAction}>
                                <div className={styles.coursesPrice}>{course.price}</div>
                                <div className={styles.coursesBtn}>
                                    <Link href="#">Purchase</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedCourses