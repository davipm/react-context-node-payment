import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      userNewUrlParse: true,
      userCreateIndex: true,
      userUnifiedTopology: true
    });

    console.log(`MongoDB connected ${connect.connection.host}`.cyan.underline.bold);

  } catch (error) {
    console.log(`Error ${error.message}`.red);
    process.exit(1);
  }
};

export default connectDB;
