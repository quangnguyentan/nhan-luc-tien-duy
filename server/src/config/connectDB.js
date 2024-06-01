// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const con = await mongoose.connect(process.env.MONGODB_URL);
//     if (con.connection.readyState === 1) {
//       console.log("DB connection successfully");
//     } else {
//       console.log("DB connecting");
//     }
//   } catch (error) {
//     console.log("DB conection failed");
//     throw new Error(error);
//   }
// };
// module.exports = connectDB;

  const mysql      = require('mysql2');
  const connection = mysql.createConnection({
    host     : '152.42.198.88',
    user     : 'vuabong360',
    password : 't37XnTm6jXNNjkkD',
    database : 'vuabong360'
  });
 
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
  });

module.exports = connection;
