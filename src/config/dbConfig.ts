export default {
    jwtSecret: process.env.JWT_SECRET || 'somescrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb+srv://Bataman:Morales5616@cluster0.jsxfs83.mongodb.net/',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}