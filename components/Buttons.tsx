'use client';
import { createProfile } from "@/actions/action";
import { Button } from "@mui/material";


export async function TestButton() {
  return (
    <Button onClick={() => {
        createProfile().then((profile) => {
          console.log(profile);
        })
      }}>Create Profile</Button>
  )
}