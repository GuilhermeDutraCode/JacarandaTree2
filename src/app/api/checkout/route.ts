import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST (req: any, res: any){

    let itemSLug : any = await req.text();
    
    itemSLug = itemSLug.replace(/"/g, '');

    const itemInfo = await prisma.item.findUnique({
        where: {
            slug: itemSLug
        }
    })
    
    console.log(itemInfo)

    return NextResponse.json(itemInfo)
}