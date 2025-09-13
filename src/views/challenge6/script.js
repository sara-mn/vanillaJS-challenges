window.addEventListener("hashchange", () => {
  if (location.hash === "#/challenge/6/ajax_type_ahead") {
    setTimeout(fetchData, 50);
  }
});

await fetchData();

async function fetchData() {
  const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  let resultEl = document.getElementById("result");
  const cities = await getDataApi(url);

  document.getElementById('searchBtn').addEventListener('keyup', (e) => {
    resultEl.innerHTML = '';
    const str = e.target.value;
    if (str.length > 2) {
      const filteredList = findMatches(cities, str);
      if (filteredList.length > 0)
        filteredList.forEach(c => {
          const li = document.createElement("li");
          li.innerText = c['city']?.toString()
          resultEl.appendChild(li);
        })
      else {
        const li = document.createElement("li");
        li.innerText = 'Not Found!'
        resultEl.appendChild(li);
      }
    }
  })
}

function findMatches(cities, key) {
  const str = `/${key}/i`
  const regex = new RegExp(key, 'i');
  return cities.filter(item => item['city']?.match(regex));
}

async function getDataApi(url, key) {
  const response = await fetch(url, {method: "GET"});
  try {
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
