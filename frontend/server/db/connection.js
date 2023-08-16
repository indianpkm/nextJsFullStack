import mongoose from 'mongoose';

export async function connection() {
    const username=process.env.DB_USERNAME;
    const password=process.env.DB_PASSWORD;
    
    const MONGO_URI=`mongodb+srv://${username}:${password}@cluster1.xoficl5.mongodb.net/?retryWrites=true&w=majority`;

    try {
        mongoose.connect(MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
        
    }


}