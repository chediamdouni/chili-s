const addFoodErrorHandler = (title, category, prix, description, image) => {
  if (!title) return "Please enter food title";
  if (!category) return "Please enter food category";
  if (!prix) return "Please enter food cost";
  if (!description) return "Please enter food description";
 if (!image) return "Please add food image";
};
module.exports = {
  addFoodErrorHandler,
};
