import styles from "@/styles/home/trust.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Trust = () => {
    return (
        <section className={`${styles.trustSection} p-100`}>
            <Container>
                <Row >
                    <Col md={12} lg={12} xl={10} className="mx-auto text-center">
                        <h2>Trusted by Businesses. Backed by Results.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Id metus tristique dolor vestibulum. Adipiscing iaculis quis eu etiam nec elit. Morbi vel elit gravida et montes cras.</p>
                        <div className={styles.trustWrapper}>
                            <div className={styles.trustItem}>
                                <div className={styles.trustBox}>
                                    <h4>250 <span>+</span></h4>
                                    <div className={styles.value}>Projects Delivered</div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Pharetra. Lorem ipsum dolor sit amet consectetur. Pharetra. </p>
                            </div>
                            <div className={styles.trustItem}>
                                <div className={styles.trustBox}>
                                    <h4>70 <span>%</span></h4>
                                    <div className={styles.value}>Business Growth</div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Pharetra. Lorem ipsum dolor sit amet consectetur. Pharetra. </p>
                            </div>
                            <div className={styles.trustItem}>
                                <div className={styles.trustBox}>
                                    <h4>500 <span>+</span></h4>
                                    <div className={styles.value}>Happy Clients</div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Pharetra. Lorem ipsum dolor sit amet consectetur. Pharetra. </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Trust