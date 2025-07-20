var hour = document.getElementById("Hour");

var min = document.getElementById("Minute");

var sec = document.getElementById("Second");

var ampm = document.getElementById("ampm");

const update = () => {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();

  if (h >= 12) {
    ampm.innerText = "PM";
  } else {
    ampm.innerText = "AM";
  }

  if (h > 12) {
    h = h % 12;
  }

  hour.innerText = h < 10 ? "0" + h : h;
  min.innerText = m < 10 ? "0" + m : m;
  sec.innerText = s < 10 ? "0" + s : s;
};

setInterval(update, 1000);
