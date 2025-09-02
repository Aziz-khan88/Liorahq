"use client"
import { useState } from "react";
import styles from "@/styles/faqs/faqs.module.scss";
import { PlusfaqIcon } from "@/src/app/app-constants";

const data = [
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Felis odio bibendum dictum at neque proin.",
        txt: "Lorem ipsum dolor sit amet consectetur.Amet pulvinar venenatis pulvinar ut in quis sit.Viverra volutpat venenatis in sem pellentesque duis.Phasellus lobortis vehicula dui quam nibh egestas posuere.Neque tristique consequat aliquam dignissim faucibus praesent duis faucibus.",
    },
]
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState();

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqsContainer}>
            {data.map((items, index) => (
                <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                    <div
                        className={styles.faqsTitle}
                        onClick={() => toggleFaq(index)}
                    >
                        {items.title}
                        <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                            <PlusfaqIcon />
                        </div>
                    </div>
                    <div className={styles.faqscontent}>
                        {items.txt}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
