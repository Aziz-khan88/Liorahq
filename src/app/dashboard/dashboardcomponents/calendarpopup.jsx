
"use client";
import { useState } from "react";
import styles from "@/styles/dashboard/dashboardcomponents/calendarpop.module.scss"
import { Modal } from "react-bootstrap"
import Calendar from "react-calendar";
import { ClosedBtn } from "@/src/app/app-constants";
import PaymentPopUp from "@/src/app/dashboard/dashboardcomponents/paymentpopup";


const CalendarPopup = ({ onHide, show }) => {
    const [showPopup, setShowPopup] = useState(false);
    const handleOpenModal = () => {
        setShowPopup(true);
    };
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className={styles.popUpWraper}>
                    <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                    <div className={styles.clanderBox}>
                        <Calendar
                            minDate={new Date()}
                            maxDetail="month"
                            showNavigation={true}
                        />
                    </div>
                    <div className={styles.timeSlot}>
                        <h5>Session Slots</h5>
                        <div className={styles.timingCalender}>
                            <div className={styles.titName}>Morning</div>
                            <ul>
                                <li>09:00 AM - 10:00AM</li>
                                <li className={styles.booked}>09:00 AM - 10:00AM</li>
                                <li className={styles.active}>09:00 AM - 10:00AM</li>
                            </ul>
                            <div className={styles.titName}>Afternoon</div>
                            <ul>
                                <li>09:00 AM - 10:00AM</li>
                                <li>09:00 AM - 10:00AM</li>
                                <li>09:00 AM - 10:00AM</li>
                            </ul>
                            <div className={styles.titName}>Evening</div>
                            <ul>
                                <li>09:00 AM - 10:00AM</li>
                                <li>09:00 AM - 10:00AM</li>
                                <li>09:00 AM - 10:00AM</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.popFooter}>
                        <div onClick={onHide} className={styles.btnBox}>Cancel</div>
                        <div className={styles.btnBox} onClick={handleOpenModal}>Done</div>
                    </div>
                </div>
            </Modal>
            <PaymentPopUp show={showPopup} onHide={() => setShowPopup(false)} />
        </>
    )
}

export default CalendarPopup
