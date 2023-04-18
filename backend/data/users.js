import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kevin Espina',
    email: 'Kevin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Miguel Trejo',
    email: 'Miguel@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
