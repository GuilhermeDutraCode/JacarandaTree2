import { NextResponse } from "next/server";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import prisma from "../../../../lib/prisma";

export async function POST(req:any, res:any) {
    const bearerToken = req.headers["authorization"] as string

    if(!bearerToken){
        return NextResponse.json("error: no jwt")
    }
    
    const token = bearerToken.split(" ")[1]

    if(!token){
        return NextResponse.json("error: no jwt")
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    try {
        await jose.jwtVerify(token, secret)
    } catch (error) {
        return NextResponse.json("unathorized JWT")
    }

    const payload = jwt.decode(token) as {email: string};

    if(!payload.email){
        return NextResponse.json("unathorized JWT")
    }

    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            address: true,
            postcode: true
        }
    })

    return NextResponse.json({user})
}