import React from 'react'

const Instructions = () => {
    return (
      <div className="instructions-container" data-testid="gameInstructions">
        <h2>How to Play</h2>
        <p>
          Welcome to the <strong>Color Guessing Game</strong>! Here's how to play:
        </p>
        <ol>
          <li>
            A <strong>target color</strong> will be displayed in the box above.
          </li>
          <li>
            Click on one of the <strong>color buttons</strong> below to guess the
            target color.
          </li>
          <li>
            If your guess is correct, you earn <strong>+5 points</strong>.
          </li>
          <li>
            If your guess is wrong, you lose <strong>-5 points</strong>.
          </li>
          <li>
            Use the <strong>Reset</strong> button to reset the game and start a
            new round.
          </li>
        </ol>
        <p>Good luck, and have fun! 🎨</p>
      </div>
    );
  };
  
  export default Instructions;