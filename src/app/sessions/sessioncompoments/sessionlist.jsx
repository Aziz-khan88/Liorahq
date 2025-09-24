"use client";
import { useState } from "react";
import styles from "@/styles/sessions/sessioncompoments/sessionlist.module.scss";
import Session01 from "media/images/session/1.webp";
import Image from "next/image";
import Link from "next/link";

// Dummy data (can come from API later)
const scheduledSessions = [
    {
        category: "Fitness Session",
        title: "Scheduled a Session With Your Fitness Admin",
        desc: "Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.",
        link: "/session-video",
    },
    {
        category: "Health Care Session",
        title: "Scheduled a Session With Your Health Coach",
        desc: "Talk about diet plans, recovery strategies and your overall wellness.",
        link: "/session-video",
    },
];

const completedSessions = [
    {
        category: "Life Coaching",
        title: "Completed a Session With Your Life Coach",
        desc: "You discussed new habits and strategies. Check your notes for follow-up actions.",
        link: "/session-summary",
    },
];

const SessionList = () => {
    const [activeTab, setActiveTab] = useState("scheduled");
    const renderSessions = (sessions) =>
        sessions.map((session, index) => (
            <div key={index} className={styles.sessionList}>
                <div className={styles.sessionTitle}>{session.category}</div>
                <div className={styles.sessionWrapper}>
                    <div className={styles.sessionListing}>
                        <div className={styles.Image}>
                            <Image
                                src={Session01.src}
                                alt="Profile Image"
                                width={45}
                                height={45}
                            />
                        </div>
                        <div className={styles.Content}>
                            <h4>
                                {session.link.includes("details") ? (
                                    <Link href="/session-details">{session.title}</Link>
                                ) : (
                                    session.title
                                )}
                            </h4>
                            <p>{session.desc}</p>
                        </div>
                        <div className={styles.buttonSec}>
                            <Link href={session.link}>
                                {activeTab === "scheduled" ? "Start Now" : "View Summary"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className={styles.sessionTabs}>
            <ul className={styles.coursesTabs}>
                <li
                    className={`${activeTab === "scheduled" ? styles.active : ""}`}
                    onClick={() => setActiveTab("scheduled")}
                >
                    Scheduled
                </li>
                <li
                    className={`${activeTab === "completed" ? styles.active : ""}`}
                    onClick={() => setActiveTab("completed")}
                >
                    Completed
                </li>
            </ul>

            {activeTab === "scheduled" && renderSessions(scheduledSessions)}
            {activeTab === "completed" && renderSessions(completedSessions)}
        </div>
    );
};

export default SessionList;
