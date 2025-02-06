import React, { useEffect, useState } from 'react'

const colors = ['#FF7F50', '#008080', '#E6E6FA', '#FFDB58', '#708090','#FF00FF']

const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const Game = () => {
    const [score, setScore] = useState(0);
    const [currentColor, setCurrentColor] = useState(randomColor(colors));
    const [message, setMessage] = useState("Guess the color!")

    const handleColorPicked = (color) => {
        if (color === currentColor) {
            setCurrentColor(randomColor(colors))
            setScore(score + 1);
            setMessage(`Correct!🎉 Your scoure is ${score + 1}`)
        } else {
            setScore(score - 1);
            setMessage(`Wrong💣! Your score is ${score - 1}`)
            setCurrentColor(randomColor(colors))
        }
    }

    const resetGame = () => {
        setCurrentColor(randomColor(colors));
        setScore(0)
        setMessage("Guess the color!")
    }

    const rotate = (pick) => {
        if (pick === currentColor) {
            currentColor(randomColor(colors))
        }
    }


  return (
    <div className='game-board'>
        <div className='game-card'>
            <h1 className='game-name'>Guess the Color Game!</h1>
            <div>
                <h1 className='score'>Score: {score}</h1>
            </div>
            <div className='target-color' style={{backgroundColor: currentColor }}>color</div>

            <div className="color-buttons">
                {colors.map((color) => 
                    
                    <button key={color}  style={{backgroundColor: color}} onClick={()=>handleColorPicked(color)}>{color}</button>
                )}
            </div>
            <p className='message'>{message}</p>
        </div>
    </div>
  )
}

export default Game