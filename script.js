document.addEventListener('DOMContentLoaded', function () {
    // Set the countdown date to the next New Year
    var countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();
  
    // Update the countdown every 1 second
    var x = setInterval(function () {
      // Get the current date and time
      var now = new Date().getTime();
  
      // Calculate the time remaining
      var timeRemaining = countDownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Display the countdown in the HTML
      document.getElementById('day-box').innerHTML = formatTime(days);
      document.getElementById('hr-box').innerHTML = formatTime(hours);
      document.getElementById('min-box').innerHTML = formatTime(minutes);
      document.getElementById('sec-box').innerHTML = formatTime(seconds);
  
      // If the countdown is over, display a message
      if (timeRemaining < 0) {
        clearInterval(x);
        document.getElementById('day-box').innerHTML = '00';
        document.getElementById('hr-box').innerHTML = '00';
        document.getElementById('min-box').innerHTML = '00';
        document.getElementById('sec-box').innerHTML = '00';
      }
    }, 1000);
  
    // Function to add leading zeros to single-digit numbers
    function formatTime(time) {
      return time < 10 ? '0' + time : time;
    }
  });
  