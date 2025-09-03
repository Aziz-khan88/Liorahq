import styles from "@/styles/authcomponents/loginform.module.scss";

const ForgotPassword = () => {
    return (
        <div className={styles.loginContainer}>
            <h3>Forgot Password?</h3>
            <p>Enter your email to reset your password</p>

            <form action="/opt-verification" className={styles.loginForm}>
                <div className={styles.inputBox}>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className={styles.inputButton}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword