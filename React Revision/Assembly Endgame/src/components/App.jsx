import {languages} from "./languages.js"
import Languages from "./languages.jsx"
import {useState} from "react"
import clsx from "clsx"
import { getFarewellText, getRandomWord} from "./utils.js"
import Confetti from "react-confetti"

export default function AssemblyEndgame(){
  const [currentWord, setCurrentWord] = useState(()=>getRandomWord())

  const [userGuess, setUserGuess] = useState([])

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  const wrongGuessCount = userGuess.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessCount)
  
  const numOfGuessesLeft = languages.length - 1 - wrongGuessCount
  
  const gameWon = currentWord.split("").every(letter => userGuess.includes(letter));
  console.log(gameWon)

  const gameLost = wrongGuessCount >= languages.length - 1
  console.log(gameLost)

  const isGameOver = gameLost || gameWon

  const lastUserGuess = userGuess[userGuess.length - 1]

  const isLastUserGuessWrong = lastUserGuess && !currentWord.includes(lastUserGuess)

  const gameStatusClass = clsx("status", {
    won: gameWon,
    lost: gameLost,
    farewell: !isGameOver && isLastUserGuessWrong
  })

  const wordElements = currentWord.split("").map((char, index) => {
    const revealLetter = userGuess.includes(char)||gameLost
    const wordElementsClassName = clsx("individual-word", {
      "individual-word-missed": gameLost && !userGuess.includes(char)
    })
    return(
      <span className={wordElementsClassName} key={index}>{revealLetter?char.toUpperCase():""}</span>
    )

  })    

  function keyInput(letter){
  setUserGuess(prevWord => 
    prevWord.includes(letter) ?
    prevWord : 
    [...prevWord, letter]
    )
  } 

  function startNewGame(){
    setCurrentWord(getRandomWord())
    setUserGuess([])

  }

  function renderGameStatus(){
    if(!isGameOver && isLastUserGuessWrong){
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      )
    } 
    
    if(gameWon){
      return(
        <>
            <h3>You win!</h3>
            <p>Well done! 🎉</p>
        </>
      )
    } 
    
    else if(gameLost){
      return(
        <>
            <h3>Game over!</h3>
            <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }

      return null

  }

  const keyboardElements = alphabet.split("").map(letter =>{
    const isGuessed = userGuess.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
  })

  return(
    <button
      className = {className}
      key = {letter}
      onClick = {()=> keyInput(letter)}
      aria-disabled = {userGuess.includes(letter)}
      aria-label = {`Letter ${letter}`}
      disabled = {isGameOver}
    >
      {letter.toUpperCase()}
    </button>
  )

  })

  return(
    <main>
      {
        gameWon && <Confetti
          recycle={false}
          numberOfPieces={1000}
        />
      }
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      
      <section 
        aria-live="polite"
        role= "status"
        className={gameStatusClass}>
        {renderGameStatus()}
      </section>

      <div className="languages">
        {languages.map((lang,index)=>(
          <Languages name={lang.name} key={index} isLanguageLost={index < wrongGuessCount}  backgroundColor={lang.backgroundColor} color={lang.color}/>
          ))
        }
      </div>
      
      <div className="word-space">
        {wordElements}
      </div>

      <div
        className="sr-only"
        aria-live="polite"
        role="status"
        >
          <p>
            {currentWord.includes(lastUserGuess)?
            `Correct: The letter ${lastUserGuess} is in the word.`:
            `Sorry, the letter ${lastUserGuess} isn't in the word.`
            }
            You have {numOfGuessesLeft} attempts left.
          </p>
          
          <p>Current word: {currentWord.split("").map(letter =>
            userGuess.includes(letter) ? letter + "." : "blank"
          )}</p>
      </div>
    
      <div className="keyboard">
        {keyboardElements}
      </div>

        <button className="newGame" onClick={startNewGame}>New Game</button>

    </main>
  )
}