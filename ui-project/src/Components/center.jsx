import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './leftcontent'

function Center(props) {
  return (
    <>
    <div className='flex '>
    < Leftcontent />
    < Rightcontent users={props.users} />
    </div>
    </>
  )
}

export default Center