import React from 'react'

const Buttons = (props) => {
  return (
    <div>
        <div className='flex justify-center gap-6 py-10 align-center items-center'>
            <button className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer rounded px-4 py-2 font-semibold' 
            onClick={
            ()=>{
                if(props.index>1){
                props.setIndex(props.index-1);
                props.setUserData([]);
                }
            }
            }>Prev</button>

            <h4 className='text-xl font-extrabold'>Page {props.index}</h4>

            <button className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer rounded px-4 py-2 font-semibold'
                    onClick={
            ()=>{
                props.setIndex(props.index+1);
                props.setUserData([]);
            }
            }>Next</button>
      </div>
    </div>
  )
}

export default Buttons