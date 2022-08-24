/*GLOBAL VARIABLES */
const table = document.getElementById("table");
const shareTable = document.getElementById("share-table");
const sampleFile = document.getElementById("edit-file");
const uploadNowBtn = document.getElementById("upload-edit");
const editFile = document.getElementById("edit-file");
const editUploadBtn = document.getElementById("edit-upload-btn");
const delBtn = document.getElementById("del-btn");

console.log(uploadNowBtn);
//*EVENT LISTENERS

// window.addEventListener("DOMContentLoaded", (e) => {
//   renderShareUploads(); //callback
//   renderUploadFile(); //callback
// });

//upload now button event listener
// uploadNowBtn.addEventListener("click", (e) => {
//   checkEmptyField(); //callback
//   // location.reload(); //page refresh
// });

//input event listener for the enter keypress input
// sampleFile.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     uploadNowBtn.click();
//   }
// });

/*FUNCTIONS*/

// const getLocalStorageAdd = () => {
//   return localStorage.getItem("uploadList")
//     ? JSON.parse(localStorage.getItem("uploadList"))
//     : [];
// };

// //uploading file information function
// const uploadFile = () => {
//   let addUploadFile = getLocalStorageAdd(); //uploadList key
//   const fileName = document.getElementById("theFile").value;
//   const slicedFileName = fileName.slice(12);
//   let files = {
//     id: Number(new Date()),
//     label: sampleFile.value,
//     fileName: slicedFileName,
//   };

//   addUploadFile.push(files);
//   localStorage.setItem("uploadList", JSON.stringify(addUploadFile));
// };
uploadNowBtn.addEventListener("click", (e) => {
  e.preventDefault;
});

//function to check if the file name label is an empty field function
const checkEmptyField = () => {
  sampleFile.value == ""
    ? console.log("true")
    : //   (alert("Please Enter File Description"), (uploadNowBtn.disabled = true))
      false;
  sampleFile.value != "" ? true : false;
};

// //function to display the local storage values on the uploaded file
// const renderUploadFile = () => {
//   let addUploadFile = getLocalStorageAdd(); //uploadList key

//   addUploadFile.forEach((item) => {
//     const myUploadsRow = table.insertRow(1); //insert row for each item
//     const cell1 = myUploadsRow.insertCell(0); //insert cells for each row
//     const cell2 = myUploadsRow.insertCell(1);
//     const cell3 = myUploadsRow.insertCell(2);

//     let id = item.id;
//     myUploadsRow.id = id; //set an attribute to the row for target use

//     cell1.innerText = item.label;
//     cell2.innerText = item.fileName;
//     cell3.innerHTML = ` <button class="edit" id="edit">
//               <a href="#edit-modal">Edit</a>
//             </button>
//             |
//             <button class="delete" id="del">
//               <a href="#del-modal-overlay">Delete</a>
//             </button>
//             |
//             <button class="share">
//               <a href="../html/share.html?id=${id}">Share</a>
//             </button>
//           </td>`;

//     //**DELETE FUNCTION **
//     const del = document.getElementById("del"); //variable from dyanmic id created in the template string
//     const edit = document.getElementById("edit"); //variable from dyanmic id created in the template string
//     del.addEventListener("click", (e) => {
//       hideDivModal();
//       //event listener for the confirmation del button modal
//       delBtn.addEventListener("click", () => {
//         const target = e.target.parentElement.parentElement.parentElement;
//         let filteredArr = addUploadFile.filter(function (item) {
//           return item.id !== parseInt(target.id);
//         });
//         localStorage.setItem("uploadList", JSON.stringify(filteredArr));
//         location.reload();
//       });
//     });

//     //**EDIT ITEMS**
//     edit.addEventListener("click", (e) => {
//       hideDivEditModal();
//       //edit modal event listener
//       editUploadBtn.addEventListener("click", () => {
//         //edit upload confirmation in the edit modal
//         const target = e.target.parentElement.parentElement.parentElement;
//         let filteredArr = addUploadFile.filter(function (item) {
//           return item.id === parseInt(target.id);
//         });

//         const setEditedItems = () => {
//           filteredArr[0].label = editFile.value; //filtered label to the input value
//           filteredArr.push(addUploadFile);
//           localStorage.setItem("uploadList", JSON.stringify(addUploadFile));
//           location.reload();
//         };

//         editFile.value == "" ? alert("Please Enter file Description") : false;
//         editFile.value != "" ? setEditedItems() : false;
//       });
//     });
//   });
// };

// // **UPLOAD SHARING SECTION**

// const getLocalStorageShare = () => {
//   return localStorage.getItem("sharedUploads")
//     ? JSON.parse(localStorage.getItem("sharedUploads"))
//     : [];
// };

// //setting the item function for convenience
// const setToLocalStorageShare = (sharedFiles) => {
//   return localStorage.setItem("sharedUploads", JSON.stringify(sharedFiles));
// };

// //function setting the shared uploads to local storage
// const shareUploads = () => {
//   let shareUploadsFile = getLocalStorageShare();
//   let sharedFiles = [
//     {
//       //object key value pair
//       id: Number(new Date()),
//       label: "Sales Team Attendace Sept 2014",
//       fileName: "sale-attend-Sep2014.xls",
//       sharedBy: "	anne.hunter@mail.com",
//     },
//     {
//       id: Number(new Date()),
//       label: "Office Rules",
//       fileName: "OfficeRule.doc",
//       sharedBy: "hr@office.com",
//     },
//   ];
//   setToLocalStorageShare(sharedFiles); //set item callback
// };

// //function to display the share uploads function
// const renderShareUploads = () => {
//   let shareUploadsFile = getLocalStorageShare();

//   shareUploadsFile.forEach((shareFile) => {
//     const shareUploadsRow = shareTable.insertRow(1); //for each items a row is inserted
//     const cell1 = shareUploadsRow.insertCell(0); //insert cells for each row
//     const cell2 = shareUploadsRow.insertCell(1);
//     const cell3 = shareUploadsRow.insertCell(2);

//     cell1.innerText = shareFile.label; //item object property to innertext of the cells
//     cell2.innerText = shareFile.fileName; //item object property to innertext of the cells
//     cell3.innerText = shareFile.sharedBy; //item object property to innertext of the cells
//   });
// };
// shareUploads();
