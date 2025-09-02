"use client";
import { useState } from "react";
import styles from "@/styles/authcomponents/loginform.module.scss";
import Link from "next/link";
import { EyeOpenIcon, EyeClosedIcon, GoogleIcon } from "@/src/app/app-constants";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className={styles.loginContainer}>
            <h3>Login to your account</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <form action="" className={styles.loginForm}>
                <div className={styles.inputBox}>
                    <input type="text" name="name" placeholder="User Name" required />
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
                <div className={styles.inputCheck}>
                    <div className={styles.checkBox}>
                        <input type="checkbox" name="checked" />Remember me
                    </div>
                    <div className={styles.forgotPass}>
                        <Link href="/forgot-password">Forgot Password?</Link>
                    </div>
                </div>
                <div className={styles.inputButton}>
                    <button type="submit">Login</button>
                </div>
                <div className={styles.extraTxt}>or continue with</div>
                <div className={styles.inputButton}>
                    <button className={styles.googleBtn}><GoogleIcon />continue with google</button>
                </div>
                <div className={styles.extraLinks}>
                    Already have an account? <Link href="/sign-up">Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
