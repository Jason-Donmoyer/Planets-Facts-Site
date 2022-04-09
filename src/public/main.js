const planetData = [];

async function getData() {
  const res = await fetch('http://localhost:3000/data')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    for (let i in data) {
      planetData.push(data[i]);
    }
    console.log(planetData[2].name);
  });
}

getData();


