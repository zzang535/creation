import type { NextPage } from 'next'
import Link from 'next/link';

const News: NextPage = () => {
  return (
    <>
      <h1>
        News Page
      </h1>
      <ul>
        <li><Link href="/news/first-news">first-news</Link></li>
        <li><Link href="/news/second-news">second-news</Link></li>
      </ul>
    </>
  );
};

export default News;