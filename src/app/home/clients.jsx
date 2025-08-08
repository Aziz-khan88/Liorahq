
"use client";
import styles from "@/styles/home/clients.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

import IMG01 from "media/images/clients/1.webp"
import IMG02 from "media/images/clients/2.webp"
import IMG03 from "media/images/clients/3.webp"

export const data = [
    {
        name: "Rachel M.",
        txt: "We had No Ho Flooring install vinyl plank throughout our condo. From the first call to the final polish, they were clear, responsive, and super professional. The crew showed up on time and left the place spotless. Highly recommend!",
        job: "Studio City",
        pic: IMG01.src
    },
    {
        name: "David K.",
        txt: "I called around a few places, and No Ho was the only one that gave me a detailed, written quote upfront. No hidden costs. The work on my hardwood stairs was clean, precise, and done right the first time.",
        job: "Burbank",
        pic: IMG02.src
    },
    {
        name: "Tobias Green",
        txt: "As someone with a packed schedule, this app has been a game- changer.The quick workouts and meal plans fit perfectly into my day—and I’ve never felt better!",
        job: "North Hollywood",
        pic: IMG03.src
    },
    {
        name: "Silas Leighton",
        txt: "As someone with a packed schedule, this app has been a game- changer.The quick workouts and meal plans fit perfectly into my day—and I’ve never felt better!",
        job: "Valley Village",
        pic: IMG01.src
    },
    {
        name: "Silas Leighton",
        txt: "As someone with a packed schedule, this app has been a game- changer.The quick workouts and meal plans fit perfectly into my day—and I’ve never felt better!",
        job: "Sherman Oaks",
        pic: IMG02.src
    },
    {
        name: "Justin H.",
        txt: "As someone with a packed schedule, this app has been a game- changer.The quick workouts and meal plans fit perfectly into my day—and I’ve never felt better!",
        job: "Toluca Lake",
        pic: IMG03.src
    },
]


const Clients = () => {
    const [emblaRef] = useEmblaCarousel({ align: 'start' })
    return (
        <section className={`${styles.clientsSection} p-100 borderRadiusTop`}>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="subtitle">Testimonials</div>
                        <h2>What Our Users Are Saying </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.clientsItem}>
                                                <div className={styles.txt}>{item.txt}</div>
                                                <div className={styles.pic}>
                                                    <Image src={item.pic} alt={item.name} fill />
                                                </div>
                                                <div className={styles.name}>{item.name}</div>
                                                <div className={styles.job}>{item.job}</div>
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

export default Clients