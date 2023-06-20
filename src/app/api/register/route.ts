import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
    try {
        const body : any = await req.text(); // Consume the ReadableStream and get the body as a string
        const newUser = JSON.parse(body) 
        
        try {
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
              console.log("Created a user");              
        } catch (error) {
            console.log(error);
            
        }
        
        return new Response("Created a user");
      } catch (error: any) {
        console.error(error);
        return new Response("This is the err", error);
      }
}

