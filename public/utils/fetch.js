const URL = '';
https://secure-brook-84158.herokuapp.com
const getRecipes = async() => {
  const response = await fetch(`${URL}/api/v1/recipes`);
  console.log(response);
};

getRecipes();
