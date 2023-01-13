import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const add = () => setCount(count+1)
    const minus = () => {
        if(count>0){
            setCount(count-1)
        }
    }

    const handleChange =(e) => {
        if(e.target.value===NaN){
            setCount(0)
        } else setCount(parseInt(e.target.value))
    }

  return (
    <section>
        <h2>Counter: The Most Novel Example I Could Come Up With</h2>
        <div className="counter">
            <button
                onClick={minus}
            >-</button>
            <input
                type="text"
                aria-label="count"
                value={count}
                onChange={handleChange}
            />
            <button
                onClick={add}
            >+</button>
        </div>
    </section>
  )
}

export default Counter