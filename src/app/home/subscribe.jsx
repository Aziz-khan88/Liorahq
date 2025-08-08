import styles from "@/styles/home/subscribe.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/blueBg.webp"
import ClientsImg from "media/images/home/imgClients.webp"
import Image from "next/image";


const Subscribe = () => {
    return (
        <section className={styles.subscribeSection}>
            <Container className="p-0">
                <Row >
                    <Col md={12} className="p-0">
                        <div className={styles.subscribeWapper} style={{ backgroundImage: `url(${BgImg.src})` }}>
                            <div className={styles.imgClients}>
                                <Image src={ClientsImg.src} alt="Clients Image" width="126" height="43" />
                            </div>
                            <h5>Still have questions?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                            <form className={styles.subscribeForm}>
                                <div className={styles.inputField}>
                                    <input type="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div className={styles.inputField}>
                                    <button type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Subscribe;
