import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [first, setInput] = useState("");
  const [second, setInput1] = useState("");
  const [three, setInput2] = useState("");

  function handleClick() {
    const combinedText = `${first} ${second} ${three}`.trim();
    onAddNote(combinedText);

    setInput("");
    setInput1("");
    setInput2("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="input 1"
        value={first}
        onChange={e => setInput(e.target.value)}
      />

      <input
        type="text"
        placeholder="input 2"
        value={second}
        onChange={e => setInput1(e.target.value)}
      />

      <input
        type="text"
        placeholder="input 3"
        value={three}
        onChange={e => setInput2(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>
    </>
  );
}
