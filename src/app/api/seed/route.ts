import type { NextApiRequest, NextApiResponse } from "next";
import {faker, fakerEN_AU} from "@faker-js/faker"
import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcryptjs');


const prisma = new PrismaClient();


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
    await prisma.category.deleteMany();
    await prisma.item.deleteMany();
    await prisma.user.deleteMany();

    await prisma.category.createMany({
        data:
            [{ name: "Cars & Vehicle"},
            {name: "Pets"},
            {name: "Real State"},
            {name: "Jobs"},
            {name: "Baby & Children"},
            {name: "Clothing & Jewellery"},
            {name: "Electronics & Computers"},
            {name: "Sports & Fitness"},
            {name: "Books, Music & Games"},
            {name: "Tickets"}]
    });

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

    const generateFakeUser = async ( ) => {
        const users = [];

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName()
        const address = fakerEN_AU.location.streetAddress();
        const suburb = fakerEN_AU.location.city();
        const plainPassword = faker.internet.password();
        const password = await bcrypt.hash(plainPassword, 10)
        const state = fakerEN_AU.location.state();
        const postcode = fakerEN_AU.location.zipCode();
        const cardNumber = fakerEN_AU.finance.creditCardNumber();
        const nameOnCard = `${firstName} ${lastName}`;
        const expiringDate = fakerEN_AU.date.future().toLocaleDateString();
        const lastDigits = faker.number.int({min: 111, max: 999})
        const profilePic = faker.image.urlLoremFlickr({ category: 'people' })
        
        users.push({
            first_name: firstName,
            last_name: lastName,
            password,
            address,
            suburb,
            state,
            postcode,
            card_number: cardNumber,
            name_on_card: nameOnCard,
            expiring_date: expiringDate,
            last_digits: lastDigits.toString(),
            profile_pic: profilePic,
        });
        
        
        prisma.user
        .create({
            data: users[0],
             })
        .then((createdUser) => {
      console.log('User created:', createdUser);
        })
        .catch((error) => {
      console.error('Error creating user:', error);
        });

        return users;
};

     generateFakeUser();


    return new Response("Meow");
    // const generateFakeItems = (count: number) => {
    //     const items = []

    //     let getRandomCategory = () => {
    //         let random = Math.floor(Math.random() * allCategories.length) + 1;
    //         return allCategories[random];
    //     }

    //     let getRandomUserId = async () => {
    //         const users = await prisma.user.findMany();
    //         if (!users || users.length === 0) {
    //             throw new Error('No users available');
    //           }
              
    //         const randomIndex = Math.floor(Math.random() * users.length);
    //         const randomUser = users[randomIndex]
    //         const user_id = randomUser.id;
    //         return user_id
    //     }

    //     for (let i=0; i < count; i++){
    //         const price = faker.commerce.price();
    //         const description = faker.commerce.productDescription();
    //         const name = faker.commerce.productName();
    //         const location = `${fakerEN_AU.location.city}, ${fakerEN_AU.location.state}`
    //         const slug = faker.helpers.slugify(name);
    //         const category_id = getRandomCategory();
    //         const user_id = getRandomUserId();

    //         items.push({
    //             name: name,
    //             price: price,
    //             description: description,
    //             location: location,
    //             slug: slug,
    //             category_id: category_id,
    //             user_id: user_id,
    //         });
    //     } 
    //     return items
    // };

    // const fakeItems = generateFakeItems(120);

    // await prisma.item.createMany({
    //     data: fakeItems,
    // })

    
}