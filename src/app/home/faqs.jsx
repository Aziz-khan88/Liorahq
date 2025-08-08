"use client"
import { useState } from "react";
import styles from "@/styles/home/faqs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PlusIcon } from "@/src/app/app-constants";
import Subscribe from "@/src/app/home/subscribe";


export const data = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container className={styles.faqsContainer}>
                <Row>
                    <Col md={12} className="mx-auto text-center">
                        <div className={styles.faqsWrapper}>
                            <div className="subtitle centerPosition">FAQ’s</div>
                            <h2>Frequently asked questions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                            <div className={styles.faqsQuestions}>
                                {data.map((items, index) => (
                                    <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                        <div
                                            className={styles.faqsTitle}
                                            onClick={() => toggleFaq(index)}
                                        >
                                            {items.title}
                                            <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                                <PlusIcon />
                                            </div>
                                        </div>
                                        <div className={styles.faqscontent}>
                                            {items.txt}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Subscribe />
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Faqs