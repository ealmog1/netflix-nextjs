"use client"

import { Button } from "./ui/button"
import Image from 'next/image'
import GoogleIcon from "/home/ealmog/netflix-clone/public/google.svg"
import { signIn } from "next-auth/react"

export default function GoogleSignInButton() {
    return (
        <Button onClick={() => signIn("google")}variant="outline" size="icon">
            <Image src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />
        </Button>   
    )
}