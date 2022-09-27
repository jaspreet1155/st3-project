const xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/products", "true");
xhr.onload = function () {
  if (this.status === 200) {
    let res = JSON.parse(this.responseText);
    let res1 = res.products;
    let myul = document.getElementById("myul");
    res1.forEach(function (e) {
      let li = document.createElement("li");
      li.setAttribute("class", "mul");

      let a = document.createElement("a");
      a.setAttribute("href", "#");
      a.setAttribute("class", "product-poster");
      li.appendChild(a);

      let img = document.createElement("img");
      img.setAttribute("src", `${e.thumbnail}`);
      img.setAttribute("width", "250");
      img.setAttribute("height", "250");
      a.appendChild(img);

      let a1 = document.createElement("a");
      a1.setAttribute("class", "product-name");
      a1.setAttribute("href", "#");
      let name = document.createTextNode(`${e.title}`);
      a1.appendChild(name);
      li.appendChild(a1);

      let div = document.createElement("div");
      div.setAttribute("class", "price");
      let price = document.createTextNode(`$ ${e.price}`);
      div.appendChild(price);
      li.appendChild(div);

      let div2 = document.createElement("div");
      div2.setAttribute("class", "btn1");

      let btn1 = document.createElement("button");
      let btn2 = document.createElement("button");
      let btn3 = document.createElement("button");

      btn1.setAttribute("class", "minusBtn1");
      btn2.setAttribute("class", "mainBtn1");
      btn3.setAttribute("class", "plusBtn1");

      btn1.innerHTML = "-";
      btn2.innerHTML = "ADD TO CART";
      btn3.innerHTML = "+";

      div2.appendChild(btn1);
      div2.appendChild(btn2);
      div2.appendChild(btn3);
      li.appendChild(div2);
      myul.appendChild(li);
    });
  } else {
    console.log("Some error occured");
  }

  let my_btn = document.getElementsByClassName("btn1");
  Array.from(my_btn).forEach(function (e) {
    let plus1 = e.getElementsByClassName("plusBtn1")[0];
    let minus1 = e.getElementsByClassName("minusBtn1")[0];
    let main1 = e.getElementsByClassName("mainBtn1")[0];
    let count1 = 0;
    plus1.addEventListener("click", function (ele) {
      if (main1.innerHTML === "ADD TO CART") {
        count1 += 1;
        main1.innerHTML = count1;
      } else {
        count1 += 1;

        main1.innerHTML = count1;
      }
    });

    minus1.addEventListener("click", function (element) {
      if (count1 >= 1) {
        if (main1.innerHTML === "ADD TO CART") {
          count1 -= 1;
  
          main1.innerHTML = count1;
        } else {
          count1 -= 1;
  
          main1.innerHTML = count1;
        }
      }
      if (count1 == 0) {
        main1.innerHTML = "ADD TO CART";
      }
    });
  });
};

xhr.send();

let search = document.getElementById("search1");
let product = document.getElementsByClassName("mul");
search.addEventListener("input", (element) => {
  Array.from(product).forEach(function (ele) {
    let b = search.value.toLowerCase();
    let a = ele
      .getElementsByClassName("product-name")[0]
      .innerHTML.toLowerCase();
    if (a.includes(b)) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
});

let btn = document.getElementsByClassName("btn");
Array.from(btn).map(function (ele) {
  let plus = ele.getElementsByClassName("plusBtn")[0];
  let minus = ele.getElementsByClassName("minusBtn")[0];
  let main = ele.getElementsByClassName("mainBtn")[0];

  let count = 0;
  plus.addEventListener("click", function (element) {
    if (main.innerHTML === "ADD TO CART") {
      count += 1;
      main.innerHTML = count;
    } else {
      count += 1;

      main.innerHTML = count;
    }
  });
  minus.addEventListener("click", function (element) {
    if (count >= 1) {
      if (main.innerHTML === "ADD TO CART") {
        count -= 1;

        main.innerHTML = count;
      } else {
        count -= 1;

        main.innerHTML = count;
      }
    }
    if (count == 0) {
      main.innerHTML = "ADD TO CART";
    }
  });
});
