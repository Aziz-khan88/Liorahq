"use client";
import { useState } from "react";
import { EyeOpenIcon, EyeClosedIcon } from "@/src/app/app-constants";
import styles from "@/styles/settings/changepassword.module.scss";

const ChangePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className={styles.mainSetting}>
            <div className={styles.changePasswordWrapper}>
                <form action="">
                    <div className={styles.fieldInput}>
                        <label>Current Password*</label>
                        <div className={styles.fieldBox}>
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                name="currentPassword"
                                placeholder="Min. 8 characters"
                                required
                            />
                            <span
                                onClick={() => setShowCurrentPassword((prev) => !prev)}
                                style={{ cursor: "pointer" }}
                            >
                                {showCurrentPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                            </span>
                        </div>
                    </div>
                    <div className={styles.fieldInput}>
                        <label>New Password*</label>
                        <div className={styles.fieldBox}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                name="newPassword"
                                placeholder="Min. 8 characters"
                                required
                            />
                            <span
                                onClick={() => setShowNewPassword((prev) => !prev)}
                                style={{ cursor: "pointer" }}
                            >
                                {showNewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                            </span>
                        </div>
                    </div>
                    <div className={styles.fieldInput}>
                        <label>Re-Enter New Password*</label>
                        <div className={styles.fieldBox}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Min. 8 characters"
                                required
                            />
                            <span
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                style={{ cursor: "pointer" }}
                            >
                                {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                            </span>
                        </div>
                    </div>
                    <div className={styles.fieldbBtn}>
                        <button type="submit">
                            Change Password
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
