const mongoose = require("mongoose");
var Information = mongoose.Schema(
  {
    company_name: {
      type: String,
    },
    international_name: {
      type: String,
    },
    abbreviations: {
      type: String,
    },
    tax_code: {
      type: String,
    },
    tax_address: {
      type: String
    },
    representative_name: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    fax: {
      type: String,
    },
    website_link: {
      type: String,
    },
    
    email: {
      type: String,
    },
   
    contact_address: {
      type: String,
    },
    
    operation_days: {
      type: String,
    },
    status: {
      type: String,
    },
    details :{
        type : Array
    }
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Information", Information);