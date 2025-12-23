import { useState } from "react";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
    answer: "Elon Musk",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Quiz App</h1>

      {showScore ? (
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl mb-4">Your Score: {score} / {quizQuestions.length}</h2>
          <button
            onClick={handleRestart}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
          <h2 className="text-xl mb-4">{quizQuestions[currentQuestion].question}</h2>
          <div className="grid gap-3">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-gray-200 p-3 rounded hover:bg-gray-300 transition text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
