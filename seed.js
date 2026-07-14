const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const connectDB = require("./database/connect");

const Product = require("./models/product");
const User = require("./models/user");
const Category = require("./models/Category");
const Order = require("./models/order");


const categories =[
    {
        name : "Men",
        description : "Men clothes",
        image : "",
    },
    {
        name : "Women",
        description : "Women clothes",
        image : "",
    },
    {
        name : "Kids",
        description : "Kids clothes",
        image : "",
    },
    {
        name : "Shoes",
        description: "All kinds of shoes",
        image : "",
    }
]


const seedCategories = async ()=>{
    await Category.deleteMany();

    const createdCategories = await Category.insertMany(categories);


    console.log("✅ Categories seeded");

    return createdCategories;
}


const seedProducts = async (createdCategories)=>{
    await Product.deleteMany();

     const products = [
        {
            name: "Classic T-Shirt",
            category: createdCategories[0]._id,
            price: 250,
            size: ["M", "L", "XL"],
            color: ["Black", "White"],
            stock: 20,
            brand: "Nike",
            description: "Comfortable cotton t-shirt",
            image: "",
        },
        {
            name: "Women's Hoodie",
            category: createdCategories[1]._id,
            price: 550,
            size: ["S", "M", "L"],
            color: ["Pink", "Gray"],
            stock: 15,
            brand: "Adidas",
            description: "Warm hoodie",
            image: "",
        },
        {
            name: "Kids Jacket",
            category: createdCategories[2]._id,
            price: 400,
            size: ["S", "M"],
            color: ["Blue"],
            stock: 10,
            brand: "Puma",
            description: "Winter jacket for kids",
            image: "",
        },
        {
            name: "Women's Dress",
            category: createdCategories[1]._id,
            price: 900,
            size: ["S", "M", "L", "XL"],
            color: ["Black"],
            stock: 8,
            brand: "Gucci",
            description: "Modern dress",
            image: "",
        },
    ];

    const createdProducts = await Product.insertMany(products);

    console.log("✅ Products seeded");

    return createdProducts;
}


const seedUsers = async () => {
    await User.deleteMany();

    const users = [
        {
            name: "Admin",
            email: "admin@example.com",
            password: "admin123",
            phoneNumber: "01012345678",
            address: "Cairo",
            role: "admin",
        },
        {
            name: "Ahmed",
            email: "ahmed@example.com",
            password: "ahmed123",
            phoneNumber: "01112345678",
            address: "Alexandria",
            role: "user",
        },
        {
            name: "Sara",
            email: "sara@example.com",
            password: "sara1234",
            phoneNumber: "01212345678",
            address: "Giza",
            role: "user",
        },
    ];

    const createdUsers = await User.insertMany(users);

    console.log("✅ Users seeded");

    return createdUsers;
};


const seedOrders = async (createdUsers,createdProducts)=>{
    await Order.deleteMany();

    const orders =[
        {
            user : createdUsers[1]._id,
            items : [
                {
                    product : createdProducts[0]._id,
                    quantity : 2,
                },
                {
                    product : createdProducts[1]._id,
                    quantity : 1,
                }
            ],
            totalPrice :1050,
            shippingAddress: "Alexandria",
            paymentMethod: "Cash",
            status: "Pending",
        },
        {
            user: createdUsers[2]._id,
            items: [
                {
                    product: createdProducts[2]._id,
                    quantity: 1,
                },
            ],
            totalPrice: 400,
            shippingAddress: "Giza",
            paymentMethod: "Card",
            status: "Delivered",
        },
    ]

    const createdOrders = await Order.insertMany(orders);

    console.log("✅ Orders seeded")

    return createdOrders;
}


const seedDatabase = async () => {
    try {
        await connectDB();

        const createdCategories = await seedCategories();

        const createdProducts = await seedProducts(createdCategories);

        const createdUsers = await seedUsers();

        await seedOrders(createdUsers, createdProducts);

        console.log("🎉 Database seeded successfully");

        await mongoose.connection.close();
    } catch (err) {
        console.error(err);

        await mongoose.connection.close();
    }
};

seedDatabase();

