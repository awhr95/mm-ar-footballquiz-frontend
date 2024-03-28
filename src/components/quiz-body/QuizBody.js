import "./QuizBody.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function QuizBody({ scorersRandomised, correctList }) {
  // console.log(scorersRandomised);
  const { scorerId } = useParams();
  console.log(scorersRandomised);

  // if correct
  // const wonFunction = () => {
  //   if (scorerId === correctList[0].playerId) {
  //     alert("You Won");
  //   }
  // };
  // useEffect(wonFunction(), [scorerId]);

  return (
    <div className="quizbody">
      <section className="quizsection">
        {scorersRandomised.map((scorer) => {
          return (
            <Link
              to={`/quiz/${scorer.playerId}`}
              className="playerbutton"
              key={scorer.id}
            >
              <article className="playerarticle">
                <img
                  className="playerimg"
                  alt="player-photo"
                  src={scorer.photo}
                ></img>
                <div className="titlecontainer">
                  <div>
                    <h2 className="playertitle">{scorer.name}</h2>
                    <p className="playerteam">{scorer.team}</p>
                  </div>

                  <img
                    className="teamlogo"
                    alt="team-logo"
                    src={scorer.teamLogo}
                  ></img>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
