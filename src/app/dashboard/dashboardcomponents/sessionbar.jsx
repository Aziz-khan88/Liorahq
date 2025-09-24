"use client";
import { useState } from "react";
import styles from "@/styles/dashboard/dashboardcomponents/sessionbar.module.scss"
import ProImg from "media/images/dashboardImages/profileImg1.webp";
import Image from "next/image";
import CalendarPopup from "@/src/app/dashboard/dashboardcomponents/calendarpopup";


const SessionBar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handleOpenModal = () => {
        setShowPopup(true);
    };
    return (
        <div className={styles.sessionBar}>
            <div className={styles.sessionImg}>
                <Image src={ProImg.src} alt="Profile Image" fill />
            </div>
            <div className={styles.sessionContent}>
                <h4>Scheduled a Session With Your Fitness Admin</h4>
                <p>Connect with your fitness admin to discuss your progress, set new goals and plan your next online session.</p>
            </div>
            <div className={styles.sessionButton}>
                <button onClick={handleOpenModal}>Book Now in $49.99</button>
            </div>
            <CalendarPopup show={showPopup} onHide={() => setShowPopup(false)} />
        </div>
    )
}

export default SessionBar