let userName = document.getElementById("user_name");
let userEmail = document.getElementById("user_email");
let userNumber = document.getElementById("user_number");
let mainn = document.querySelector("main");
let tBody = document.querySelector("tbody");
let button = document.getElementById("add_row");
button.addEventListener("click", (event) => {
  if (userName.value == "" || userEmail.value == "" || userNumber == "") {
    document.querySelector(".empty").innerText = "Empty Fields";
    document.querySelector(".empty").style.color = "red";
    setTimeout(() => {
      document.querySelector(".empty").innerText = "";
    }, 2000);
  } else {
    document.querySelector(".empty").innerText = "Data Inserted Successfully";
    document.querySelector(".empty").style.color = "green";
    setTimeout(() => {
      document.querySelector(".empty").innerText = "";
    }, 2000);
    
  }

  // if(userName.value == (/[0-9]/)){
  //     alert('Invalid name')
  // }

  tBody.innerHTML += `<tr class="new_rows">
    <td>${userName.value}</td>
    <td>${userEmail.value}</td>
    <td>${userNumber.value}</td>
    <td id="remove"><button class="remove_btn">Remove</button></td>
    </tr>`;
});

let tableEl = document.querySelector("table");
let newRows = document.querySelector(".new_rows");
let removeBtn = document.querySelector(".remove_btn");
tableEl.addEventListener("click", (event) => {
  removeBtn = event.target;
  removeBtn.closest("tr").remove();
});
