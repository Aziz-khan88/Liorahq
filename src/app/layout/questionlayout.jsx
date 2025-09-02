import styles from "@/styles/layout/dashboadlayout.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import DashboardHeader from "@/src/app/dashboardlayout/dashboardheader";
import FooterQuestion from "@/src/app/questionnaire/components/footerquestion";

const QuestionLayout = ({ children }) => {
    return (
        <section className={styles.bannerSection}>
            <Container fluid>
                <Row>
                    <Col md={12} className="p-0">
                        <DashboardHeader />
                    </Col>
                    <Col md={12} className="p-0">
                        {children}
                    </Col>
                    <Col md={12} className="p-0">
                        <FooterQuestion />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default QuestionLayout