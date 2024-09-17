import React, { useEffect, useRef } from 'react'

function Modal1({isOpen, children }) {
    console.log(isOpen)
    const dialogxyz = useRef();

    useEffect(()=>{
        // console.log(dialogxyz)
        const dialogTag = dialogxyz.current
        if(!isOpen)
        {
            return;
        }
        else 
        {
            dialogTag.showModal();
        }
        return ()=>{
            dialogTag.close();
        }
    },[isOpen])


  return (
    <div>
        <dialog ref={dialogxyz}>{children}</dialog>
    </div>
  )
}

export default Modal1
