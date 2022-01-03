/*function Joke({ vote, votes, text, id }) {
  const upVote = () => vote(id, +1);
  const downVote = () => vote(id, -1);

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}*/

//class version -> constructor -> super -> bind
import React from "react";
import "./Joke.css";

class Joke extends React.Component {
  constructor(props) {
    super(props);
    const { vote, id } = props;
    this.vote = vote;
    this.id = id;
  }

  upVote = () => this.vote(this.id, +1);
  downVote = () => this.vote(this.id, -1);

  render = () => (
    <div className = "Joke" >
      <div className="Joke-votearea">
        <button onClick={this.upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={this.downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {this.props.votes}
      </div>

      <div className="Joke-text">{this.props.text}</div>
    </div>
  );
}

export default Joke;
