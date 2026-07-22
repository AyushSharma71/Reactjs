import React from 'react'

function RightCardcontent(props) {
    console.log(props)
  return (
    <>
    <div className='h-[70vh] w-3/4 mt-7 flex'>
        <div className='relative h-full w-65 rounded-4xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.img} alt="pic" />
          <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between'>
            <h2 className='m-6 p-4 h-5 w-5 bg-white rounded-full flex justify-center items-center'>{props.id+1}</h2>
            <div className='p-10'>
              <p className='text-white text-small'>{props.intro}</p>
              <div className='mt-9 flex justify-between'>
                <button style={{backgroundColor:props.color}}className='text-white px-4 py-1 rounded-full text-lg'>{props.tag}</button>
                <button className='text-white p-1  rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightCardcontent