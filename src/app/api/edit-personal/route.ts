import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


export async function POST (req: any) {
    const body : any = await req.text(); // Consume the ReadableStream and get the body as a string
    const user = JSON.parse(body)
    console.log(user);
    
    try {
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                first_name: user.firstName,
                last_name: user.lastName,
                address: user.address,
                suburb: user.suburb,
                state: user.state,
                postcode: user.postcode,
            },
        })
        return NextResponse.json("Success")
    } catch (error) {
        return NextResponse.json("failed to update")
    }
}