import React, { useState } from 'react';

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.value]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoProps(inputText.title);
    setInputText({
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input
        type="submit"
        className="input-submit"
        value="Submit"
      />  
    </form>
  );
};

export default InputTodo;