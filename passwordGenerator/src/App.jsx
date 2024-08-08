import {useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =  useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>
    {
      let pass = ""
      let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz"

      if(numberAllowed) str += "0123456789"
       if(charAllowed) str += "!@#$%^&*"

       for (let i=1; i<= length; i++)
       {
        let char = Math.floor(Math.random() * str.length +1)
        pass += str.charAt(char)
       }

       setPassword(pass)
      
    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(Password)
    },
  [Password])

    useEffect(() =>
    {
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
      
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'> 
        <input 
        type="text" 
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref = {passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 px-3 py-0.5 shrink-0'> copy</button>
      </div>
      <div className='fiex text-sm-gap-x-2'>
      <div className='flex items-center gap-x-1'> 
      <input type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setLength(e.target.value)}}
      ></input>
      <label>Length:{length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
      <input
      type="checkbox"
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={() =>
      {
      setNumberAllowed((prev) => !prev);
      }
      }>
      </input>
      <label>Number</label>
      
      </div>

       <div className='flex items-center gap-x-1'>
      <input
      type="checkbox"
      defaultChecked={charAllowed}
      id="characterInput"
      onChange={() =>
      {
      setCharAllowed((prev) => !prev);
      }
      }>
      </input>
      <label>Character</label>
      
      </div>
      </div>
    </div>
     
    </>
  )
}

export default App
