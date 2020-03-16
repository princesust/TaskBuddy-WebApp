import React from "react";

export default function View({ handleSubmit, onChange, message }) {
  return (
    <form className="form__group" onSubmit={handleSubmit}>
      {message && (
        <div style={{ color: "red", margin: "10px" }}> {message}</div>
      )}
      <input
        type="text"
        name="userName"
        className="form__input"
        placeholder="Enter your name"
        onChange={onChange}
      />
      <button onClick={handleSubmit} className="submit_button">
        Submit
      </button>
    </form>
  );
}
