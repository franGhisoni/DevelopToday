import { buildApp } from "./app";
import * as dotenv from "dotenv";

import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const start = async () => {
    const app = buildApp();
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

try {
    await app.listen({port});
    console.log(`Server is running on http://localhost:${port}`);
} catch (err) {
    console.error(err);
    
    process.exit(1);
}
};

start();


