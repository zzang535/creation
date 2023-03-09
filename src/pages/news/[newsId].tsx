import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Detail: NextPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <>
      <h1>Detail Page</h1>
      <p>{newsId}</p>
    </>
  );
};

export default Detail;