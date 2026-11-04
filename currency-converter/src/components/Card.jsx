import React from 'react'

function Card({name,age}) {
  console.log("Profile component rendered");
  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    </>
  )
}

export default Card