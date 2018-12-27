
CountDownTimer('1/14/2019 08:00 AM', 'days', 'hours', 'minutes', 'seconds');

function CountDownTimer(dt, days_id, hours_id, minutes_id, seconds_id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(days_id).innerHTML = days + '';
        document.getElementById(hours_id).innerHTML = hours + '';
        document.getElementById(minutes_id).innerHTML = minutes + '';
        document.getElementById(seconds_id).innerHTML = seconds + '';
    }

    timer = setInterval(showRemaining, 1000);
}


window.onload=function(){
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  const items = document.querySelectorAll(".accordion a");


  navBarToggle.addEventListener('click', function () {
      console.log("hi")
      mainNav.classList.toggle('active');
  });

  function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));
}
