import Header from "./Components/header";
import Entry from "./Components/entry";
import data from "./data"

export default function App() {
    const entryElements = data.map((entry)=>{
        return(
            <Entry 
                img = {entry.img}
                title = {entry.title}
                country = {entry.country}
                googleMapsLink = {entry.googleMapsLink}
                dates = {entry.dates}
                text = {entry.text}
    
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