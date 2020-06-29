class Activity {
  constructor(category, description, minutes, seconds, intention) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.intention = intention;

    this.completed = false;
    this.id = Date.now();
  }

  countdown() {
    this.started = true;
    var counting = setInterval(() => {
      renderTimer();
      currentActivity.seconds--;
      if (currentActivity.minutes <= 0 && currentActivity.seconds === -1) {
        clearInterval(counting);
        currentActivity.markComplete();
      } else if (currentActivity.seconds === -1) {
        currentActivity.seconds = 59;
        currentActivity.minutes--;
      }
    }, 1000);
  }

  markComplete() {
    this.completed = true;
  }
}
