import { useState } from "react"
import Note from "./components/Note"

const App = ({ notes }) => {

  const [notesList, setNotesList] = useState(notes)
  const [newNote, setNewNote] = useState("a new note")
  const [showAll, setShowAll] = useState(true)

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notesList.length + 1,
    }
    setNotesList(notesList.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const notesToShow = showAll ? notesList : notesList.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll? "important":"All"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} type="text" />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App