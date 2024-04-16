import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://andnandna:fY2N3IzR6EaH7qpU@cluster0.r4ssq5h.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0"
    )
    console.log("Success: Connected to MongoDB")
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB
