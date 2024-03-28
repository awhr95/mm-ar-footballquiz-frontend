import "./QuizTitle.scss";

export default function QuizTitle({ league }) {
  console.log(league[0].league);
  const title = league[0].league;
  return (
    <header className="quizheader">
      <h2 className="quizheader__title">{title}</h2>
    </header>
  );
}
