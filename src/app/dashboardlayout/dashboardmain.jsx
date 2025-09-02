import styles from "@/styles/dashboardlayout/dashboardmain.module.scss"

const DashboardMain = ({ children }) => {
    return (
        <div className={styles.dashboardMain}>
            {children}
        </div>
    )
}

export default DashboardMain