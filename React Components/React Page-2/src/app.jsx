import Header from "./Components/header";
import Entry from "./Components/entry";
import data from "./data"

export default function App() {
    const entryElements = data.map((entry, index)=>{
        return(
            <Entry 
                id = {entry.index}
                {...entry}
            />

        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>

        </>
    )
}