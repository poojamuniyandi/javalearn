var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");
var addbtn = document.getElementById("add-popup-button");

addbtn.addEventListener("click", function() {
      popupbox.style.display = "block";
    popupoverlay.style.display = "block";
});
var cancelpop=document.getElementById("cancelbutton")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";

})
var container = document.querySelector(".container")
var addbook= document.getElementById("addbutton")
var booktitleinput = document.getElementById("input-title")
var bookauthorinput = document.getElementById("input-author")
var bookdescriptioninput =document.getElementById("input-discription")
addbook.addEventListener("click", function(event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "readbox");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-btn">Delete</button>
    `;

    container.append(div);

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})
function deletebook(event)
{
    event.target.parentElement.remove()
}

