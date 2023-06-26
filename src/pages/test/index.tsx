import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';

type Feed = {
  id: number;
  comment: string;
  image_url: string;
};

const Home: NextPage = () => {

  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://se0c53vznc.execute-api.ap-northeast-2.amazonaws.com/dev/feeds');
        console.log(response)
        setFeeds(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <Header />
      <h1>TEST</h1>
      { 
        feeds.map(feed => 
          <div key={feed.id}>
            <div>{ feed.comment }</div>
            <img src={'https://d38e565eilzns0.cloudfront.net/' + feed.image_url + '?w=200'} />
          </div>
        )
      }
    </>
  )
}

export default Home