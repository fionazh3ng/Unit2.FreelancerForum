const freelancers = document.querySelector("#freelancers");
freelancers.style.width = "80%";
freelancers.style.margin = "0 auto";

// Initializing an array of possible names
const names = [
  "Carol",
  "John",
  "Amy",
  "Alex",
  "Joanne",
  "Dennis",
  "Luke",
  "Aaron",
];

// Initializing an array of possible occupations
const occupations = [
  "Programmer",
  "Administrator",
  "Loan Originator",
  "Model",
  "Recuiter",
  "Software Engineer",
  "Instructor",
];

// Initializing an array of starting prices
const startingPrices = [70, 25, 35, 60, 45, 75];

// Initializing an array of freelancers with names, occupations, and starting prices
const arrFreelancer = [
  {
    name: "Alice",
    occupation: "Writer",
    startingPrice: 30,
  },

  {
    name: "Bob",
    occupation: "Teacher",
    startingPrice: 50,
  },
];

// Creating a table
const table = document.createElement("table");
table.className = "table";
freelancers.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr = document.createElement("tr");
thead.appendChild(tr);

const thName = document.createElement("th");
thName.innerHTML = "name";
tr.appendChild(thName);

const thOccupation = document.createElement("th");
thOccupation.innerHTML = "occupation";
tr.appendChild(thOccupation);

const thStartingPrice = document.createElement("th");
thStartingPrice.innerHTML = "startingPrice";
tr.appendChild(thStartingPrice);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

let bool = true;

// displaying the table
const display = () => {
  arrFreelancer.forEach((element) => {
    if (bool) {
      const trBody = document.createElement("tr");
      tbody.appendChild(trBody);
      const tdName = document.createElement("td");
      tdName.innerHTML = element.name;
      trBody.appendChild(tdName);
      const tdOccupation = document.createElement("td");
      tdOccupation.innerHTML = element.occupation;
      trBody.appendChild(tdOccupation);
      const tdStartingPrice = document.createElement("td");
      tdStartingPrice.innerHTML = element.startingPrice;
      trBody.appendChild(tdStartingPrice);
    }
  });
  bool = false;
};

const addFreelancer = () => {
  display();

  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice =
    startingPrices[Math.floor(Math.random() * startingPrices.length)];

  const trBody = document.createElement("tr");
  tbody.appendChild(trBody);

  const tdName = document.createElement("td");
  tdName.innerHTML = name;
  trBody.appendChild(tdName);

  const tdOccupation = document.createElement("td");
  tdOccupation.innerHTML = occupation;
  trBody.appendChild(tdOccupation);

  const tdStartingPrice = document.createElement("td");
  tdStartingPrice.innerHTML = startingPrice;
  trBody.appendChild(tdStartingPrice);

  arrFreelancer.push({ name, occupation, startingPrice });

  // Stop adding freelancers if we've reached the maximum number of freelancers
  const maxFreelancer = 10;

  if (arrFreelancer.length >= maxFreelancer) {
    clearInterval(addFreelancerIntervalId);
  }

  // Calculating the average price
  const averagePrice = document.getElementById("average");
  const avg = () => {
    let sum = 0;
    arrFreelancer.forEach((freelancer) => {
      sum += freelancer.startingPrice;
    });

    let average = sum / arrFreelancer.length;
    return Math.floor(average);
  };
  averagePrice.innerHTML = avg();
};

addFreelancer();

// Settinng the interval to add a freelancer and render every few seconds
const addFreelancerIntervalId = setInterval(addFreelancer, 2000);
