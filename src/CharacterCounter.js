import React, { useState,useEffect } from 'react'

function CharacterCounter({text, defaults}) {
    const maxLength = 280

    const [charcount, setCharcount] = useState(0)

    const [inputtext, setInputtext] = useState('')

    const handleChange = (e) => {
        setInputtext(e.target.value)
        /* setCharcount(inputtext.length)
        console.log(e.target.value) */
    }

    const handleClick = (word) => {
        setInputtext(word)
        /* setCharcount(word.length) */
    }

    useEffect(()=>{
        setCharcount(inputtext.length)
    },[inputtext])

    const tooLong = charcount > 100 ? 'tooLong': ''

    return (
        <div className={`counterInput ${tooLong}`}>
            <div>
                {defaults.map((b) => {
                return <button onClick={()=>handleClick(b)} key={b}>{b}</button>
                })}
            </div>
            <textarea
                placeholder={text}
                value={inputtext}
                onChange={handleChange}
            />
            <div>{charcount}/{maxLength}</div>
        </div>
    )
    
}

export default CharacterCounter