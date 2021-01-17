const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7

function myFunc(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

myFunc(cats);

// Question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  let result = [];
  
  for (let i = 0; i < cats.length; i++) {
    let pContent;
    let h5Content = `<h5>${cats[i].name}</h5>`;
    let wrapper = document.createElement("div");

    if (!!cats[i].age === false) {
      pContent = "<p>Age unknown</p>";
    } else {
      pContent = `<p>${cats[i].age}</p>`;
    }

    wrapper.innerHTML = h5Content + pContent;

    result.push(wrapper);
  }
  return result;
}

const catsContent = createCats(cats);

for (htmlElement in catsContent) {
  catContainer.appendChild(catsContent[htmlElement]);
}
