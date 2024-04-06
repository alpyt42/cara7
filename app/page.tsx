
import * as React from 'react';
import prisma from '@/lib/prisma';
import { Button, Container } from '@mui/material';
export const dynamic = 'force-dynamic'
export const revalidate = false
import { createProfile, getProfiles } from '@/actions/action';
import { TestButton } from '@/components/Buttons';

export default async function Home() {
	return (
		<>
			<Container>
        <h1>Profiles</h1>
        <TestButton />
        {getProfiles().then((profiles) => {
          return profiles.map((profile) => {
            return (
              <div key={profile.id}>
                <h2>{profile.name}</h2>
                <p>{profile.email}</p>
              </div>
            );
          });
        })}
			</Container>
		</>
	);
}