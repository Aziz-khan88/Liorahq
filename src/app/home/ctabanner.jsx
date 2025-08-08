import styles from "@/styles/home/ctabanner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/catBanner.webp";
import Link from "next/link";


const CtaBanner = () => {
    return (
        <section className={styles.ctaBannerSec} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} lg={6} xl={5} className="my-auto">
                        <h2>Level Up Your<br />
                            Health Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
                        <div className={styles.ctaWrapper}>
                            <Link href="#">Book Now</Link>
                            <Link href="#" >Browse Courses</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaBanner