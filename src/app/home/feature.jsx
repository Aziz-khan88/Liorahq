"use client";
import styles from "@/styles/home/feature.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowIcon, FeatureIcon } from "@/src/app/app-constants";
import Link from "next/link";


export const data = [
    {
        title: "Courses",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin.",
        link: "#",
        icon: <FeatureIcon />
    },
    {
        title: "Certifications",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin.",
        link: "#",
        icon: <FeatureIcon />
    },
    {
        title: "Quizzes & Assessments",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin.",
        link: "#",
        icon: <FeatureIcon />
    },
    {
        title: "Book ",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin.",
        link: "#",
        icon: <FeatureIcon />
    },
    {
        title: "Learning Management System",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin.",
        link: "#",
        icon: <FeatureIcon />
    },

]

const Feature = () => {
    const [emblaRef] = useEmblaCarousel({ align: 'center' })
    return (
        <section className={`${styles.featureSection} p-100`}>
            <Container>
                <Row >
                    <Col md={12} lg={11} xl={10} className="mx-auto text-center">
                        <h2>Powerful Features to Simplify Scheduling</h2>
                        <p>From easy bookings to automated reminders, our software is built to save your time and boost your productivity.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={12} className="my-auto">
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.featureWrap}>
                                                <div className={styles.featureIcon}>
                                                    {item.icon}
                                                </div>
                                                <h5>{item.title}</h5>
                                                <p>{item.txt}</p>
                                                <Link href={item.link}>Learn more <ArrowIcon /></Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Feature