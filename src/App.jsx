
import { useState } from 'react'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [item, setItem] = useState('')
  const [location, setLocation] = useState('')
  const [contact, setContact] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(
      `Item: ${item}\nLocation: ${location}\nContact: ${contact}`
    )
    setItem('')
    setLocation('')
    setContact('')
    setShowForm(false)
  }

  return (
    <div className="app">
      <h1>Welcome to Campus Lost</h1>
      <p>Find your lost items on campus.</p>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Report a Lost Item'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2>Report Your Lost Item</h2>

          <input
            placeholder="Item name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />

          <input
            placeholder="Where did you lose it?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            placeholder="Contact information"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <button type="submit">Submit Report</button>
        </form>
      )}
    </div>
  )
}

export default App
