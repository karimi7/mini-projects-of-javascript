import './Quiz.css';
import React, { useState } from 'react';

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    // کاربر پاسخی انتخاب کرده یا نه
    const [answerSelected, setAnswerSelected] = useState(false);
    // ذخیره ایندکس پاسخ صحیح برای نمایش رنگ
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    // ذخیره ایندکسی که کاربر انخاب کرده
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    const handleAnswerOptionClick = (isCorrect, index) => {
        // اگه کاربر پاسخی رو انتخاب کرده بود، اجازه نمیدیم دوباره کلیک کنه
        if (answerSelected) return;

        setAnswerSelected(true); // نشون میده که کاربر یه گزینه رو انتخاب کرده یا نه
        setSelectedAnswerIndex(index); // ذخیره ایندکس گزینه انتخاب شده

        // پیدا کردن ایندکس پاسخ صحیح برای هایلایت کردن
        const correctIdx = questions[currentQuestion].answerOptions.findIndex(
            (option) => option.isCorrect
        );
        setCorrectAnswerIndex(correctIdx);

        if (isCorrect) {
            setScore(score + 1);
        }

        // با تاخیر میرم سوال بعدی
        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setAnswerSelected(false);
                setCorrectAnswerIndex(null);
                setSelectedAnswerIndex(null);
            } else {
                setShowScore(true);
            }
        }, 1000);
    };

    return (
        <div className="app">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>
                                Question {currentQuestion + 1}
                                <span>/{questions.length}</span>
                            </span>
                        </div>
                        <div className="question-text">
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map(
                            (answerOption, index) => {
                                let buttonClass = '';
                                if (answerSelected) {
                                    if (index === correctAnswerIndex) {
                                        // گزینه صحیح همیشه سبز باشه
                                        buttonClass = 'correct';
                                    } else if (
                                        index === selectedAnswerIndex &&
                                        !answerOption.isCorrect
                                    ) {
                                        // گزینه انتخابی اگه غلط بود، قرمز شه
                                        buttonClass = 'incorrect';
                                    }
                                }
                                return (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            handleAnswerOptionClick(
                                                answerOption.isCorrect,
                                                index
                                            )
                                        }
                                        className={buttonClass}
                                        // اگه پاسخی انتخاب شد، بقیه دکمه‌ها غیرفعال شن
                                        disabled={answerSelected}
                                    >
                                        {answerOption.answerText}
                                    </button>
                                );
                            }
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;
