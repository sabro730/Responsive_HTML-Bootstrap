if(localStorage.getItem('Maximum_stake')){
  if(document.getElementById("maximum_val")){
    document.getElementById("maximum_val").innerHTML = localStorage.getItem('Maximum_stake');
    document.getElementById("minimum_val").innerHTML = localStorage.getItem('Minimum_stake');
    const balance = Number(localStorage.getItem('myBalance'));
    const maximum1 = Number(localStorage.getItem('Maximum_stake'));
    if(balance > maximum1) localStorage.setItem('other_value', maximum1);
    else if(balance < maximum1) localStorage.setItem('other_value', balance);
    document.getElementById('other_input').value = localStorage.getItem('other_value');
  }
}

if(localStorage.getItem('myBalance')) {
  const myVal = document.getElementById("temp");
  const balance = localStorage.getItem('myBalance');
  myVal.innerHTML = '$' + balance;
  document.getElementById('disp-balance').innerHTML = '$' + balance;
  document.getElementById('disp-buyin').innerHTML = '$' + Number(localStorage.getItem('Buy_in'));

}

function set_balance(val){
  if(val) localStorage.setItem('myBalance', val);
  return;
}

function setNumberofSeats(item){
  if(item) localStorage.setItem('num_seat', item.innerHTML);
  const temp = document.getElementsByClassName("item-selected1");
  temp[0].className = "mini-item";
  item.className = "mini-item item-selected1";
  return;
}

function setLimitType(item){
  if(item) localStorage.setItem('limit_type', item.innerHTML);
  const temp = document.getElementsByClassName("item-selected");
  temp[0].className = "mini-item";
  item.className = "mini-item item-selected";
  return;
}

function setBuyinstake(item){
  if(item[0]!='$') return;
  const vals = item.slice(1).split(' ');
  localStorage.setItem('stake', vals[0] + ' ' + vals[2]);
  localStorage.setItem('Maximum_stake', Math.round(vals[0] * 200));
  document.getElementById("maximum_val").innerHTML = '$' + Math.round(vals[0]*200);

  localStorage.setItem('Minimum_stake', Math.round(vals[2] * 30));
  document.getElementById("minimum_val").innerHTML = '$' + Math.round(vals[2]*30);

  if(localStorage.getItem('Maximum_stake')){
    const balance = Number(localStorage.getItem('myBalance'));
    const maximum1 = Number(localStorage.getItem('Maximum_stake'));
    if(balance > maximum1) localStorage.setItem('other_value', maximum1);
    else if(balance < maximum1) localStorage.setItem('other_value', balance);
    document.getElementById('other_input').value = localStorage.getItem('other_value');
  }

}

function setotherval(item){
  if(item.value) localStorage.setItem('other_value', item.value);
  return;
}

function setBuyin(item){
  if(!item) return;
  const vals = item.children[0].children[0].children[0].innerHTML.slice(1);
  localStorage.setItem('Buy_in', vals);  
  item.className = 'row item-0 selected';
  if(item.children[2] === undefined){
    item.innerHTML = item.innerHTML + "<div class='spinner-place'><div class='spinner-grow text-muted'></div><div class='spinner-grow text-warning'></div><div class='spinner-grow text-danger'></div></div>";
  }
  console.log(document.getElementById('popup').style.display);
  document.getElementById('popup').style.display = 'initial';
}

function disablePopup(){
  document.getElementById('popup').style.display = 'none';
}

function showSpinner(item){
  item.innerHTML = "<div class='spinner-place1'><div class='spinner-grow text-muted'></div><div class='spinner-grow text-warning'></div><div class='spinner-grow text-danger'></div></div>";
  console.log(item)
}