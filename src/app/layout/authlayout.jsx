
import styles from "@/styles/layout/authlayout.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import IMG from "media/images/dashboardImages/loginImage.webp"
import { MainLogo } from "@/src/app/app-constants";
import Link from "next/link";

const AuthLayout = ({ children }) => {

    return (
        <section className={styles.mainLayout}>
            <Container className="h-100" fluid>
                <Row className="h-100">
                    <Col md={6} lg={7} className=" d-md-block d-none my-auto p-0">
                        <div className={styles.loginImage}>
                            <Image src={IMG.src} alt="Liora HQ Login" fill />
                        </div>
                    </Col>
                    <Col md={6} lg={5} className="my-auto">
                        <div className={styles.loginSection}>
                            <Link href="/" className={styles.mainLogo}>
                                <MainLogo />
                            </Link>
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AuthLayout