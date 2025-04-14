import mongoose from 'mongoose';

// Создаём таблицу (схему) для юзера
const UserSchema = new mongoose.Schema(
    {
        id: {
            type: String, // Тип данных 
            required: true, // Обязательная или нет
            unique: true // Уникальная или нет
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        passwordHash: { // Хеш нашего пароля, кабы хранить сам пароль небезопасно
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        phone_number: {
            type: String
        },
        gender: {
            type: String
        },
        age: {
            type: Number
        },
        nickname: {
            type: String,
            unique: true, // Лучше это поменять нахуй
        },
        avatarUrl: String // ??? Хз пока, но идея норм
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('User', UserSchema); // Экспортируем модельку для БД