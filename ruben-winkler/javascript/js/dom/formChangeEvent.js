const myDepartment = document.querySelector("form > select");

myDepartment.addEventListener("change", (event) => {
  const department = event.target.value;

  if (department === "Verwaltung") {
    console.log("Du arbeitest also in der Verwaltung");
  } else if (department === "Geschäftsstelle") {
    console.log("Du arbeitest in der Geschäftsstelle");
  }
});
