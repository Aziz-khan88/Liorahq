"use client";
import { useState } from "react";
import styles from "@/styles/dashboardlayout/dashheader.module.scss";
import { ArrowDownIcon, LogoutIcon, MainLogo, NotificationIcon, ProfileIcon } from "@/src/app/app-constants";
import Link from "next/link";
import ProImg from "media/images/dashboardImages/profileImg.webp";
import Image from "next/image";

const DashboardHeader = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOpen((prev) => !prev);
        setIsProfileOpen(false); // close profile when notification opens
    };

    const toggleProfile = () => {
        setIsProfileOpen((prev) => !prev);
        setIsNotificationOpen(false); // close notifications when profile opens
    };

    return (
        <div className={styles.dashHeader}>
            {/* Logo */}
            <div className={styles.logoMain}>
                <Link href="/">
                    <MainLogo />
                </Link>
            </div>

            <div className={styles.profileMenu}>
                {/* Notification Menu */}
                <div
                    className={`${styles.profileNotification} ${isNotificationOpen ? styles.active : ""}`}
                    onClick={toggleNotification}
                >
                    <NotificationIcon />
                    <div className={styles.dropDownMenu}>
                        <div className={styles.headerNotification}>
                            <div className={styles.tit}>Notifications</div>
                            <div className={styles.switch} onClick={(e) => e.stopPropagation()}>
                                <div className={`${styles.switchBox} form-check form-switch`}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                    />
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div className={styles.notifyImg}><Image src={ProImg.src} alt="Profile Image" fill /></div>
                                <div className={styles.notifyUser}>
                                    Cheyenne_Bergson05 <span>sent you a friend request</span>
                                    <div className={styles.notifyDate}>2 hrs ago</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.notifyImg}><Image src={ProImg.src} alt="Profile Image" fill /></div>
                                <div className={styles.notifyUser}>
                                    Cheyenne_Bergson05 <span>sent you a friend request</span>
                                    <div className={styles.notifyDate}>2 hrs ago</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.notifyImg}><Image src={ProImg.src} alt="Profile Image" fill /></div>
                                <div className={styles.notifyUser}>
                                    Cheyenne_Bergson05 <span>sent you a friend request</span>
                                    <div className={styles.notifyDate}>2 hrs ago</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.notifyImg}><Image src={ProImg.src} alt="Profile Image" fill /></div>
                                <div className={styles.notifyUser}>
                                    Cheyenne_Bergson05 <span>sent you a friend request</span>
                                    <div className={styles.notifyDate}>2 hrs ago</div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.notifyImg}><Image src={ProImg.src} alt="Profile Image" fill /></div>
                                <div className={styles.notifyUser}>
                                    Cheyenne_Bergson05 <span>sent you a friend request</span>
                                    <div className={styles.notifyDate}>2 hrs ago</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Profile Menu */}
                <div className={`${styles.profilelinks} ${isProfileOpen ? styles.active : ""}`} onClick={toggleProfile} >
                    <div className={styles.profileImage}>
                        <Image src={ProImg.src} alt="Profile Image" fill />
                    </div>
                    <div className={styles.ArrowIcon}>
                        <ArrowDownIcon />
                    </div>
                    <div className={`${styles.dropDownProfile}`}>
                        <ul className={styles.toggleProfile}>
                            <li>
                                <Link href="/profile"><ProfileIcon />View Profile</Link>
                            </li>
                            <li>
                                <Link href="/sign-in"><LogoutIcon />Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashboardHeader;
