import React, { useEffect, useState } from 'react'

function ScollBox() {

    const [position,setPosition] = useState({x:0,y:0})

    useEffect(()=>{

        const test = (e)=>{
            setPosition({
                x:e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener('mousemove',test);
        
    })

  return (
   
    <div style={
        {
            height:45,
            width:45,
            background:"deepskyblue",
            transform:`translate(${position.x}px,${position.y}px)`,
            position:'absolute',
            top:-12,
            left:-12,
            borderRadius: '50%',
            boxShadow: '0px 0px 1px 8px steelblue'
        }}>
    </div>

  )
}

export default ScollBox
