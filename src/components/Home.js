import React from 'react'

export default function Home() {
    return (
        <div className="App">

            <p>First React Test case</p>
            <p>Pranav Verma</p>
            <h5>Input</h5>
            <input type="text"
                placeholder='Enter User Name'
                name='username'
                id="userId"
                readOnly
                value="pranav verma"
            />
            <br />
            <br />
            <br />
            <h5>Image</h5>
            <img src="https://placebear.com/g/200/200" title="AI generated img" alt="beer" />
        </div>
    )
}
