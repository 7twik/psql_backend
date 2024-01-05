// const pg = require('pg');
// const db= new pg.Client({
//     user:"postgres",
//     host:"localhost",
//     database:"country",
//     password:"qwertyhjkl9",
//     port:5432,
// });
const { Pool } = require('pg')
 
const db = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
db.connect().then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});
exports.Bulk = async (req, res, next) => {
  
    try {
        let data=[];
        db.query('SELECT * FROM coun', (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result.rows);
                
                console.log(result.rows);
            }
        });
        console.log("data ",data);
        //res.json(":)");
        //next();
    } 
    catch (error) {
        console.log(error);
    }
}
exports.Score = async (req, res, next) => {
      
     try {
          let data=[];
          db.query('SELECT * FROM score', (err, result) => {
                if (err) {
                 console.log(err);
                }
                else {
                 res.send(result.rows);
                 
                 console.log(result.rows);
                }
          });
          //next();
     } 
     catch (error) {
          console.log(error);
     }
    }
    exports.Add = async (req, res, next) => {
      
     try {
          await db.query('INSERT INTO score(name,score) VALUES($1,$2)',[req.body.name,req.body.score], (err, result) => {
                if (err) {
                 console.log(err);
                }
                else {
                 res.send(result.rows);
                 
                 console.log(result.rows);
                }
          });
          //res.json(":)");
          //next();
     } 
     catch (error) {
          console.log(error);
     }
    }