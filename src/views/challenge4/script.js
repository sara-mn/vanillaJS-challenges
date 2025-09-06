window.addEventListener("hashchange", () => {
  if (location.hash === "#/challenge/4/array-cardio-day-1") {
    setTimeout(play, 50);
  }
});

play();

function play() {
  const inventors = [
    {first: "Albert", last: "Einstein", year: 1879, passed: 1955},
    {first: "Isaac", last: "Newton", year: 1643, passed: 1727},
    {first: "Galileo", last: "Galilei", year: 1564, passed: 1642},
    {first: "Marie", last: "Curie", year: 1867, passed: 1934},
    {first: "Nikola", last: "Tesla", year: 1856, passed: 1943},
    {first: "Thomas", last: "Edison", year: 1547, passed: 1631},
    {first: "Ada", last: "Lovelace", year: 1815, passed: 1852},
    {first: "Charles", last: "Darwin", year: 1809, passed: 1882},
    {first: "Leonardo", last: "da Vinci", year: 1452, passed: 1519},
    {first: "Stephen", last: "Hawking", year: 1942, passed: 2018}
  ];
  const people = [
    "Michael, Carter",
    "Emily, Roberts",
    "David, Harrison",
    "Olivia, Bennett",
    "James, Wilson",
    "Sophia, Turner",
    "Daniel, Foster",
    "Chloe, Mitchell",
    "Matthew, Richards",
    "Isabella, Gray",
    "Ethan, Collins",
    "Grace, Howard",
    "Benjamin, Cooper",
    "Lily, Ward",
    "Alexander, Hughes",
    "Mia, Peterson",
    "Henry, Morgan",
    "Ava, Simmons",
    "Samuel, Ross",
    "Ella, Murphy",
    "Lucas, Bryant",
    "Charlotte, Hayes",
    "Jack, Powell",
    "Amelia, Cook",
    "William, Barnes",
    "Hannah, Perry",
    "Noah, Henderson",
    "Zoe, Coleman"
  ];
  const data = ['car','motor','truck','bus','car','car','car','motor','truck','bus','truck','truck','truck','motor','truck',]
  const inventorsWithYearsLived = [];
  //***  Create Main Table
  createRows(inventors);

  //***  Show Complete Table
  showCompleteTable(inventors);

  //***  filter Inventors Born 1500s
  filterInventorsBorn1500s(inventors);

  //***  Map Inventors First & Last
  mapInventorsFirstLast(inventors);

  //***  Sort Inventors Oldest To Youngest
  sortInventorsOldestToYoungest(inventors);

  //***  How Many Years did Inventors Live?
  howManyYearsInventorsLive(inventors);

  //***  Sort Inventors By Years Lived
  sortInventorsByYearsLived(inventors);

  //***  Sort Inventors By Years Lived
  sortPeopleAlphabeticallyByLast(people);

  //***  Sort Inventors By Years Lived
  sumOfInstanceEachItem(data);

}

function createRows(inventors) {
  const mainTable = document.getElementById('mainTable');
  const tbody = mainTable.querySelector('tbody');
  inventors.forEach((inventor) => {
    const row = tbody.insertRow(0),
      cell0 = row.insertCell(0),
      cell1 = row.insertCell(1),
      cell2 = row.insertCell(2),
      cell3 = row.insertCell(3),
      cell4 = row.insertCell(4);
    cell0.innerHTML = '#';
    cell1.innerHTML = inventor.first;
    cell2.innerHTML = inventor.last;
    cell3.innerHTML = inventor.year;
    cell4.innerHTML = inventor.passed;
  })
}

function showCompleteTable(inventors) {
  const completeTable = document.getElementById("completeTable");
  completeTable.addEventListener('click', (event) => {
    console.table(inventors);
  })
}

function filterInventorsBorn1500s(inventors) {
  const filterInventorsBorn1500s = document.getElementById("filterInventorsBorn1500s");
  filterInventorsBorn1500s.addEventListener('click', (event) => {
    const filteredItems = inventors.filter(i => (i.year >= 1500 && i.year < 1600));
    console.table(filteredItems);
  })
}

function mapInventorsFirstLast(inventors) {
  const mapInventorsFirstLast = document.getElementById("mapInventorsFirstLast");
  mapInventorsFirstLast.addEventListener('click', (event) => {
    const mappedItems = inventors.map(i => ({
      first: i.first,
      last: i.last
    }));
    console.table(mappedItems);
  })
}

function sortInventorsOldestToYoungest(inventors) {
  const sortInventorsOldestToYoungest = document.getElementById("sortInventorsOldestToYoungest");
  sortInventorsOldestToYoungest.addEventListener('click', (event) => {
    const sortedItems = inventors.sort((a, b) => (a.year - b.year));
    console.table(sortedItems);
  })
}

function howManyYearsInventorsLive(inventors) {
  const howManyYearsInventorsLive = document.getElementById("howManyYearsInventorsLive");
  howManyYearsInventorsLive.addEventListener('click', (event) => {
    if (!inventors[0].hasOwnProperty("lived"))
      inventors = inventors.map((i) => ({
        ...i,
        lived: i.passed - i.year
      }))
    console.table(inventors);
    const YearsAllInventorsLived = inventors.reduce((total, current) => {
      return total + current.lived
    }, 0);
    console.log('YearsAllInventorsLived: ' + YearsAllInventorsLived);
  })
}

function sortInventorsByYearsLived(inventors) {
  const sortInventorsByYearsLived = document.getElementById("sortInventorsByYearsLived");
  sortInventorsByYearsLived.addEventListener('click', (event) => {
    if (!inventors[0].hasOwnProperty("lived"))
      inventors = inventors.map((i) => ({
        ...i,
        lived: i.passed - i.year
      }))
    const sortedByLivedItems = inventors.sort((a, b) => (a.lived - b.lived));
    console.table(sortedByLivedItems);
  })
}

function sortPeopleAlphabeticallyByLast(people) {
  const sortPeopleAlphabeticallyByLast = document.getElementById("sortPeopleAlphabeticallyByLast");
  sortPeopleAlphabeticallyByLast.addEventListener('click', (event) => {
    const sortedPeople = people.sort((a, b) => {
      if (b.split(', ')[1] < a.split(', ')[1])
        return 1
      else {
        return -1
      }
    })
    console.table(sortedPeople);
  })
}

function sumOfInstanceEachItem(data) {
  const sumOfInstanceEachItem = document.getElementById("sumOfInstanceEachItem");
  sumOfInstanceEachItem.addEventListener('click', (event) => {
    const items = data.reduce((sum, current) => {
      if (sum.hasOwnProperty(current)) {
        sum[current] += 1;
      } else
        sum[current] = 1;
      return sum
    }, {})
    console.log(items);
  })
}
