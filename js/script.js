//window.alert("Hello JS");
function clc() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let h_rotation = 30 * h + m * 0.5;
  let m_rotation = 6 * m;
  let s_rotation = 6 * s;

  hr.style.transform = "rotate(" + h_rotation + "deg)";
  min.style.transform = "rotate(" + m_rotation + "deg)";
  sec.style.transform = "rotate(" + s_rotation + "deg)";
}

clc();
setInterval(clc, 1000);
