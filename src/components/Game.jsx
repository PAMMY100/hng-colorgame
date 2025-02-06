import React, { useState } from 'react'

const colors = ['#FF7F50', '#008080', '#E6E6FA', '#FFDB58', '#708090','#FF00FF']

const Game = () => {
    const [score, setScore] = useState(0);
    const [currentColor, setCurrentColor] = useState(colors);

    const rotateColor = () => {
            setTimeout(() => {
                const index = Math.floor(Math.random() * currentColor.length + 1)
            currentColor[index]
            setCurrentColor(currentColor[index])
            }, 3000)     
    }



  return (
    <div>
        <h2>Guess the color!</h2>
        <p style={{backgroundColor: `${currentColor}`, height: '60px', width: '100px' }}>color</p>

        <div>
            {colors.map((color) => {
                <button style={{backgroundColor: `${color}`}}></button>
            })}
        </div>

    </div>
  )
}

export default Game