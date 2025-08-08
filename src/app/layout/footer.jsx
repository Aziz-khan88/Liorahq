import styles from "@/styles/layout/footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Linkedin, FooterLogo, Twitter } from "@/src/app/app-constants";
import Link from "next/link";

const Footer = () => {
    return (
        <section className={styles.footerSection}>
            <Container>
                <Row className={styles.rowSection}>
                    <Col sm={3} md={3}>
                        <Link href="/">
                            <FooterLogo />
                        </Link>
                    </Col>
                    <Col sm={9} md={9} className="my-auto">
                        <ul className={styles.footerNav}>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Features</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row className={styles.rowSection}>
                    <Col sm={6} md={6} className="my-auto">
                        <ul className={styles.contactLinks}>
                            <li>Phone<Link href="#">+1 509 784 1847</Link></li>
                            <li>Email<Link href="#">liora@info.com</Link></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} className="my-auto">
                        <ul className={styles.footerSocail}>
                            <li><Link href="#"><Instagram /></Link></li>
                            <li><Link href="#"><Facebook /></Link></li>
                            <li><Link href="#"><Twitter /></Link></li>
                            <li><Link href="#"><Linkedin /></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className={styles.copyRight}>
                <Row>
                    <Col md={12}>
                        <div className={styles.footerLogo}>
                            LIORAHQ
                        </div>
                        <div className={styles.copyRightBox}>
                            <div className={styles.copyLinks}>
                                <ul>
                                    <li><Link href="#">Terms & Conditions</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            <div className={styles.copyTxt}>
                                Copyright © 2025 LioraHQ
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer