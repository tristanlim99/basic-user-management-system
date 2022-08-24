const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const url = window.location.href;
const thisUrlId = url.substring(url.lastIndexOf("=") + 1);
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/*FUNCTIONS */

// //parsing the local storage function
// const getLocalStorage = () => {
//   return localStorage.getItem("userList")
//     ? JSON.parse(localStorage.getItem("userList"))
//     : [];
// };

//checking empty fields function
const checkEmptyField = () => {
  fullName.value == "" ? alert("Please Enter Your Name") : false;
  email.value == "" ? alert("Please Enter Your Email") : false;
  email.value.match(emailFormat)
    ? true
    : (alert("Please Enter A Valid Email"), location.reload());

  //validate condition
  fullName.value != "" && email.value != "" && email.value.match(emailFormat)
    ? true
    : (submitBtn.disabled = true);
};

//EDIT FUNCTION
// const editUserList = () => {
//   let parsedUserList = getLocalStorage(); //userList key
//   let parsedLoginUser = getLoginData(); //LoggedInUser key from logout.js

//   let editInfo = parsedUserList.filter((item) => {
//     return item.id === parseInt(thisUrlId);
//   });

//   editInfo[0].fullName = fullName.value;
//   editInfo[0].email = email.value;

//   localStorage.setItem("userList", JSON.stringify(parsedUserList));

//   if (editInfo[0].id == parsedLoginUser.id) {
//     parsedLoginUser.fullName = fullName.value;
//     parsedLoginUser.email = email.value;
//     localStorage.setItem("LoggedInUser", JSON.stringify(parsedLoginUser));
//   } else {
//     return false;
//   }
// };

/*EVENT LISTENER */
submitBtn.addEventListener("click", () => {
  checkEmptyField();
});
