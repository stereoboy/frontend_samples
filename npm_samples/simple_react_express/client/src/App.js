import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);

  return (
    <div>
      APP
      {(typeof backendData === 'undefined') ? (
        <p> Loading...</p>
      ): (

        // reference: https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map

        backendData.users?.map((user, i) => (
          <p key={i}> {user} </p>
        ))
      )}
    </div>
  )
}

export default App