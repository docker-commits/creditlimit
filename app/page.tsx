"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClick = () =>{
    router.push("/auth/login")
  }
  return (
  <main className="h-full flex  flex-col items-center justify-center bg-gray-500">
<div className="space-y-6 text-center">

<h1 className="font-semibold">Ask AI!</h1>
<button className="p-3 w-fit bg-slate-100 rounded-md" onClick={onClick}>Get Start</button>
</div>

  </main>
  );
}
