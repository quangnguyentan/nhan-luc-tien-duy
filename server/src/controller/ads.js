import db from "../config/connectDB";

export const getAllADS =  (req, res) => {
    var sql = 'SELECT * FROM ads_settings;'
      db.execute(sql, function (error, results, fields) {
        if (error) throw error;
        return res.status(200).json({
          success: results ? true : false,
          ads : results,
      });
    });
    
}
export const getADSById =  (req, res) => {
  const { id } = req.params;
  var sql = `SELECT * FROM ads_settings WHERE id =  ${id} ;`
    db.execute(sql, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).json({
        success: results ? true : false,
        ads : results,
    });
  });
  
}

