import React, { useEffect, useState } from 'react'

const colors = ['#FF7F50', '#008080', '#E6E6FA', '#FFDB58', '#708090','#FF00FF']

const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}

const Game = () => {
    const [score, setScore] = useState(0);
    const [currentColor, setCurrentColor] = useState(randomColor(colors));
    const [message, setMessage] = useState("Guess the color!")
    const [shuffle, setShuffle] = useState(shuffleArray([...colors]))

    const handleColorPicked = (color) => {
        if (color === currentColor) {
            setScore(score + 5);
            setMessage(`Correct!🎉`)
            
        } else {
            setScore(score - 5);
            setMessage(`Wrong❌!`)
        }
        setCurrentColor(randomColor(colors))
        setShuffle(shuffleArray([...colors]))
        displayMessage()
    }

    const displayMessage = () => {
        setTimeout(() => {
            setMessage("Guess the color!")
        }, 1000)
    }

    useEffect(() => {
        if (score < 0) {
          setScore(0);
        }
      }, [score]);
    

    const resetGame = () => {
        setCurrentColor(randomColor(colors));
        setScore(0)
        setMessage("Guess the color!")
        setShuffle(shuffleArray([...colors]))
    }

    const text = "Guess the Color Game!";
    let title = "";

    const revealText = () => {
        for (let i = 0; i < text.length; i++) {
            title += text[i];
        }
        clearInterval(interval)
    }
    
    const interval = setInterval(revealText, 100)


  return (
    <div className='game-board'>
        <div className='game-card'>
            <h1 className='gradient-text'>{text}</h1>
            <div>
                <h1 className='score'>Score: {score}</h1>
            </div>
            <div data-testid="colorBox" className='target-color' style={{backgroundColor: currentColor }}></div>

            <div className="color-buttons">
                {shuffle.map((color) => 
                    
                    <button data-testid="colorOption" key={color}  style={{backgroundColor: color}} onClick={()=>handleColorPicked(color)}></button>
                )}
            </div>
            <p data-testid="gameStatus" className='message'>{message}</p>
            <button data-testid="newGameButton" className='resetButton' onClick={resetGame}>Reset</button>
        </div>
    </div>
  )
}

export default Game