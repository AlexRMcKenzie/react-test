import React from "react"
import ReactDOM from "react-dom"

function TemporaryList() {
  return (
    <>
      <h1>Why I am excited to learn React</h1>
        <ol>
          <li>Get a jerb</li>
          <li>Learn sick hackin' skillz</li>
          <li>Golly, it's gonna be a blast</li>
        </ol>
    </>
  )
}

ReactDOM.render(<TemporaryList/>, document.getElementById("root"))
