import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
    try {
        //console.log(req);
        const body : any = await req.text(); // Consume the ReadableStream and get the body as a string
        const email = JSON.parse(body)
        
           let userAlreadyRegister = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if(userAlreadyRegister){
                //console.log("User already in db");
                return new NextResponse("duplicate")
            } else {}

        return NextResponse.json("Success") 
    } catch(error: Error | unknown) {
        console.log("meee bred", error);
        //return new Response("This is the err", error);
    }
}