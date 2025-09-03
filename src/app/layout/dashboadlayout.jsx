import styles from "@/styles/layout/dashboadlayout.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import DashboardHeader from "@/src/app/dashboardlayout/dashboardheader";
import DashboardSidebar from "@/src/app/dashboardlayout/dashboardsidebar";
import DashboardMain from "@/src/app/dashboardlayout/dashboardmain";


const DashboadLayout = ({ children }) => {
  return (
    <section className={styles.bannerSection}>
      <Container fluid>
        <Row>
          <Col md={12}>
            <DashboardHeader />
          </Col>
        </Row>
        <Row>
          <Col md={3} lg={3} xl={2}>
            <DashboardSidebar />
          </Col>
          <Col md={9} lg={9} xl={10} >
            <DashboardMain>{children}</DashboardMain>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DashboadLayout