import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

interface MongooseConnection {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
}

// Global declaration to prevent multiple connections in dev mode
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseConnection | undefined;
}

let cached: MongooseConnection = global.mongooseCache || { conn: null, promise: null };

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise
        console.log('✅ Connected to MongoDB')
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default connectToDatabase
