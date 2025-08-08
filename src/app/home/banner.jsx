import styles from "@/styles/home/banner.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/bannerImage.webp";

const Banner = () => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto">
                        <h1>Unlock better health with expert support.</h1>
                    </Col>
                    <Col md={12} className="my-auto">
                        <div className={styles.bannerContent}>
                            <p>Get personalized insights from trusted professionals.Take control of your health—one step at a time.</p>
                            <Link href="#" className="commonBtn">Book Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner