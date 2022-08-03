let userName = document.getElementById('user_name');
let userEmail = document.getElementById('user_email');
let userNumber = document.getElementById('user_number');
let mainn = document.querySelector('main');
let tBody = document.querySelector('tbody');
let button = document.getElementById('add_row');
button.addEventListener("click", (event) =>{
    // if(userName.value == '' || userEmail.value == '' || userNumber == ''){
    //     alert("Empty Input Field's")
    // }

    tBody.innerHTML += 
    `<tr class="new_rows">
       <td>${userName.value}</td>
       <td>${userEmail.value}</td>
       <td>${userNumber.value}</td>
       <td id="remove"><button class="remove_btn">Remove</button></td>
    </tr>`
});

let newRows = document.querySelector('.new_rows')
let removeBtn = document.querySelector('.remove_btn');
removeBtn.addEventListener('click', (event) =>{
    
    alert('Tried!!!');
})