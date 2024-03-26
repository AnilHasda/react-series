import { useCallback, useEffect, useState,useRef} from 'react'


function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(10);
  let [number, setNumber] = useState(false);
  let [char, setChar] = useState(false);
  let reference=useRef(null);
  let btnReference=useRef(null);
  const preventDefaultData = (e) => {
    e.preventDefault();
  }
  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let character = "@#$%&*+_-/^";
    if (number === true) { str += num; }
    if (char === true) { str += character; }
    for (let i = 0; i < length; i++) {
      let random = Math.ceil(Math.random() * str.length);
      pass += str.charAt(random);
      setPassword(pass);
      console.log(str)
    }
  }, [length, number, char, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, setPassword]);
  const copyItem=()=>{
     reference.current.select();
     window.navigator.clipboard.writeText(reference.current.value);
    btnReference.current.innerText="copied";
    setTimeout(()=>{
      btnReference.current.innerText="copy";
    },300)
  }
  return (
    <>
      <h2 className="project-heading text-center">Password generator App</h2>
      <form action="" className="text-center" onSubmit={preventDefaultData}>
        <input type="text" value={password} ref={reference} readOnly /><button className="copy-btn" ref={btnReference}onClick={copyItem}>copy</button><br /><br />
        <input type="range" min={6} max={100} value={length} onChange={e => setLength(e.target.value)} /><span className="pl-20">Length ({length})</span>
        <input type="checkbox" id="number" className="ml-20" name="number" onClick={e => setNumber(prev => !prev)} /><label for="number" className="pl-10">Number</label>
        <input type="checkbox" id="character" className="ml-20" name="character" onClick={e => setChar(prev => !prev)} /><label for="character" className="pl-10">Character</label>
        <br /><br /> <button onClick={passwordGenerator}>Generate</button>
      </form>
    </>
  )
}

export default App;
