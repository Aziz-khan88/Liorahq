"use client";
import { useState } from "react";
import styles from "@/styles/sessions/sessioncompoments/headersession.module.scss"
import { CreateIcon, FilterIcon, SearchIcon, SortDownIcon, SortUpIcon } from "@/src/app/app-constants";
import Link from "next/link";


const HeaderSession = ({ title }) => {
    const [session, setSession] = useState("All");

    return (
        <div className={styles.headerMain}>
            <div className={styles.headerTitle}>{title}</div>
            <div className={styles.headerAction}>
                {title === "Courses" ? (
                    <ul>
                        <li>
                            <form action="">
                                <div className={styles.searchBtn}>
                                    <input type="text" placeholder="Search" required />
                                    <button type="submit"><SearchIcon /></button>
                                </div>
                            </form>
                        </li>
                        <li>
                            <div className={styles.sortContainer}>
                                <span className={styles.label}>Sort by</span>
                                <div className={styles.arrows}>
                                    <SortUpIcon />
                                    <SortDownIcon />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.fillterBox}>
                                <input type="text" placeholder="Filter" />
                                <div className={styles.filterIcon}><FilterIcon /></div>
                            </div>
                        </li>
                    </ul>
                ) : title === "Community Board" ? (
                    <div className={styles.createPost}>
                        <Link href="/create-post"> <CreateIcon />Create Post</Link>
                    </div>
                ) : title === "Sessions" ? (
                    <ul>
                        <li>
                            <select
                                value={session}
                                onChange={(e) => setSession(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="01">01 Session</option>
                                <option value="02">02 Sessions</option>
                                <option value="03">03 Sessions</option>
                            </select>
                        </li>
                        <li>
                            <input type="date" placeholder="Select Date" />
                        </li>
                    </ul >
                ) : title === "Create Post" ? (
                    <ul className={styles.newPost}>
                        <li>
                            <button>Schedule</button>
                        </li>
                        <li>
                            <Link href="/post-details">Post</Link>
                        </li>
                    </ul >
                ) : title === "Edit Profile" ? (
                    <ul className={styles.newPost}>
                        <li>
                            <button>Cancel</button>
                        </li>
                        <li>
                            <Link href="/profile">Save</Link>
                        </li>
                    </ul >
                ) : (
                    ""
                )}
            </div >
        </div >

    )
}

export default HeaderSession