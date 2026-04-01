import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
                    <div className='h-85 w-85 bg-white rounded-xl overflow-hidden'>
                    <img src={props.elem.download_url} alt={props.elem.author} className='h-full w-full object-cover'/>
            </div>
            <h1 className='text-white text-lg font-bold'>{props.elem.author}</h1>
          </a>
    </div>
  )
}

export default Card