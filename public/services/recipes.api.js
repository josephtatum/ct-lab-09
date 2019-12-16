const URL = 'https://secure-brook-84158.herokuapp.com/';


export async function getRecipes() {
  const response = fetch(`${URL}/api/v1/recipes`);
  console.log(response);
}



