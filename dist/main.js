
// ----- start***side-bar-----
// document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(item){
//     item.addEventListener('click', function(e) {
//         e.preventDefault()
//         const parent = item.closest('.group')
//         if(parent.classList.contains('selected')){
//             parent.classList.remove('selected')
//         } else {
//             document.querySelectorAll('.sidebar-dropdown-toggle').forEach(function(i){
//                 i.closest('.group').classList.remove('selected')
//             })
//             parent.classList.add('selected')
//         }
        
//     })
// })
// ------end***side-bar------


let addBtn = document.querySelector('#add-btn');
var modal = document.querySelector('#modal');
var closeBtn = document.querySelector('#close-btn');

addBtn.addEventListener('click', function () {
  if(modal.classList.contains('hidden')){
    modal.classList.remove('hidden');
  }else{
    modal.classList.add('hidden');
  }
    })
closeBtn.onclick = function () {
    modal.classList.add('hidden');
    
}
// --------Global Variables-------------
var bookData = [];

var titleEl = document.querySelector("#title");
var isbnEl = document.getElementById("isbn");
var categorieEl = document.querySelector("#categorie");
var descreptionEl = document.querySelector("#descreption");
var priceEl = document.querySelector("#price");
let registerBtn = document.querySelector('#register-btn');
var registerForm = document.querySelector('#register-form');
var imgUrl;

// -------------Register code-----------------
registerBtn.onclick = function(e){
    e.preventDefault();
    registrationData();
    getDataFromLocal();
    registerForm.reset('');
    closeBtn.click();
}

if(localStorage.getItem("bookData") != null){
    bookData = JSON.parse(localStorage.getItem("bookData"));
}


function registrationData(){
    bookData.push({
         title : titleEl.value,
         isbn : isbnEl.value,
         categorie : categorieEl.value,
         descreption : descreptionEl.value,
         price : priceEl.value,
         bookCover: imgUrl == undefined ? './dist/images/coverImg/book-cover.png' : imgUrl
    });
    var bookString = JSON.stringify(bookData);
    localStorage.setItem("bookData", bookString);
}


// -------------------return data----
var tableData = document.querySelector('#table-data');
const getDataFromLocal = () =>{
    tableData.innerHTML = '';
    bookData.forEach((data,index)=>{
        tableData.innerHTML += ` 
        <tr idex='${index}'>
            <td class="p-2 text-center border-r-2 border-t-2 border-black ">${index+1}</td>
            <td class="p-2 flex justify-center text-center border-r-2 border-t-2 border-black "><img src="${data.bookCover}" width="50px" height="20px"></td>
            <td class="p-2 text-center border-r-2 border-t-2 border-black ">${data.title}</td>
            <td class="p-2 text-center border-r-2 border-t-2 border-black ">${data.isbn}</td>
            <td class="p-2 text-center border-r-2 border-t-2 border-black ">${data.categorie}</td>
            <td class="p-2 text-center border-r-2 border-t-2 border-black ">${data.descreption}</td>
            <td class="p-2 text-center border-r-2 border-t-2 border-black ">${data.price}</td>
            <td class="p-2 text-center border-r-2 border-t-2 border-black ">
                <button class="w-2/5 bg-sky-300"><i class="ri-eye-fill"></i></button>
                <button class="w-2/5 bg-red-600"><i class="ri-delete-bin-5-fill"></i></button>
            </td>
        </tr>
        `;
    })
}
getDataFromLocal();

// ----image-------
var book_cover = document.querySelector("#book-cover");
var uploadPic = document.querySelector("#upload-field");
uploadPic.onchange = function(){
    if(uploadPic.files[0].size > 1000000){
        var fReader = new FileReader();
        fReader.onload = function(e){
            var imgUrl = e.target.result;
            book_cover.src = imgUrl;
        }
        fReader.readAsDataURL(uploadPic.files[0]);
    }else{
        alert("File size is too long")
    }
}


