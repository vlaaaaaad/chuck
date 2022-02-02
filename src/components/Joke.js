import "../styles/Joke.css";

function Joke({text}) {
    return (
        <div className="JokeContainer">
            {text}
        </div>
    )
}

export default Joke;
