// Empty dataset to store input ************************* Local Storage ****************************

var data = [];

//********        Select  Items          ********

var submitBtn = document.querySelector(".submitButton")
var buttons = document.querySelector(".buttons")
var editBtn = document.querySelector(".edit")
var delBtn = document.querySelector(".delete")
var displayItem = document.querySelector(".displayItem")
var alert = document.querySelector(".alert");

// Edit option

var editFlag = false

// Submit button functionality - when clicked the data is pushed in data[array]

// Then we map through our data array and join all the inputs. Then we print it 

// If empty value is added, we'll display that "empty value" on alert and won't add to our local storage. 

submitBtn?.addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value;
    if(alert.classList.contains("alert-danger")){
        alert.classList.remove("alert-danger")
    }
    if(alert.classList.contains("alert-success")){
        alert.classList.remove("alert-success")
    }

// checking if the value is empty

    if (userInput) {
        data.push(userInput)
        var display = data.map(function(curItem) {
            displayAlert(`${curItem} added successfully`, "success")
            return `<li class="displayItem">
        <h3 class="item">${curItem}</h3>
        <div class="buttons">
            <button class="itemButton edit"><i class="fas fa-edit"></i></button>
            <button class="itemButton delete"><i class="fas fa-trash"></i></button>
        </div>
    </li>`
        })
        display = display.join("");
    displayItem.innerHTML = display
    }
    else{
        displayAlert("Empty Value","danger")
    }
})


function displayAlert(text, action) {
    alert.innerHTML = text;
    alert.classList.add(`alert-${action}`)
}