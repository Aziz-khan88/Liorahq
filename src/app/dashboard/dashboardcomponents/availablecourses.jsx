"use client";
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/dashboard/dashboardcomponents/availablecourses.module.scss"
import Courses from "@/src/app/dashboard/dashboardcomponents/courses"
import Course01 from "media/images/courses/course01.webp";
import Course02 from "media/images/courses/course02.webp";
import Course03 from "media/images/courses/course03.webp";
import SliderArrows from './sliderarrows';
import Autoplay from 'embla-carousel-autoplay'


const data = [
    {
        tit: "High Intensity Zero Equipment Worout",
        txt: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.",
        link: "#",
        img: Course01.src
    },
    {
        tit: "High Intensity Zero Equipment Worout",
        txt: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.",
        link: "#",
        img: Course02.src
    },
    {
        tit: "High Intensity Zero Equipment Worout",
        txt: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.",
        link: "#",
        img: Course03.src
    },
    {
        tit: "High Intensity Zero Equipment Worout",
        txt: "Lorem ipsum dolor sit amet consectetur. Tellus feugiat iaculis dui.",
        link: "#",
        img: Course01.src
    },
]

const OPTIONS = { align: 'start', loop: true }
const AvailableCourses = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 5000 })])
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <div className={styles.availableCourses}>
            <div className={styles.availableHeader}>
                <div className={styles.tit}>
                    <h2>Available Courses</h2>
                </div>
                <div className={styles.btn}>
                    <SliderArrows
                        onPrev={prevButtonHandler}
                        onNext={nextButtonHandler}
                    />
                </div>
            </div>
            <section className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {data.map((item, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <Courses item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AvailableCourses