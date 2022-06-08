const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
let countryCode = document.getElementById("codeId");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    const option = selected.innerHTML;
    if(option == "India") {
        countryCode.textContent = "+91";
    } else if(option == "Austrelia") {
        countryCode.textContent = "+61";
    } else if(option == "Bahrain") {
        countryCode.textContent = "+973";
    } else if(option == "Belgium") {
        countryCode.textContent = "+32";
    } else if(option == "Canada") {
        countryCode.textContent = "+1";
    } else if(option == "Croatia") {
        countryCode.textContent = "+385";
    } else if(option == "Denmark") {
        countryCode.textContent = "+45";
    } else if(option == "France") {
        countryCode.textContent = "+33";
    } else if(option == "Germany") {
        countryCode.textContent = "+49";
    } 


    optionsContainer.classList.remove("active");
  });
});

let submitBtn = document.getElementById("verifyBtn");
let Fname = document.getElementById("Fname");
    let Lname = document.getElementById("Lname");
    let phoneNumber = document.getElementById("phoneNumber");

Fname.addEventListener("keyup", () => {
    console.log(Fname.value);

    if(Fname.value !== "" && Lname.value !== "" && phoneNumber.value !== "") {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "0.8";
    }
}) 

Lname.addEventListener("keyup", () => {
    console.log(Lname.value);

    if(Lname.value !== "" && Lname.value !== "" && phoneNumber.value !== "") {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "0.9";
    }
}) 

phoneNumber.addEventListener("keyup", () => {
    console.log(phoneNumber.value);

    if(phoneNumber.value !== "" && Lname.value !== "" && phoneNumber.value !== "") {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
    }
})

submitBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    console.log(submitBtn);

    Fname.value = "";
    Lname.value = "";
    phoneNumber.value = "";
    selected.innerHTML = "Select Country";
    countryCode.textContent = "+00"
    
})

console.log(optionsList)
optionsList