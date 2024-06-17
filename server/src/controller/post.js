const Post = require("../models/post");
export const getAllPost = async (req, res) => {
  const response = await Post.find();
  return res.status(200).json({
    success: response ? true : false,
    post: response,
  });
};
export const UpdatePost = async (req, res) => {
  const { id } = req.params;
  // const {abbreviations, company_name,contact_address, email, fax, international_name,
  //   logo, operation_days, phone_number, representative_name, status, tax_address, tax_code, website_link } = req.body
  const { list, members_list } = req.body;
  // const response =  await Post.findByIdAndUpdate(id, { abbreviations, company_name,contact_address, email, fax, international_name,
  //   logo, operation_days, phone_number, representative_name, status, tax_address, tax_code, website_link, details }, { new : true})
  const response = await Post.findByIdAndUpdate(
    id,
    { list, members_list },
    { new: true }
  );
  return res.status(200).json({
    success: response ? true : false,
    post: response,
  });
};

export const getPostsById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const response = await Post.findById(id);
  return res.status(200).json({
    success: response ? true : false,
    postsId: response,
  });
};
export const getPostsByMemberId = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const response = await Post.findById(id);
    return res.status(200).json({
      success: response ? true : false,
      postsId: response,
    });
  }
};
