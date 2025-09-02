"use client";
import { useState } from "react";
import styles from "@/styles/courses/coursescomponents/courseslisting.module.scss";
import Course01 from "media/images/courses/course01.webp";
import Course02 from "media/images/courses/course02.webp";
import Course03 from "media/images/courses/course03.webp";
import Image from "next/image";
import Link from "next/link";

// Course Data
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

const CoursesListing = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 6;

    const filteredCourses = activeTab === "all"
        ? coursesData
        : coursesData.filter(course => course.status === activeTab);

    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const startIndex = (currentPage - 1) * coursesPerPage;
    const paginatedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className={styles.coursesContainer}>
            {/* Tabs */}
            <ul className={styles.coursesTabs}>
                {["all", "not-started", "in-progress", "completed"].map(tab => (
                    <li
                        key={tab}
                        className={activeTab === tab ? styles.active : ""}
                        onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                    >
                        {tab === "all" && "All Courses"}
                        {tab === "not-started" && "Not Started"}
                        {tab === "in-progress" && "In Progress"}
                        {tab === "completed" && "Completed"}
                    </li>
                ))}
            </ul>

            {/* Courses */}
            <div className={styles.coursesContent}>
                {paginatedCourses.map(course => (
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

            <div className={styles.paginationContainer}>
                <div className={styles.coursesPagination}>
                    <div onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </div>
                    {[...Array(totalPages)].map((_, index) => (
                        <div
                            key={index}
                            className={currentPage === index + 1 ? styles.activePage : ""}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </div>
                    ))}
                    <div onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesListing;
