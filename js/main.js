// ------Global variables--------
let plus = document.getElementsByClassName("plus");
let moin = document.getElementsByClassName("moins");
let counts = document.getElementsByClassName("count");
let prices = document.getElementsByClassName("itemPrice");
let totals = document.getElementsByClassName("totalprice");
let alladd = document.getElementsByClassName("add");

// ------Global variables for header changes --------
var totalitems = 0;
var totalamount = 0;

function additem() {
  for (let i = 0; i < plus.length; i++) {
    let button = plus[i];
    let counter = counts[i];
    let price = prices[i];
    let total = totals[i];
    let addbtn = alladd[i];
    button.addEventListener("click", function () {
      counter.value++;
      let topay = price.innerHTML * counter.value;
      total.innerHTML = topay;
      addbtn.value = "Add";
      totalamount = +totalamount + +price.innerHTML;
      totalitems = +totalitems + 1;
    });
  }
}

function removeitem() {
  for (let i = 0; i < moin.length; i++) {
    let button = moin[i];
    let counter = counts[i];
    let price = prices[i];
    let addbtn = alladd[i];
    let total = totals[i];
    button.addEventListener("click", function () {
      if (counter.value > 0) {
        counter.value--;
        totalamount = +totalamount - +price.innerHTML;
        totalitems = +totalitems - 1;
      }
      let topay = price.innerHTML * counter.value;
      total.innerHTML = topay;
      addbtn.value = "Add";
      // totalamount = +totalamount - +price.innerHTML;
      // totalitems = +totalitems - 1;
    });
  }
}

function addlist_header() {
  let alladd = document.getElementsByClassName("add");
  for (let i = 0; i < alladd.length; i++) {
    alladd[i].addEventListener("click", () => {
      // console.log(`you added ${totalitems} for a total price of ${totalamount} `);
      document.getElementById("total").innerHTML = `${totalitems}`;
      document.getElementById("price").innerHTML = `${totalamount}`;
    });
  }
}

function removeacard() {
  let allremove = document.getElementsByClassName("btnRemove");
  let allcards = document.getElementsByClassName("card");
  let thiscardtotals = document.getElementsByClassName("totalprice");
  for (let i = 0; i < allremove.length; i++) {
    let card = allcards[i];
    let thiscardtotal = thiscardtotals[i];
    let count = counts[i];
    allremove[i].addEventListener("click", function () {
      totalamount = +totalamount - +thiscardtotal.innerHTML;
      totalitems = +totalitems - +count.value;
      card.remove();
      document.getElementById("total").innerHTML = `${totalitems}`;
      document.getElementById("price").innerHTML = `${totalamount}`;
    });
  }
}

function likebutton() {
  let like = document.getElementsByClassName("like");
  for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function (event) {
      event.target.classList.toggle("liked");
    });
  }
}

function changeaddtext() {
  let modified = totalitems;
  for (let i = 0; i < alladd.length; i++) {
    alladd[i].addEventListener("click", function (event) {
      if (modified === totalitems) {
        event.target.value = "Add";
      } else {
        event.target.value = "Added";
      }
    });
  }
}

additem();
removeitem();
addlist_header();
likebutton();
removeacard();
changeaddtext();
