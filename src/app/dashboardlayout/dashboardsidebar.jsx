import { CommunityIcon, CoursesIcon, FaqIcon, HomeIcon, ProgressIcon, SessionsIcon, SettingIcon } from '@/src/app/app-constants'
import Link from 'next/link'
import styles from "@/styles/dashboardlayout/dashboardsidebar.module.scss"

const DashboardSidebar = () => {
    return (
        <ul className={styles.dashboardSidebar}>
            <li>
                <Link href="/dashboard"><HomeIcon />Home</Link>
            </li>
            <li>
                <Link href="/sessions"><SessionsIcon />Sessions</Link>
            </li>
            <li>
                <Link href="/courses"><CoursesIcon />Courses</Link>
            </li>
            <li>
                <Link href="#"><ProgressIcon />Progress</Link>
            </li>
            <li>
                <Link href="/community-board"><CommunityIcon />Community Board</Link>
            </li>
            <li>
                <Link href="/faqs"><FaqIcon />FAQ’s</Link>
            </li>
            <li>
                <Link href="/settings"><SettingIcon />Settings</Link>
            </li>
        </ul>
    )
}

export default DashboardSidebar