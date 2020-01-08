import React from "react";
import { connect } from "react-redux";

import { vote, sort } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/messageReducer";

const AnecdoteList = props => {
  const voteFor = (id, content) => {
    props.vote(id);
    props.sort();
    props.setNotification(content, 5);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {props.anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteFor(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return { anecdotes: state.anecdotes };
};

const mapDispatchToProps = {
  vote,
  sort,
  setNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
