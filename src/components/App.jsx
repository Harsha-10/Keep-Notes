import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setnotes] = useState([]);
  function addnote(note) {
    setnotes((obj) => {
      return [...obj, note];
    });
  }
  function handledelete(id) {
    setnotes((obj2) => {
      return obj2.filter((obj, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {notes.map((obj1, index) => {
        return (
          <Note
            ondelete={handledelete}
            id={index}
            key={index}
            title={obj1.title}
            content={obj1.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
