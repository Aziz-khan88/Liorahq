import styles from "@/styles/home/pricing.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ListingIcon } from "@/src/app/app-constants";
import Link from "next/link";


const Pricing = () => {
    return (
        <section className={styles.pricingSection}>
            <Container>
                <Row>
                    <Col md={12} lg={6} >
                        <div className={styles.packageBox}>
                            <div className={`${styles.subTitle} subtitle`}>Pricing Plan</div>
                            <div className={styles.packageHeader}>
                                <div className={styles.title}>Free</div>
                                <div className={styles.price}><span>$</span>0</div>
                            </div>
                            <ul>
                                <li><ListingIcon />Lorem ipsum dolor sit amet.</li>
                                <li><ListingIcon />Lorem ipsum consectetur dolor sit amet consectetur.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur dolor sit.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur dolor sit.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                            <div className={styles.btnSub}>
                                <Link href="#">Subscribe Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6} >
                        <div className={`${styles.packageBox} ${styles.packageBoxLight}`}>
                            <div className={`${styles.subTitle} subtitle`}>Pricing Plan</div>
                            <div className={styles.packageHeader}>
                                <div className={styles.title}>Premium</div>
                                <div className={styles.price}><span>$</span>25<span className={styles.monthly}>/Monthly</span></div>
                            </div>
                            <ul>
                                <li><ListingIcon />Lorem ipsum dolor sit amet.</li>
                                <li><ListingIcon />Lorem ipsum consectetur dolor sit amet consectetur.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur dolor sit.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur dolor sit.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur.</li>
                                <li><ListingIcon />Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                            <div className={styles.btnSub}>
                                <Link href="#">Subscribe Now</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Pricing