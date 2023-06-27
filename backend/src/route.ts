import { Router } from 'express';
import User from './models/user';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import getToken from './jwt_generate'

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

// registration route
routes.post('/api/auth/register', async (req, res) => {

    // parse request body
    const {name, last_name, email, password} = req.body
    const birthdate = new Date(req.body.date)

    try {
        // checking that there is no user with such email in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Пользователь с таким email уже зарегистрирован' });
        }

        // hash password bigin save in db
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user in db
        const newUser = new User({
            name,
            last_name,
            email,
            password: hashedPassword,
            birthdate
        });
        await newUser.save();

        // Generate a JWT token for a new user
        const token = getToken({ userId: newUser.id, username: newUser.name })

        // Sending a successful response with the generated token
        return res.status(201).json({ user: newUser, token: token });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Ошибка сервера' });
    }
})
// login route
routes.post('/api/auth/login', async (req, res) => {
    const {email, password} = req.body

    try {
        // checking that there is no user with such email in the database
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'Пользователь с таким email не обнаружен' });
        }
        // check password from request
        const hashedPassword = await bcrypt.hash(password, existingUser.password);

        if (existingUser.password === hashedPassword) {
            // Generate a JWT token for a new user
            const token = getToken({ userId: existingUser.id, username: existingUser.name })
            return res.status(200).json({ user: existingUser, token: token });
        } else {
            return res.status(400).json({ message: 'Пользователь с таким email не обнаружен' });
        }

    } catch (error:any) {
        console.error(error.message)
    }
})
// check token route
routes.post('/api/auth/check-token', async (req, res) => {
    const token = req.body.token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({decoded})
})

export default routes;