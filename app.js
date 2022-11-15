let tests = document.querySelectorAll("option");
let form = document.querySelector("form");
let table = document.querySelector("#patient-bill");
let inp = document.getElementById("tList");
let inp1 = document.getElementById("patient-Name");
let span = document.querySelector("span");
let counter = 0;
let amt = 0;
let tbody = document.querySelector("tbody");
let name = document.getElementById("name");
let total = 0;
let tot = document.getElementById("tot");
let list = document.getElementById("Test-note");
console.log(list);
let small = document.getElementById("pref");
let dishes = document.getElementById("tests");

small.addEventListener("change", e => {
  inp.removeAttribute("disabled");
  async function getmove() {
    let res = await fetch(`./data.json`);
    let obj = await res.json();
    console.log(obj);
    if (e.target.value == "veg") {
      dishes.innerHTML = ``;
      obj.veg.forEach(e => {
        dishes.innerHTML += `<option class="foods" value=${e.name}>${e.price}</option>`;
      });
    } else if (e.target.value == "non-veg") {
      dishes.innerHTML = ``;
      obj.nonVeg.forEach(e => {
        dishes.innerHTML += `<option class="foods" value=${e.name}>${e.price}</option>`;
      });
    } else {
      inp.setAttribute("disabled", true);
    }
    inp.addEventListener("change", e => {
      let val = e.target.value;
      console.log(val);
      console.log(e);
      e.target.value = "";
      e.target.setAttribute("placeholder", "Add More Items");
      counter += 1;
      span.innerText = `${counter} Added`;
      span.style.color = `gold`;
      inp1.children.entry.setAttribute("disabled", "true");
      let tem = val;
      obj.veg.forEach(e => {
        if (e.name == tem) {
          amt = e.price;
          list.innerHTML += `<li>${val}- &#8377; ${amt}</li>`;
          total += amt;
          tbody.innerHTML += `<tr>
          <td>${counter}</td>
          <td><img src=${e.image} alt="" width="100px" height="100px" style={border-radius:"50%"}/></td>
          <td>${val}</td>
          <td cls="amt">${amt}</td>
                            </tr>`;
        } else {
          return null;
        }
      });
      obj.nonVeg.forEach(e => {
        if (e.name == tem) {
          amt = e.price;
          list.innerHTML += `<li>${val}- &#8377; ${amt}</li>`;
          total += amt;
          tbody.innerHTML += `<tr>
          <td>${counter}</td>
          <td><img src=${e.image} alt="" width="100px" height="100px" style={border-radius:"50%"}/></td>
          <td>${val}</td>
          <td cls="amt">${amt}</td>
                            </tr>`;
        } else {
          return null;
        }
      });
      form.addEventListener("submit", e => {
        e.preventDefault();
        name.innerText = `Customer Name: ${e.target[0].value}`;
        tot.innerText = total;
        table.style.display = "block";
        form.style.display = "none";
      });
    });
  }
  getmove();
})

span.addEventListener("mouseenter", e => {
  list.style.display = "block";
});
span.addEventListener("mouseleave", e => {
  list.style.display = "none";
});
