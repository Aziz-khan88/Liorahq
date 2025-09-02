"use client";
import { useState } from "react";
import styles from "@/styles/session-details/sessiondetailcompoments/sessiondetails.module.scss";
import Post01 from "media/images/post/1.webp";
import Image from "next/image";
import { ArrowDownIcon, DocumentsIcon, PlayIcon, Points, TaskIcon } from "@/src/app/app-constants";
import Link from "next/link";

const SessionDetails = () => {
    const [activeIndex, setActiveIndex] = useState(null); // store active section index

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.detailContainer}>
            <div className={styles.detailBanner}>
                <Image src={Post01.src} alt="Profile Image" fill />
            </div>

            <div className={styles.enrolledSec}>
                <div className={styles.Enrolled}>28 enrolled</div>
                <div className={styles.Price}>$26.00</div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.title}>
                    <h3>High Intensity Zero Equipment Workout</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Elit amet leo vel posuere.
                        Scelerisque nulla faucibus arcu eget. Malesuada eget id ullamcorper morbi.
                    </p>
                </div>
                <div className={styles.action}>
                    <button>Enroll Now</button>
                </div>
            </div>

            <div className={styles.specificationdSec}>
                <div className={styles.tit}>Specifications</div>
                <ul>
                    <li>Study Coaching</li>
                    <li>Time Management</li>
                </ul>
            </div>

            <div className={styles.keypointSec}>
                <div className={styles.tit}>What you’ll learn</div>
                <ul>
                    <li><Points />28-day progressive workout plan (no equipment required)</li>
                    <li><Points />Daily 30-minutes sessions</li>
                    <li><Points />Core, strength, and fat-burning workouts</li>
                    <li><Points />Rest & recovery days included</li>
                    <li><Points />Beginner-friendly + Advanced modifiers </li>
                </ul>
            </div>

            <div className={styles.keypointSec}>
                <div className={styles.tit}>This course includes</div>
                <ul>
                    <li><Points />16 hrs on-demand video</li>
                    <li><Points />3 articles</li>
                    <li><Points />4 downloads</li>
                    <li><Points />2 Assessments</li>
                </ul>
            </div>


            <div className={styles.accordianSec}>
                <div className={styles.tit}>Course Breakdown</div>


                <div className={`${styles.breakdownBox} ${activeIndex === 0 ? styles.active : ""}`}>
                    <div className={styles.breakdownTitle} onClick={() => toggleFaq(0)}>
                        <div className={styles.tit}>Introduction</div>
                        <div className={styles.count}>
                            <ul>
                                <li>4 lectures</li>
                                <li>2 assessments</li>
                                <li>52 mins</li>
                                <li><ArrowDownIcon /></li>
                            </ul>
                        </div>
                    </div>
                    {activeIndex === 0 && (
                        <div className={styles.breakdownContent}>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}>
                                    <Image src={Post01.src} alt="Profile Image" width={90} height={90} />
                                </div>
                                <div className={styles.breakdownTxt}>
                                    <h5>Jumping lunge with arms overhead</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><PlayIcon /></div>
                            </div>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}><DocumentsIcon /></div>
                                <div className={styles.breakdownTxt}>
                                    <h5>View Document</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><Link href="/session-assessment">View Document</Link></div>
                            </div>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}>
                                    <TaskIcon />
                                </div>
                                <div className={styles.breakdownTxt}>
                                    <h5>Full body workout</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><Link href="/session-assessment">Start Test</Link></div>
                            </div>
                        </div>
                    )}
                </div>


                <div className={`${styles.breakdownBox} ${activeIndex === 1 ? styles.active : ""}`}>
                    <div className={styles.breakdownTitle} onClick={() => toggleFaq(1)}>
                        <div className={styles.tit}>Core training principles</div>
                        <div className={styles.count}>
                            <ul>
                                <li>3 lectures</li>
                                <li>1 assessment</li>
                                <li>30 mins</li>
                                <li><ArrowDownIcon /></li>
                            </ul>
                        </div>
                    </div>
                    {activeIndex === 1 && (
                        <div className={styles.breakdownContent}>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}>
                                    <Image src={Post01.src} alt="Profile Image" width={90} height={90} />
                                </div>
                                <div className={styles.breakdownTxt}>
                                    <h5>Jumping lunge with arms overhead</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><PlayIcon /></div>
                            </div>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}><DocumentsIcon /></div>
                                <div className={styles.breakdownTxt}>
                                    <h5>View Document</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><Link href="/session-assessment">View Document</Link></div>
                            </div>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}>
                                    <TaskIcon />
                                </div>
                                <div className={styles.breakdownTxt}>
                                    <h5>Full body workout</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><Link href="/session-assessment">Start Test</Link></div>
                            </div>
                        </div>
                    )}
                </div>


                <div className={`${styles.breakdownBox} ${activeIndex === 2 ? styles.active : ""}`}>
                    <div className={styles.breakdownTitle} onClick={() => toggleFaq(2)}>
                        <div className={styles.tit}>Understanding your body</div>
                        <div className={styles.count}>
                            <ul>
                                <li>5 lectures</li>
                                <li>2 assessments</li>
                                <li>60 mins</li>
                                <li><ArrowDownIcon /></li>
                            </ul>
                        </div>
                    </div>
                    {activeIndex === 2 && (
                        <div className={styles.breakdownContent}>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}>
                                    <Image src={Post01.src} alt="Profile Image" width={90} height={90} />
                                </div>
                                <div className={styles.breakdownTxt}>
                                    <h5>Jumping lunge with arms overhead</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><PlayIcon /></div>
                            </div>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}><DocumentsIcon /></div>
                                <div className={styles.breakdownTxt}>
                                    <h5>View Document</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><Link href="#">View Document</Link></div>
                            </div>
                            <div className={styles.breakdownItem}>
                                <div className={styles.breakdownImg}>
                                    <TaskIcon />
                                </div>
                                <div className={styles.breakdownTxt}>
                                    <h5>Full body workout</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                                </div>
                                <div className={styles.breakdownbtn}><Link href="#">Start Test</Link></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SessionDetails;
