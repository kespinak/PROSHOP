import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  // this works because it takes in the previous state at each line
  const addTwo = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }
  // this doesn't work because react takes in batches...and interprets this as 1 event...
  const addThree = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  const [arr, setArr] = useState([1, 2, 3])
  const updateArray = (newValue) => {
    setArr((prev) => [...prev, newValue]) // this is the same concept...do this instead the next line
    // setArr([...arr, newValue])
  }

  const [obj, setObj] = useState({ firstName: 'none', lastName: 'none' })
  const updateObjLastNameWithKevin = (newValue) => {
    setObj((prev) => ({ ...prev, lastName: `${newValue}` })) // this is the same concept...do this instead the next line
    // setObj({...values, last: `${newValue}`})
  }
  const updateObjNames = (newFirst, newLast) => {
    setObj({ firstName: `${newFirst}`, lastName: `${newLast}` })
  }

  return (
    <>
      <h1>count: {count}</h1>
      {/* prev is a option from useState that takes the previous useState state... */}
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      <button onClick={addTwo}>add two (works using 'prev')</button>
      <button onClick={addThree}>add three (doesn't work)</button>
      <button onClick={() => setCount(count - 1)}>subtract</button>
      <button onClick={() => setCount(0)}>reset</button>

      <hr></hr>

      <h2>Array: {arr}</h2>
      <button onClick={() => updateArray(9)}>add number 9</button>

      <hr></hr>

      <h3>
        Object: {`FirstName=(${obj.firstName}), LastName=(${obj.lastName})`}
      </h3>
      <button onClick={() => updateObjLastNameWithKevin('kevin')}>
        updateObjLastNameWithKevin
      </button>
      <form>
        <label htmlFor='fname'>First name:</label>
        <br />
        <input type='text' id='fname' name='fname' defaultValue='John' />
        <br />
        <label htmlFor='lname'>Last name:</label>
        <br />
        <input type='text' id='lname' name='lname' defaultValue='Doe' />
        <br />
        <br />
        <input
          type='submit'
          value='Submit'
          onClick={(event) => {
            event.preventDefault()
            updateObjNames(
              document.getElementById('fname').value,
              document.getElementById('lname').value
            )
          }}
        />
      </form>
    </>
  )
}

export default Counter
