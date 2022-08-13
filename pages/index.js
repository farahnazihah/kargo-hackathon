import PageLayout from "../components/PageLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);
  return (
    <>
      <PageLayout>Kargo Excellerate Home</PageLayout>
    </>
  );
}
