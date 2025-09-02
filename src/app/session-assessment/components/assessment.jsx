"use client";
import { useState } from "react";
import styles from "@/styles/session-assessment/assessment.module.scss";

const questions = [
    {
        id: 1,
        text: "What is the capital of France?",
        options: [
            "To avoid warming up before a workout",
            "To continuously challenge the muscles and simulate growth",
            "To reduce the need for proper form",
            "To shorten rest periods between sets",
        ],
    },
    {
        id: 2,
        text: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
    },
    {
        id: 3,
        text: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    },
    {
        id: 4,
        text: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    },
    {
        id: 5,
        text: "What is the process by which plants make their own food?",
        options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
    },
];

const Assessment = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [error, setError] = useState("");

    const handleAnswerChange = (option) => {
        setAnswers({
            ...answers,
            [currentQuestion]: option,
        });
        setError(""); // clear error if user selects something
    };

    const handleNext = () => {
        // ✅ check if user answered before moving
        if (!answers[currentQuestion]) {
            setError("⚠️ Please select an answer before continuing.");
            return;
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert("Assessment Completed!");
            console.log("User Answers:", answers);
        }
    };

    const formatQuestionNumber = (num) => (num < 10 ? `0${num}` : num);

    return (
        <div className={styles.assessmentSecion}>
            {/* Question progress bar */}
            <div className={styles.quesrionBar}>
                {questions.map((q, index) => (
                    <div
                        key={q.id}
                        className={`${styles.barItem} ${index === currentQuestion ? styles.active : ""}`}
                    ></div>
                ))}
            </div>

            {/* Question + options */}
            <div className={styles.queationAnswer}>
                <div className={styles.question}>
                    <span>{formatQuestionNumber(questions[currentQuestion].id)}</span>{" "}
                    {questions[currentQuestion].text}
                </div>

                <div className={styles.answer}>
                    {questions[currentQuestion].options.map((option, index) => (
                        <div key={index} className={styles.inputRadio}>
                            <input
                                type="radio"
                                name={`answer-${currentQuestion}`}
                                checked={answers[currentQuestion] === option}
                                onChange={() => handleAnswerChange(option)}
                            />
                            <label>{option}</label>
                        </div>
                    ))}

                    {error && <p className={styles.errorMsg}>{error}</p>}

                    <button onClick={handleNext} className={styles.btnNext}>
                        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
