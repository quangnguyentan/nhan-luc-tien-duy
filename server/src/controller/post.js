import db from "../config/connectDB";

export const getAllPost =  (req, res) => {
    var sql = 'SELECT * FROM posts;'
      db.execute(sql, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).json({
          success: results ? true : false,
          post : results,
      });
    });
    
}
export const getPostsById =  (req, res) => {
  const { id } = req.params;
  console.log(id)
  var sql = `SELECT * FROM posts WHERE id = ${id} ;`
    db.execute(sql, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).json({
        success: results ? true : false,
        postsId : results,
    });
  });
  
}

