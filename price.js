let option = document.getElementById("option");
let op = document.getElementById("op");
let price1 = document.getElementById("price1")
let price2 = document.getElementById("price2")
let price3 = document.getElementById("price3");
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3");
let pro = document.getElementById('pro')
let card1_tb = document.getElementById("card1_tb")
let card1_send = document.getElementById("card1_send")
let card1_user = document.getElementById("card1_user");
let card1_hr1 = document.getElementById("card1_hr1")
let card1_hr2 = document.getElementById("card1_hr2")
let card1_hr3 = document.getElementById("card1_hr3")
let card1_hr4 = document.getElementById("card1_hr4");
let card1_but = document.getElementById("card1_but")
function make_white(p) {
  return p.style.cssText = `color:white;transition-duration:.3s;`
} 
function give_white(p) {
  return (p.style.cssText =
    "background-color:#ddd;transition-duration:.3s;");
} 
option.onclick = () => {
  op.classList.toggle("Aop");
  op.classList.toggle("op");
  if (op.classList.value == 'op') {
    price1.innerHTML = '$ 249.99'
    price2.innerHTML = '$ 199.99'
    price3.innerHTML = "$ 399.99";
  }
  else {
    price1.innerHTML = '$ 24.99'
    price2.innerHTML = '$ 19.99'
    price3.innerHTML = "$ 39.99";
  }
}
option.click()
card1.onclick = () => {
  card1.classList.add("Acard1");
  card1.classList.remove('card1')
  make_white(price1);
  price1.style.cssText = "top:85px;color:white;transition-duration:.3s;";
  make_white(pro)
  pro.style.cssText = "top:65px;color:white;transition-duration:.3s;";
  make_white(card1_tb)
  card1_tb.style.cssText =
    "top:218px;color:white;transition-duration:.3s;";
  make_white(card1_send)
  card1_send.style.cssText =
    "top:327px;color:white;transition-duration:.3s;";
  make_white(card1_user);
  card1_user.style.cssText =
    "top:274px;color:white;transition-duration:.3s;";
  give_white(card1_hr1);
    card1_hr1.style.cssText =
      "top:213px;background-color:#ddd;transition-duration:.3s;";
  give_white(card1_hr2);
    card1_hr2.style.cssText = "top:268px;background-color:#ddd;transition-duration:.3s;";
  give_white(card1_hr3);
  card1_hr3.style.cssText =
    "top:323px;background-color:#ddd;transition-duration:.3s;";
  give_white(card1_hr4);
  card1_hr4.style.cssText = 'top:372px;background-color:#ddd;transition-duration:.3s;'
  card1_but.classList.add('Acard1_but')
  card1_but.classList.remove("card1_but");
}
card1.click();