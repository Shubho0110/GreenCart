// import mongoose from "mongoose";

// const connectDB = async ()=>{
//     try {
//         mongoose.connection.on('connected', ()=> console.log("Database Connected")
//         );
//         await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)
//     } catch (error) {
//         console.error(error.message);
//     }
// }


// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.error("MongoDB error:", error.message);
  }
};

export default connectDB;