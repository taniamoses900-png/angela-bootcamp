import React from "react";
import emojipedia from "./emojipedia";

function App() {
  const numbers = Array.of(3, 56, 2, 48, 5);

  const doubledNumbers = numbers.map(x => x * 2);
  console.log(doubledNumbers);

  const bigNumbers = numbers.filter(x => x > 10);
  console.log(bigNumbers);

  const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr);
  console.log(sumOfNumbers);

  const firstBigNumber = numbers.find(x => x > 10);
  console.log(firstBigNumber);

  const firstBigNumberIndex = numbers.findIndex(x => x > 10);
  console.log(firstBigNumberIndex);

  const truncatedMeanings = emojipedia.map(emojiEntry => emojiEntry.meaning.substring(0, 100));
  console.log(truncatedMeanings);

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emojiTerm => (
          <div className="term" key={emojiTerm.id}>
            <dt>
              <span className="emoji" role="img" aria-label={emojiTerm.name}>
                {emojiTerm.emoji}
              </span>
              <span>{emojiTerm.name}</span>
            </dt>
            <dd>{emojiTerm.meaning}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default App;
