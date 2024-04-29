import React,{useState} from 'react'
import Modal from './component/Modal'
const App = () => {
  let [show,setShow]=useState(false)
  return (
<>
<Modal status={{show,setShow}}>
  this is test message
</Modal>
</>
  )
}

export default App