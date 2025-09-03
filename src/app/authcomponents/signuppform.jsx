"use client";
import { useState } from "react";
import styles from "@/styles/authcomponents/loginform.module.scss";
import Link from "next/link";
import { EyeOpenIcon, EyeClosedIcon } from "@/src/app/app-constants";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className={styles.loginContainer}>
            <h3>Create an Account</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <form action="/sign-in" className={styles.loginForm}>
                <div className={styles.inputBox}>
                    <input type="text" name="name" placeholder="User Name" required />
                </div>
                <div className={styles.inputBox}>
                    <input type="email" name="email" placeholder="Email" required />
                </div>

                <div className={styles.inputBox}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)} style={{ cursor: "pointer" }}>
                        {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </span>
                </div>

                <div className={styles.inputBox}>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="cpassword"
                        placeholder="Confirm Password"
                        required
                    />
                    <span onClick={() => setShowConfirmPassword((prev) => !prev)} style={{ cursor: "pointer" }}>
                        {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </span>
                </div>

                <div className={styles.inputBox}>
                    <input type="text" name="zipcode" placeholder="Zip Code" required />
                </div>

                <div className={styles.inputCheck}>
                    <div className={styles.checkBox}>
                        <input type="checkbox" name="checked" /> I agree to the terms of service
                    </div>

                </div>

                <div className={styles.inputButton}>
                    <button type="submit">Join Now</button>
                </div>

                <div className={styles.extraLinks}>
                    Already have an account? <Link href="/sign-in">Sign In</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
