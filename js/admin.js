let userData = JSON.parse(window.localStorage.getItem("userData"))
let elUserName = document.querySelector(".admin-username")

elUserName.textContent = userData.username