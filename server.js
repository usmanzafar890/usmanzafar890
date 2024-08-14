const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    try {
        res.send({message:"bhai kam ho gya hy dont worry"})
    } catch (error) {
        res.send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
