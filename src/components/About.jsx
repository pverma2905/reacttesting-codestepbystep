import React, { useState } from 'react'

export default function About() {
    const [data, setData] = useState("")
    return (
        <div>
            <h1>About Page</h1>
            <h5>On Change</h5>
            <input type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <br />
            <br />
            <br />
            <h5>On Click</h5>
            <button onClick={() => setData("updated data")} >Update Data</button>
            <h1>{data}</h1>

        </div>
    )
}
