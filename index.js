const elements = document.querySelectorAll(".element");
// console.log(elements);
const URL = "https://periodic-table-elements-info.herokuapp.com/elements";

const getElements = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

getElements();
