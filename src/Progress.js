function Progress({ numQuestions, maxPoints, index, answer, points }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        Points{" "}
        <strong>
          {points}/{maxPoints}
        </strong>
      </p>
    </header>
  );
}
export default Progress;
