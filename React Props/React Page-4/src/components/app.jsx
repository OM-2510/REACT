import Joke from "./joke"

function App(props){
    return (
    <div className="jokes">
        
        <Joke 
            setup = "Why don't skeletons fight each other?"
            punchline = "They don't have the guts."
        />

        <Joke 
            setup = "What did the ocean say to the beach?"
            punchline = "Nothing, it just waved."
        />

        <Joke 
            setup = " What do you call fake spaghetti?"
            punchline = "An impasta."
        />

        <Joke 
            setup = "Why don't graveyards ever get overcrowded?"
            punchline = "Because people are dying to get in."
        />
    </div>

    )
}

export default App