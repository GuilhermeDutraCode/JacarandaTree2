import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { NextApiResponse } from "next";
const bcrypt = require('bcryptjs');

export async function POST(req: Request, res : NextApiResponse) {
    try {
        const body : any = await req.text(); // Consume the ReadableStream and get the body as a string
        const newUser = JSON.parse(body) 
        
        try {
          //const hashedPassword = await bcrypt.hash(newUser.password, 10)
            const user = await prisma.user.create({
                data: {
                  email: newUser.email,
                  first_name: newUser.fName,
                  last_name: newUser.lName,
                  address: newUser.address,
                  suburb: newUser.suburb,
                  state: newUser.state,
                  postcode: newUser.postcode,
                  password: newUser.password,
                  card_number: "", 
                  name_on_card: "", 
                  expiring_date: "", 
                  last_digits: "", 
                  profile_pic: "" 
                }
            })
            console.log(user);
            
            return new Response("Created a user");
        } catch (error: any ) { 
            console.log(error);
            return  NextResponse.json("error")
        }
      } catch (error: any) {
        console.error(error);
        return new Response("This is the err", error);
      }
}



