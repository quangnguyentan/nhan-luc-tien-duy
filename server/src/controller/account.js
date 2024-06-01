import db from "../config/connectDB";

export const getAllAccount =  (req, res) => {
    var sql = 'SELECT * FROM accounts;'
      db.execute(sql, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).json({
          success: results ? true : false,
          account : results,
      });
    });
    
}
export const getAccountById =  (req, res) => {
  const { id } = req.params;
  var sql = `SELECT * FROM accounts WHERE id = ${id} ;`
    db.execute(sql, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).json({
        success: results ? true : false,
        accountId : results,
    });
  });
  
}

