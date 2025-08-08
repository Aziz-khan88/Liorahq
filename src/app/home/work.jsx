import styles from "@/styles/home/works.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { BulletsIcon } from "@/src/app/app-constants";
const Work = () => {
    return (
        <section className={`${styles.worksSection} p-100`}>
            <Container className={styles.workWapper}>
                <Row>
                    <Col md={12}>
                        <div className={styles.workBox}>
                            <div className={styles.workItem}>
                                <div className="subtitle">How its work</div>
                                <h2>Scheduling Made Simple in 4 Easy Steps</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Purus aliquet elementum vitae vel nisl. Id senectus iaculis mauris proin duis.</p>
                                <div className={styles.ctaWrapper}>
                                    <Link href="#">Book Now</Link>
                                    <Link href="#" >Browse Courses</Link>
                                </div>
                            </div>
                            <div className={styles.workItem}>
                                <div className={styles.workList}>
                                    <div className={styles.workPoint}>
                                        <BulletsIcon />
                                        <h6>Sign up</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur. Purus aliquet elementum vitae vel nisl. Id senectus iaculis mauris proin duis.</p>
                                    </div>
                                    <div className={styles.workPoint}>
                                        <BulletsIcon />
                                        <h6>Pick a Course or Book a Consultant</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur. Purus aliquet elementum vitae vel nisl. Id senectus iaculis mauris proin duis.</p>
                                    </div>
                                    <div className={styles.workPoint}>
                                        <BulletsIcon />
                                        <h6>Start Learning & Get Certified</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur. Purus aliquet elementum vitae vel nisl. Id senectus iaculis mauris proin duis.</p>
                                    </div>
                                    <div className={styles.workPoint}>
                                        <BulletsIcon />
                                        <h6>Join the community & stay engaged</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur. Purus aliquet elementum vitae vel nisl. Id senectus iaculis mauris proin duis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Work