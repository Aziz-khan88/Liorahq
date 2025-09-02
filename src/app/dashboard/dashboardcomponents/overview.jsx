import styles from "@/styles/dashboard/dashboardcomponents/overview.module.scss"
import LineChart from "./chart"

const Overview = () => {
    return (
        <div className={styles.overviewSec}>
            <div className={styles.overviewHeader}>
                <div className={styles.tit}>
                    <h2>Progress Overview</h2>
                </div>
                <div className={styles.btn}>
                    Quiz 01
                </div>
            </div>
            <LineChart />
        </div>
    )
}

export default Overview