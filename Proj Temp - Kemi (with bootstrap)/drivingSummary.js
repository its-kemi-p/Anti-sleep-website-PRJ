document.addEventListener("DOMContentLoaded", () => {
  const ctx1 = document.getElementById("summaryBlinksChart").getContext("2d");
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["08/23", "08/24", "08/25"],
      datasets: [
        {
          label: "Blinks per Minute",
          data: [20, 15, 25],
          borderColor: "red",
          fill: false,
        },
      ],
    },
  });

  const ctx2 = document
    .getElementById("summaryHeadMovementsChart")
    .getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["08/23", "08/24", "08/25"],
      datasets: [
        {
          label: "Head Tilts",
          data: [5, 3, 7],
          backgroundColor: "blue",
        },
      ],
    },
  });
});
