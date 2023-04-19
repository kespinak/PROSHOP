import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // creates users from the model: './models/userModel.js' and passes the info: './data/users.js' into that model schema
    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id // creates constant adminUser as the 1st object out of createdUsers
    const sampleProducts = products.map(product => { 
      return {...product, user: adminUser} //now you map through './data/products.js' and set the user as adminUser
    })
    await Product.insertMany(sampleProducts) //now you create poducts from the 'productModel.js' by passing in the info 
    console.log('Data Imported!'.green.inverse)
    process.exit() //node.exit process

  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// creates a terminal function of data:destroy (see package.json file)
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}