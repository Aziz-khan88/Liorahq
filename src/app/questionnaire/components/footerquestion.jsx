import styles from "@/styles/questionnaire/queastionfooter.module.scss"
import Image from "next/image"
import Link from "next/link"
import PaymentImg from "media/images/dashboardImages/paymentImg.webp"

const FooterQuestion = () => {
    return (
        <div className={styles.footerQuestion}>
            <div>
                <ul>
                    <li><Link href="/terms-and-conditions">Term & Conditions</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Payment Method</li>
                    <li>
                        <Image src={PaymentImg.src} alt="payment Img" width={209} height={36} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterQuestion