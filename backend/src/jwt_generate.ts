import jwt from 'jsonwebtoken'
import { IntegerType } from 'mongodb';

type Param = {
    userId: IntegerType,
    username: String
}

const getToken = (params:Param) => {
    const token = jwt.sign(
        { userId: params.userId, username: params.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    return token
}

export default getToken
