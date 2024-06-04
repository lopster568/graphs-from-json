import express from 'express';
import fs from "fs"
import path from 'path';
import cors from "cors"

const app = express();
app.use(cors())

app.get("/data", (req, res) => {

    const data = fs.readdirSync("charts", 'utf8');

    const fileData = data.map((file) => {
        const filePath = path.join("charts", file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    })

    // perform the sql queries and add the bar data to each record

    const result = fileData.map((record) => {
        if (record.type === "line-graph") {
            return { ...record, data: [{ x: 10, y: 5 }, { x: 20, y: 20 }, { x: 30, y: 60 }, { x: 40, y: 22 }, { x: 50, y: 30 }] }
        } else {
            return {
                ...record, data: [
                    {
                        x: 4000,
                        y: 2400,
                    },
                    {
                        x: 3000,
                        y: 1398,
                    },
                    {
                        x: 2000,
                        y: 9800,
                    }]
            }
        }
    })

    res.send(result)
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
