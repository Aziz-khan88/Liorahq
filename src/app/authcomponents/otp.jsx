"use client";
import { useState } from "react";
import styles from "@/styles/authcomponents/loginform.module.scss";
import OtpInput from 'react-otp-input';


const OTP = () => {
    const [otp, setOtp] = useState('');


    return (
        <div className={styles.loginContainer}>
            <h3>Verification Code</h3>
            <p>Enter 6-digit code sent to your email address</p>

            <form action="/reset-password" className={styles.OtpForm}>
                <div className={styles.inputBox}>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>
                <div className={styles.inputButton}>
                    <button type="submit">Submit</button>
                </div>
                <div className={styles.sendCode}>Resend Code?</div>
            </form>
        </div>
    )
}

export default OTP