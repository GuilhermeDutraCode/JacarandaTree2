import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma';
import * as jose from "jose";
import { KeyObject } from 'crypto';
const bcrypt = require('bcryptjs');

export async function POST(req: any){
    const body : any = await req.text(); // Consume the ReadableStream and get the body as a string
    const user = JSON.parse(body)
    const hashedPassword = await bcrypt.hash(user.password, 10)
    console.log(user.email, user.password);
    try {
        const isLogin = await prisma.user.findFirstOrThrow({
            where: {
                email: user.email,
                password: user.password
            }
        })
        console.log(isLogin);
       const alg: any = "HS256";

       const secret = new TextEncoder().encode(process.env.JWT_SECRET)

       const token = await new jose.SignJWT({email: user.email})
        .setProtectedHeader({alg})
        .setExpirationTime("24h")
        .sign(secret)
        
        return NextResponse.json(secret)
    } catch (error) {
      console.log(error);     
    }
    
    
    return NextResponse.json("MEEow")
}