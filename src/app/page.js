"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  redirect("/jobs");

  return <main className="bg-beige"></main>;
}
