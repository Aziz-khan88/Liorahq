import styles from "@/styles/home/contentbanner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/contentBanner.webp"
import Image from "next/image";

const ContentBanner = () => {
    return (
        <section className={`${styles.contentBanner}`} >
            <Container className={styles.contentWapper}>
                <Row>
                    <Col md={12} className="my-auto">
                        <div className={styles.contentBox}>
                            <h3>Join a supportive <span>community</span>, share progress, and celebrate every win together.</h3>
                        </div>
                        <Image src={BgImg.src} alt="Join a supportive" width={1296} height={800} />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default ContentBanner