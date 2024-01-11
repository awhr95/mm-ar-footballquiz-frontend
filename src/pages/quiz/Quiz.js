import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import QuizTitle from "../../components/quiz-title/QuizTitle";
import QuizBody from "../../components/quiz-body/QuizBody";

export default function Quiz() {
  //api call
  return (
    <div>
      <Header />
      <QuizTitle />
      <QuizBody />
      <Nav />
    </div>
  );
}
