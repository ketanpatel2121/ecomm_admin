import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  mongodb: try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Furnistyle",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
