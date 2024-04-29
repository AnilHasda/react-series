import React from 'react'
import { RxCross2 } from "react-icons/rx";
const Modal = ({status,children}) => {
    let {show,setShow}=status;
  return (
     <div className='h-[100vh] w-full  text-white flex items-center justify-center flex-col'>
      <button className='px-3 py-2 bg-[blueviolet] text-white rounded-sm'onClick={()=>{setShow(true)}}>Show Modal</button>
      {show?
      <div className="relative h-auto max-w-[150px] px-3 py-10 mt-5 bg-[#d9d7d7] text-black">
        <RxCross2 className='absolute left-[80%] text-[20px] top-[5px]'onClick={()=>{setShow(false)}}/>
        {children}
      </div>
:<p className='text-black'>click button to show modal</p>}
    </div>
  )
}

export default Modal