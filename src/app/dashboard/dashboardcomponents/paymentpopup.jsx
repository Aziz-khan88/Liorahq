
"use clients"
import { useState } from "react";
import { Modal } from "react-bootstrap"
import { ClosedBtn } from "@/src/app/app-constants";
import styles from "@/styles/dashboard/dashboardcomponents/calendarpop.module.scss"
import Image from "next/image";
import VisaImg from "media/images/payment/visa.webp"
import MasterImg from "media/images/payment/master.webp"


const data = [
    {
        name: "Visa Card",
        number: "XXXX XXXX XXXX 4650",
        exp: "12/24",
        cardImg: VisaImg.src
    },
    {
        name: "MasterCard",
        number: "XXXX XXXX XXXX 4650",
        exp: "12/24",
        cardImg: MasterImg.src
    }
]

const PaymentPopUp = ({ onHide, show }) => {
    const [showFields, setShowFields] = useState(false);
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className={styles.popUpPayment}>
                <div className={styles.closedBtn} onClick={onHide}>
                    <ClosedBtn />
                </div>
                {!showFields && (
                    <div className={styles.paymentWapper}>
                        <h5>Select Payment Method</h5>
                        {data.map((item, index) => (
                            <div className={styles.paymentList} key={index}>
                                <div className={styles.cardImg}>
                                    <Image src={item.cardImg} alt="Payment" fill />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.number}>{item.number}</div>
                                    <div className={styles.expiry}>Exp. {item.exp}</div>
                                </div>
                                <div className={styles.cardCheck}>
                                    <input
                                        type="radio"
                                        id={`payment-${index}`}
                                        name="paymentMethod"
                                    />
                                    <label htmlFor={`payment-${index}`}></label>
                                </div>
                            </div>
                        ))}
                        <button
                            className={styles.btnPayment}
                            onClick={() => setShowFields(true)}
                        >
                            + Add Payment Method
                        </button>
                        <div className={styles.popFooter}>
                            <div onClick={onHide} className={styles.btnBox}>
                                Cancel
                            </div>
                            <div className={styles.btnBox} onClick={onHide}>Pay</div>
                        </div>
                    </div>
                )}

                {showFields && (
                    <div className={styles.paymentFields}>
                        <h5>Add Payment Method</h5>
                        <div className={styles.fieldGroup}>
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter name" />
                        </div>
                        <div className={styles.fieldGroup}>
                            <label>Card Number</label>
                            <input type="text" placeholder="XXXX   XXXX    XXXX    XXXX" />
                        </div>
                        <div className={styles.fieldGroup}>
                            <label>Expiry Date</label>
                            <input type="text" placeholder="MM/YY" />
                        </div>
                        <div className={styles.fieldGroup}>
                            <label>CVV Number</label>
                            <input type="password" placeholder="Enter cvv" />
                        </div>

                        {/* Footer */}
                        <div className={styles.popFooter}>
                            <div
                                onClick={() => setShowFields(false)}
                                className={styles.btnBox}
                            >
                                Back
                            </div>
                            <div className={styles.btnBox} onClick={() => setShowFields(false)}>Save</div>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    )
}

export default PaymentPopUp