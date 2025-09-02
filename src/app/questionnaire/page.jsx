"use client";
import { useState } from "react";
import styles from "@/styles/questionnaire/questionnaire.module.scss";

const questions = [
    {
        id: 1,
        title: "Select Gender",
        options: ["Male", "Female", "Other"],
        name: "gender",
    },
    {
        id: 2,
        title: "What is your age range?",
        options: ["18-25", "26-35", "36-45", "46+"],
        name: "age",
    },
    {
        id: 3,
        title: "What’s your fitness goal?",
        options: ["Weight Loss", "Muscle Gain", "General Fitness", "Strength"],
        name: "goal",
    },
    {
        id: 4,
        title: "How many days can you train per week?",
        options: ["1-2", "3-4", "5+"],
        name: "days",
    },
    {
        id: 5,
        title: "Preferred workout style?",
        options: ["Gym", "Home", "Outdoor", "Mixed"],
        name: "style",
    },
    {
        id: 6,
        title: "Do you have any injuries?",
        options: ["Yes", "No"],
        name: "injuries",
    },
    {
        id: 7,
        title: "Your current fitness level?",
        options: ["Beginner", "Intermediate", "Advanced"],
        name: "level",
    },
    {
        id: 8,
        title: "Do you prefer personal coaching?",
        options: ["Yes", "No"],
        name: "coaching",
    },
];

const Page = () => {
    const [step, setStep] = useState(0); // Current question index
    const [answers, setAnswers] = useState({});

    const handleNext = (e) => {
        e.preventDefault();
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            console.log("All answers:", answers);
            alert("Thank you! Questionnaire completed.");
        }
    };

    const handleChange = (e) => {
        setAnswers({
            ...answers,
            [questions[step].name]: e.target.value,
        });
    };

    return (
        <div className={styles.questionWrapper}>
            <div className={styles.questionContainer}>
                {/* Header */}
                <div className={styles.questionHeader}>
                    <div className={styles.questionTitle}>
                        <h1>Questionnaire</h1>
                        <p>
                            Answer honestly — we use your input to design the perfect fitness
                            path. No fluff, just focus.
                        </p>
                    </div>
                    <div className={styles.questionBtn}>
                        <button
                            className={styles.skipBtn}
                        >
                            Skip
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.questionBar}>
                    {questions.map((_, index) => (
                        <div
                            key={index}
                            className={index <= step ? styles.active : ""}
                        ></div>
                    ))}
                </div>

                {/* Question Box */}
                <div className={styles.questionBox}>
                    <h4>{questions[step].title}</h4>
                    <form onSubmit={handleNext}>
                        {questions[step].options.map((option, i) => (
                            <div className={styles.inputRadio} key={i}>
                                <input
                                    type="radio"
                                    id={`${questions[step].name}-${i}`}
                                    name={questions[step].name}
                                    value={option}
                                    checked={answers[questions[step].name] === option}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor={`${questions[step].name}-${i}`}>{option}</label>
                            </div>
                        ))}
                        <div className={styles.btnNext}>
                            <button type="submit">
                                {step === questions.length - 1 ? "Finish" : "Next"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
