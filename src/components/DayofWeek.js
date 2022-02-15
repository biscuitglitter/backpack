const DayofWeek = () => {

  const current = document.querySelector(".day")
  const makedate = new Date();
  let day = makedate.getDay();

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let week_numbers = [0, 1, 2, 3, 4, 5, 6];

  for (let i = 0; i < week.length; i++) {
    if (day === week_numbers[i]) {
        current.innerText = "Enjoy the rest of your " + week[i] + "!";
    }
  }
};

export { DayofWeek };
