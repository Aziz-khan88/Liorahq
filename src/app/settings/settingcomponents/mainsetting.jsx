import styles from "@/styles/settings/mainsetting.module.scss"
import Link from "next/link"
import { ArrowDownIcon } from "@/src/app/app-constants"

const MainSetting = () => {
    return (
        <div className={styles.mainSetting}>
            <ul>
                <li>
                    <Link href="/change-password">Change Password</Link>
                    <span>*********** <ArrowDownIcon /></span>
                </li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link> <span><ArrowDownIcon /></span></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link> <span><ArrowDownIcon /></span></li>
            </ul>
        </div>
    )
}

export default MainSetting