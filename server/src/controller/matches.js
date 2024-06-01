import db from "../config/connectDB";

export const getAllMatches =  (req, res) => {
    var sql = 'SELECT * FROM matches;'
      db.execute(sql, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).json({
          success: results ? true : false,
          matches : results,
      });
    });
    
}
export const getMatchesById =  (req, res) => {
  const { idMatches } = req.params;
  console.log(idMatches)
  var sql = `SELECT * FROM matches WHERE id =  ${idMatches} ;`
    db.execute(sql, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).json({
        success: results ? true : false,
        matchesId : results,
    });
  });
  
}

