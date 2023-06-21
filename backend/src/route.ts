import { Router } from 'express';
import User from './models/user';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

// registration route
routes.post('/api/auth/register', async (req, res) => {

    // parse request body
    const {name, last_name, email, password} = req.body
    const birthdate = new Date(req.body.date)
    console.log(name, last_name, email, password, birthdate)

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
        const token = jwt.sign(
            { userId: newUser.id, username: newUser.name },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Sending a successful response with the generated token
        return res.status(201).json({ token });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Ошибка сервера' });
    }
})

export default routes;