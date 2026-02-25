
const app=require("./app");
const dotenv=require('dotenv').config();
const connectDb=require("./config/connectionDb")
connectDb();

const PORT=process.env.PORT || 5000;

app.listen(PORT, (err) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
