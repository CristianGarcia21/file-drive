'use client'

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {

  const files = useQuery(api.files.getFiles)
  const cratedFile = useMutation(api.files.createFile)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      {files?.map((file)=>{
        return <div key={file.id}>{file.name}</div>
      })}

      <Button onClick={()=>{
        cratedFile({
          name: "test"
        })
      }}>Click Me!</Button>
    </main>
  );
}
