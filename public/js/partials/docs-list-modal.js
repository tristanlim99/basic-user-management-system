//MODALBTNS
const hideDiv = document.getElementById("hide-div");
const cancelBtn = document.getElementById("cancel-btn");
const xBtn = document.getElementById("x-btn");
//edit
const hideDivEdit = document.getElementById("hide-div-edit");
const editCancelBtn = document.getElementById("edit-cancel-btn");
const editXBtn = document.getElementById("edit-x-btn");
//upload
const hideDivUpload = document.getElementById("hide-div-upload");
const uploadXBtn = document.getElementById("upload-x-btn");
const uploadCancelBtn = document.getElementById("upload-cancel-btn");
const addUploadBtn = document.getElementById("add-upload-btn");

const editBtn = document.querySelectorAll("edit");
const deleteBtn = document.querySelectorAll(".delete");

//edit modal
window.addEventListener("DOMContentLoaded", (e) => {
  editBtn.forEach((el) => {
    el.addEventListener("click", function (e) {
      hideDivEditModal();
      console.log(e.currentTarget);
    });
  });
});
// editCancelBtn.addEventListener("click", () => location.reload());
// editXBtn.addEventListener("click", () => location.reload());

//delete modal
window.addEventListener("DOMContentLoaded", (e) => {
  deleteBtn.forEach((el) => {
    el.addEventListener("click", function (e) {
      hideDivModal();
    });
  });
});
// cancelBtn.addEventListener("click", () => location.reload());
// xBtn.addEventListener("click", () => location.reload());

//add upload
const hideDivUploadModal = () => {
  if (hideDivUpload.style.display === "") {
    hideDivUpload.style.display = "block";
  } else {
    hideDivUpload.style.display = "none";
  }
};
addUploadBtn.addEventListener("click", () => {
  hideDivUploadModal();
});
// uploadXBtn.addEventListener("click", () => location.reload());
// uploadCancelBtn.addEventListener("click", () => location.reload());

const hideDivEditModal = () => {
  if (hideDivEdit.style.display === "") {
    hideDivEdit.style.display = "block";
  } else {
    hideDivEdit.style.display = "none";
  }
};

const hideDivModal = () => {
  if (hideDiv.style.display === "") {
    hideDiv.style.display = "block";
  } else {
    hideDiv.style.display = "none";
  }
};

const editUpload = document.querySelectorAll("#upload-edit");
// console.log(editUpload);

// window.addEventListener("DOMContentLoaded", (e) => {
//   editUpload.forEach((el) => {
//     el.addEventListener("click", function (e) {
//       e.preventDefault(editUpload);
//       e.stopPropagation();
//       console.log(e.currentTarget);
//     });
//   });
// });
