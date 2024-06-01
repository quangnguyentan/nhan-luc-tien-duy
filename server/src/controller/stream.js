import db from "../config/connectDB";

export const getAllStream=  (req, res) => {
    var sql = 'SELECT * FROM streams;'
      db.execute(sql, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).json({
          success: results ? true : false,
          stream: results,
      });
    });
    
}
export const getStreamById =  (req, res) => {
  const { id } = req.params;
  var sql = `SELECT * FROM streams WHERE ${id} ;`
    db.execute(sql, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).json({
        success: results ? true : false,
        streamId : results,
    });
  });
  
}

