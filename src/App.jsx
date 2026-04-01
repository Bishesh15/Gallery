import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Buttons from './components/Buttons';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
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
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      <div className="flex h-[82%] flex-wrap gap-10 gap-y-10">
        {printUserData}
      </div>

      <Buttons index={index} setUserData={setUserData} setIndex={setIndex}/>
    </div>
    
  )
}

export default App