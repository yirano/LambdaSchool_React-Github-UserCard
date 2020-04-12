import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <input
        type="search"
        name="search"
        placeholder="search a user"
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
    </form>
  );
}
