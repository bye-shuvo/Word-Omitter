import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    // TODO: Add your changes here
    setInputText("");
  };

  const getProcessedText = () => {
    // TODO: Add your changes here
    const omittedText = inputText
      .split(" ")
      .filter((Word) => !OMITTED_WORDS.includes(Word))
      .join(" ");
    return omittedText;
  };

  return (
    <div className="omitter-wrapper flex flex-col justify-center items-center gap-10">
      <textarea
        className="mt-10 border-2 px-5 py-5 w-150 rounded-2xl min-h-40"
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div className="flex items-center gap-5">
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2 className="text-2xl mb-5">Output:</h2>
        <p data-testid="output-text">
          {omitWords ? getProcessedText() : inputText}
        </p>
      </div>
    </div>
  );
}

export { WordOmitter };
