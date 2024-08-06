import React from 'react'

function Content(props) {
  return (
    <div className='content'>
      <h1>Public View {props.content1} {props.content2}</h1>
      <p>Using Props </p>
    </div>
  )
}

export default Content
