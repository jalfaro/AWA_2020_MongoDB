const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:AWA&2019@cluster0-tfdr9.mongodb.net/test", { useNewUrlParser: true }).then(() => {
    console.log("Servidor de DB activo")
})
.catch(
    () => console.log("Error")
);

module.exports = mongoose;

