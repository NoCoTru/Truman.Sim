document.addEventListener("DOMContentLoaded", () => {
  const story = document.getElementById("story");
  const locationEl = document.getElementById("location");
  const emotionEl = document.getElementById("emotion");
  const moodFill = document.getElementById("mood-fill");
  const moodLabel = document.getElementById("mood-label");
  const thoughtsContent = document.getElementById("thoughts-content");
  const log = document.getElementById("log");

  const emotions = ["Comfortable", "Curious", "Happy", "Anxious"];
  const locations = ["Home", "Park", "Cafe", "Office"];
  let currentEmotion = "Comfortable";
  let currentLocation = "Home";
  let seconds = 0;

  function updateStatus() {
    currentEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    currentLocation = locations[Math.floor(Math.random() * locations.length)];
    locationEl.textContent = currentLocation;
    emotionEl.textContent = currentEmotion;
    const percent = Math.floor(Math.random() * 100);
    moodFill.style.width = percent + "%";
    moodLabel.textContent = currentEmotion + " (" + percent + "%)";
    thoughtsContent.textContent = `"Thinking... maybe I'm being watched?"`;
    log.innerHTML = `<div>[${new Date().toLocaleTimeString()}] Truman moved to ${currentLocation} and feels ${currentEmotion}.</div>` + log.innerHTML;
  }

  setInterval(() => {
    seconds += 5;
    if (seconds >= 300) {
      story.innerHTML = "<strong>Someone whispers:</strong> Truman, this isn't real. You've been watched your whole life.";
      return;
    }
    updateStatus();
  }, 5000);
});
