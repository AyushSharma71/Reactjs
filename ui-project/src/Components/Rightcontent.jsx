import React from 'react'
import RightCardcontent from './RightCardcontent'

function Rightcontent(props) {
  console.log(props)
  return (
    <>
  <div id= "overflow" className='flex flex-nowrap gap-7 overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <RightCardcontent key={idx} id={idx} intro={elem.intro} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
  </div>
    </>
  )
}

export default Rightcontent
