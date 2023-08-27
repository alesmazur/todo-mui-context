import React from 'react'
// Quick bio:

export default function Bio() {
  return (
    <React.Fragment>
      <header><h1>Short Bio.</h1></header>
      <details><summary> 🔭 currently working on:</summary>
      <p>As independet web developer</p>
      </details>
      <details><summary> 🌱 my main stack is:</summary>
      <ol>
        <li>React</li>
        <li>Redux</li>
        <li>TypeScript</li>
      </ol>
      </details>
      <details><summary> 📫 How to reach me:</summary>
      <p><a href="mailto:alesmazur@mail.com">my email</a></p>
      </details>
    </React.Fragment>
    )
}


