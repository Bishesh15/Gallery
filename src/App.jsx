import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setUserData(response.data);
  }

  useEffect(() => {
    getData();
  },[index]);

  let printUserData = <h3 className='text-gray-400 text-lg font-bold'>Loading . . .</h3>
  if(userData.length>0){
    printUserData = userData.map((elem,idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-72 w-85 bg-white rounded-xl overflow-hidden'>
              <img src={elem.download_url} alt={elem.author} className='h-full w-full object-cover'/>
            </div>
            <h1 className='text-white text-lg font-bold'>{elem.author}</h1>
          </a>
        </div>
      );
    });
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      <div className="flex flex-wrap gap-10 gap-y-10">
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 py-10'>
        <button className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer rounded px-4 py-2 font-semibold' 
        onClick={
          ()=>{
            if(index>1){
              setIndex(index-1);
            }
          }
        }>Prev</button>
        <button className='bg-amber-400 text-black text-sm active:scale-95 cursor-pointer rounded px-4 py-2 font-semibold'
                onClick={
          ()=>{
            setIndex(index+1);
          }
        }>Next</button>
      </div>
    </div>
    
  )
}

export default App