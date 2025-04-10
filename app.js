// dark & light mode
let day_night = document.getElementById("day_night");
let day_night2 = document.getElementById("day_night2");
day_night2.style.display = "none";
day_night.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--color-1",
    "rgb(184,184,184,.5)"
  );
  document.documentElement.style.setProperty("--color-2", "#000");
  document.documentElement.style.setProperty("--color-3", "#fff");
  document.documentElement.style.setProperty("--color-4", "rgb(0,0,0,.5)");
  document.documentElement.style.setProperty("--color-5", "#663da6");
  day_night.style.display = "none";
  day_night2.style.display = "unset";
});
day_night2.addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-1", "#262b3f");
  document.documentElement.style.setProperty("--color-2", "#fff");
  document.documentElement.style.setProperty("--color-3", "#1e2337");
  document.documentElement.style.setProperty(
    "--color-4",
    "rgb(255,255,255,.5)"
  );
  document.documentElement.style.setProperty("--color-5", "greenyellow");
  day_night.style.display = "unset";
  day_night2.style.display = "none";
});

let active_battery = document.getElementById("active_battery");
let battery_icon = document.getElementById("battery_icon");
let battery_level = document.getElementById("battery_level");
let audio1 = new Audio("audio/charging.mp3");

navigator.getBattery().then((battery) => {
  // Update battery level function
  const updateBatteryLevel = () => {
    battery_level.textContent = `${Math.floor(battery.level * 100)}%`;
  };

  // Update charging state function
  const updateChargingState = () => {
    if (battery.charging) {
      battery_icon.classList.replace(
        "ri-battery-low-line",
        "ri-battery-charge-line"
      );
      active_battery.classList.add("active_battery");
      battery_icon.style.color = "#fff";
      // Audio play might require user interaction
      try {
        audio1.play();
      } catch (err) {
        /* Handle autoplay block */
      }
    } else {
      battery_icon.classList.replace(
        "ri-battery-charge-line",
        "ri-battery-low-line"
      );
      active_battery.classList.remove("active_battery");
      battery_icon.style.color = "unset";
    }
  };

  // Initial setup
  updateBatteryLevel();
  updateChargingState();

  // Event listeners
  battery.addEventListener("levelchange", updateBatteryLevel);
  battery.addEventListener("chargingchange", updateChargingState);
});

// wifi_icon change
// let wifi = document.getElementById('wifi');
// const wifi_change = () =>{
//     if (navigator.onLine){
//         wifi.style.color = 'var(--color-5)';
//     } else {
//         wifi.style.color = ' ';
//     }
// }
// setInterval(wifi_change, 100);
// wifi_change();
const wifi = document.getElementById("wifi"); // Use const instead of let

const wifi_change = () => {
  if (navigator.onLine) {
    wifi.style.color = "var(--color-5)";
  } else {
    wifi.style.color = ""; // Fixed empty string
  }
};
setInterval(wifi_change, 100);
// Initial check
wifi_change();

// Search functionality
const searchInput = document.querySelector(".search input");
const gameCards = document.querySelectorAll(".game_bx .card, .games_bx .card");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  gameCards.forEach((card) => {
    const gameTitle = card
      .querySelector(".content h5, .content h6")
      .textContent.toLowerCase();
    if (gameTitle.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// 2nd page javascrips
45.4;
