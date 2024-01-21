"use client"
import React from "react";
import { getSession } from "next-auth/react";
import { useRouter  } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { checkout } from "../api/stripe-pay/checkout";
import Link from "next/link";
const Dashboard = () => {
    const { data: session }: any = useSession();
    console.log(session);
    const router = useRouter();

  const handleClick =  () =>{

    // signOut()
    router.replace("/")
    // if (!session) {
    //     ;
    //   }
  }
//   if (!session) {
//     router.push("/");
//   }
const handleDecreaseCredits = async () => {
    try {
      const res = await fetch("/api/decrease-credits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user?.email, // Assuming you have access to the user's ID in the session
        }),
      });
  
      if (res.status === 200) {
        console.log("Credits decreased successfully");
        // You may want to update the user session or UI to reflect the new credits value
      } else {
        console.error("Failed to decrease credits");
      }
    } catch (error) {
      console.error("Error decreasing credits:", error);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
      <button onClick={handleDecreaseCredits}>Generate</button>
      <button onClick={handleClick}>
        Logout
      </button>
      <Link href="https://buy.stripe.com/test_bIY6rVdEq59K18c144"><button      
    
>Get Credits</button></Link>
    </div>
  );
};

export default Dashboard;