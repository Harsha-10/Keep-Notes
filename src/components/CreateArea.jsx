import React, { useState } from "react";
function CreateArea(props) {
  const [note, setnote] = useState({ title: "", content: "" });
  function update(event) {
    const { name, value } = event.target;
    setnote((prevnote) => {
      return {
        ...prevnote,
        [name]: value
      };
    });
  }
  function prevent(event) {
    props.onadd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={update}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={update}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={prevent} />
      </form>
    </div>
  );
}

export default CreateArea;
