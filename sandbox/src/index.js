import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Note from './components/Note'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...') 
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(note))
    setNewNote('')
  }

  const updateNewNote = (event) => {
      setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(n => n.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>       
         <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' } 
         </button>     
      </div>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={updateNewNote}/>
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)