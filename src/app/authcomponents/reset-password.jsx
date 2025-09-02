"use client";
import { useState } from "react";
import { EyeOpenIcon, EyeClosedIcon } from "@/src/app/app-constants";
import styles from "@/styles/authcomponents/loginform.module.scss";

const ResetPassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className={styles.loginContainer}>
            <h3>Reset Password</h3>
            <p>Enter your email to reset your password</p>
            <form action="" className={styles.loginForm}>
                <div className={styles.inputBox}>
                    <input
                        type={showNewPassword ? "text" : "password"}
                        name="newpassword"
                        placeholder="Enter new password"
                        required
                    />
                    <span onClick={() => setShowNewPassword((prev) => !prev)} style={{ cursor: "pointer" }}>
                        {showNewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </span>
                </div>
                <div className={styles.inputBox}>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Re-enter new password"
                        required
                    />
                    <span onClick={() => setShowConfirmPassword((prev) => !prev)} style={{ cursor: "pointer" }}>
                        {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </span>
                </div>
                <div className={styles.inputButton}>
                    <button type="submit">
                        Reset Password
                    </button>

                </div>
            </form>
        </div>
    )
}

export default ResetPassword