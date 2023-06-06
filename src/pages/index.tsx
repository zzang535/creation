import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://se0c53vznc.execute-api.ap-northeast-2.amazonaws.com/dev/test');
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <h1>marijuni 입니다.</h1>
      <div>{ data }</div>
    </>
  )
}

export default Home