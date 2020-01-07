import React from "react";
import { addNote } from "../reducers/anecdoteReducer";

export const AnecdoteForm = props => {
  const addAnecdote = e => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    props.store.dispatch(addNote(content));
  };
  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};
