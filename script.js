var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

//console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work");
} else if (weekday === "Wednesday") {
  console.log("Halfway to Friday!");
} else if (weekday === "Thursday") {
  console.log("It's Friday Eve.");
} else if (weekday === "Friday") {
  console.log("Just a few hours to the weekend!");
} else {
  console.log("It's the weekend!!");
}
