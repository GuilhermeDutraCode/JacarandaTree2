import type { NextApiRequest, NextApiResponse } from "next";
import {faker, fakerEN_AU} from "@faker-js/faker"
import prisma from "../../../../lib/prisma";
const bcrypt = require('bcryptjs');

type Category = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}

type Data = {
    name: string;
}

export async function GET(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    // await prisma.category.deleteMany();
    // await prisma.item.deleteMany();
    // await prisma.user.deleteMany();

    // await prisma.category.createMany({
    //     data:
    //         [{ name: "Cars & Vehicle"},
    //         {name: "Pets"},
    //         {name: "Real State"},
    //         {name: "Jobs"},
    //         {name: "Baby & Children"},
    //         {name: "Clothing & Jewellery"},
    //         {name: "Electronics & Computers"},
    //         {name: "Sports & Fitness"},
    //         {name: "Books, Music & Games"},
    //         {name: "Tickets"}]
    // });

   const items = await prisma.item.findMany();
    const users = await prisma.user.findMany();
    const categories = await prisma.category.findMany();

    const carsAndVehicle = categories.find((category: Category) => category.name === "Cars & Vehicle")
        ?.id || 1;

    const pets = categories.find((category: Category) => category.name === "Pets")
        ?.id || 1;
    
    const realState = categories.find((category: Category) => category.name === "Real State")
        ?.id || 1;  
        
    const jobs = categories.find((category: Category) => category.name === "Jobs")
        ?.id || 1;

    const babyAndChildren = categories.find((category: Category) => category.name === "Baby & Children")
        ?.id || 1;
    
    const clothingJewellery = categories.find((category: Category) => category.name === "Clothing & Jewellery")
        ?.id || 1;
    
    const electronicsComputer = categories.find((category: Category) => category.name === "Electronics & Computers")
        ?.id || 1;
       
    const sportsFitness = categories.find((category: Category) => category.name === "Sports & Fitness")
        ?.id || 1;
     
    const booksMusicGames = categories.find((category: Category) => category.name === "Books, Music & Games")
        ?.id || 1;
        
    const tickets = categories.find((category: Category) => category.name === "Tickets")
        ?.id || 1; 

    let allCategories = [carsAndVehicle, pets, realState, jobs, babyAndChildren, clothingJewellery, electronicsComputer, sportsFitness, booksMusicGames, tickets]     

    /////////////////////////////////////////////////////

//     const generateFakeUser = async ( ) => {
//         const users = [];

//         const firstName = faker.person.firstName();
//         const lastName = faker.person.lastName()
//         const address = fakerEN_AU.location.streetAddress();
//         const suburb = fakerEN_AU.location.city();
//         const email = faker.internet.email();
//         const plainPassword = faker.internet.password();
//         const password = await bcrypt.hash(plainPassword, 10)
//         const state = fakerEN_AU.location.state();
//         const postcode = fakerEN_AU.location.zipCode();
//         const cardNumber = fakerEN_AU.finance.creditCardNumber();
//         const nameOnCard = `${firstName} ${lastName}`;
//         const expiringDate = fakerEN_AU.date.future().toLocaleDateString();
//         const lastDigits = faker.number.int({min: 111, max: 999})
//         const profilePic = faker.image.urlLoremFlickr({ category: 'people' })
        
//         users.push({
//             first_name: firstName,
//             last_name: lastName,
//             password,
//             address,
//             suburb,
//             email,
//             state,
//             postcode,
//             card_number: cardNumber,
//             name_on_card: nameOnCard,
//             expiring_date: expiringDate,
//             last_digits: lastDigits.toString(),
//             profile_pic: profilePic,
//         });
        
        
//         prisma.user
//         .create({
//             data: users[0],
//              })
//         .then((createdUser: any) => {
//       console.log('User created:', createdUser);
//         })
//         .catch((error: any) => {
//       console.error('Error creating user:', error);
//         });

//         return users;
// };

//      const generateMultipleUsers = () => {
//         let i = 0
//         while (i < 100){
//             generateFakeUser()
//             i++
//         }
//      }

//      generateMultipleUsers()
   

     ///////////////////////////////////////////////=/

      let randomNum = function getRandomNumber() {
        let num = Math.floor(Math.random() * 30) + 1;
        // let getAllUsers = await prisma.user.findMany()
        let getARandomUserId = users[num].id
        return getARandomUserId
      }

      let randomCat =  function getRandomCategory(){
        const randomIndex = Math.floor(Math.random() * allCategories.length);
        return allCategories[randomIndex]
      }
       
      const createItem = async () => {
        const name = faker.commerce.productName()
        const price = faker.commerce.price()
        const description = faker.commerce.productDescription()
        const location = `${fakerEN_AU.location.city()}, ${fakerEN_AU.location.state()}`
        const slug = faker.lorem.slug({ min: 1, max: 3 })
        const mainImage = faker.image.url()
        const images = [faker.image.url(), faker.image.url(), faker.image.url(), faker.image.url()]
        const user_id = randomNum()
        const category_id = randomCat()

        try {
            const newItem = await prisma.item.create({
              data: {
                name,
                price,
                description,
                location,
                slug,
                images: images,
                main_image: mainImage,
                user: { connect: { id: user_id } },
                category: { connect: { id: category_id } },
              },
            });
        
            console.log('New item created:', newItem);
          } catch (error) {
            console.error('Error creating item:', error);
          } finally {
            await prisma.$disconnect();
          }
      }
      
    const createManyItems = () => {
      let i= 0
      while (i < 300){
        createItem()
        i++
      }
    }
    createManyItems()

    return new Response("_Christo");
}