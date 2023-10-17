import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Link href="/box">3D Box 페이지로 이동</Link>
    </>
  );
};

export default Home;
