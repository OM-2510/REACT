export default function Joke(props) {
    console.log(props);
    return(
        <article className="joke-card">
            <h2>{props.setup}</h2>
            <h3>{props.punchline}</h3>
        </article>
    )
}

