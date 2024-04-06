'use server'
import prisma from "@/lib/prisma";


export async function getProfiles() {
	const user = await prisma.user.findMany({})
    return user;
}

export async function createProfile() {
    const user = await prisma.user.create({
        data: {
            name: "oui",
            email: "oui@gmail.com",
            
        }
    })
    return user;
}