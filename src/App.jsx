import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date().toLocaleDateString()
      }
      setNotes([newNote, ...notes])
      setTitle('')
      setContent('')
    }
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>My Notes</h1>
        <p>Keep track of your thoughts and ideas</p>
      </header>

      <form className="note-form" onSubmit={addNote}>
        <input
          type="text"
          className="note-input"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note-input note-textarea"
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Note
        </button>
      </form>

      {notes.length === 0 ? (
        <div className="empty-state">
          <p>No notes yet. Create your first note above!</p>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map(note => (
            <div key={note.id} className="note-card">
              <div className="note-date">{note.createdAt}</div>
              <h3 className="note-title">{note.title}</h3>
              <p className="note-content">{note.content}</p>
              <button 
                className="delete-btn"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App