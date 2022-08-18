
var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDiscriptionInput = document.getElementById('productDiscriptionInput');

var prodactContainer;
var addBtn =document.getElementById("addBtn");
var updataBtn =document.getElementById("updataBtn");
var productIndex;


if(localStorage.getItem("myProducts") !=null){
    prodactContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts(prodactContainer);
}
else{
    var prodactContainer = [];  
}

function addProdact() {
        var prodact = {
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            discription:productDiscriptionInput.value
        }
        prodactContainer.push(prodact);
        localStorage.setItem("myProducts",JSON.stringify(prodactContainer));
        
    
        clearForm();
        displayProducts(prodactContainer);

    addBtn.disabled="true"; 
};

function clearForm() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDiscriptionInput.value = '';
  

    productNameInput.classList.remove('is-valid'); 
    productPriceInput.classList.remove('is-valid');
    productCategoryInput.classList.remove('is-valid');
    productDiscriptionInput.classList.remove('is-valid');
    search = document.getElementById("search");
    search.value = "";
};

function displayProducts(prodactList) {
    var cartoona = ``;
    for(var i=0 ; i < prodactList.length ; i++){
        cartoona+=` <tr id="${i}">
        <td>${i+1}</td>
        <td>${prodactList[i].name}</td>
        <td>${prodactList[i].price}</td>
        <td>${prodactList[i].category}</td>
        <td>${prodactList[i].discription}</td>
        <td> <button onclick="setFormForUpdate(${i}); productIndex=${i}" class="btn btn-warning">update</button></td>
        <td> <button onclick="deleteProducts(${i})" class="btn btn-danger">delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
};



function searchProducts(searchTerm){
    for (var i = 0; i < prodactContainer.length; i++){
        if(prodactContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())){
            document.getElementById(`${i}`).classList.remove("d-none");
        }else{
            document.getElementById(`${i}`).classList.add("d-none");
        };
    };
};




//_________________________________
// Delete
function deleteProducts(deleteIndex) {
    prodactContainer.splice(deleteIndex,1);
    localStorage.setItem("myProducts",JSON.stringify(prodactContainer));
    displayProducts(prodactContainer);
    clearForm();
};


//_________________________________
// Update
function setFormForUpdate(updateIndex) {
    productNameInput.value = prodactContainer[updateIndex].name; 
    productPriceInput.value = prodactContainer[updateIndex].price; 
    productCategoryInput.value = prodactContainer[updateIndex].category; 
    productDiscriptionInput.value = prodactContainer[updateIndex].discription; 
    addBtn.classList.add('d-none');
    updataBtn.classList.remove('d-none');
    updataBtn.disabled="true"; 
    addBtn.disabled="true"; 
};


function UpdataBook(Index) {
    prodactContainer[Index].name=productNameInput.value;
    prodactContainer[Index].price=productPriceInput.value;
    prodactContainer[Index].category=productCategoryInput.value;
    prodactContainer[Index].discription=productDiscriptionInput.value;
    clearForm();
    localStorage.setItem("myProducts",JSON.stringify(prodactContainer));

    displayProducts(prodactContainer);
    updataBtn.classList.add('d-none');
    addBtn.classList.remove('d-none');
    addBtn.disabled="true"; 

};




//________________________________________________________
//vaildation 
var nameAlert = document.getElementById("nameAlert");
var nameSpan = document.getElementById("nameSpan");

productNameInput.onkeyup=function () {
    var nameRegex = /^[A-Z][a-z]{3,8}[0-9]?$/;
    if(nameRegex.test(productNameInput.value)){
        updataBtn.removeAttribute("disabled");

        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        nameAlert.classList.add("d-none"); 
        nameSpan.classList.add("d-none");
    }else{
        addBtn.disabled="true"; 
        updataBtn.disabled="true";
        productNameInput.classList.add("is-invalid");
        productNameInput.classList.remove("is-valid");
        nameAlert.classList.remove("d-none");
        nameSpan.classList.remove("d-none");
    }
};
//_____________1

var priceAlert = document.getElementById("priceAlert");
var priceSpan = document.getElementById("priceSpan");

productPriceInput.onkeyup=function () {
    var priceRegex = /^[1-9][0-9]{3,5}$/;
    if(priceRegex.test(productPriceInput.value)){
        updataBtn.removeAttribute("disabled"); 

        productPriceInput.classList.add("is-valid");
        productPriceInput.classList.remove("is-invalid");
        priceAlert.classList.add("d-none"); 
        priceSpan.classList.add("d-none");
    }else{
        addBtn.disabled="true"; 
        updataBtn.disabled="true"; 
        productPriceInput.classList.add("is-invalid");
        productPriceInput.classList.remove("is-valid");
        priceAlert.classList.remove("d-none"); 
        priceSpan.classList.remove("d-none");
    }
};

//_____________2

var CategoryAlert = document.getElementById("CategoryAlert");
var CategorySpan = document.getElementById("CategorySpan");

productCategoryInput.onkeyup=function () {
    var categoryRegex = /^(tv|mobile|labtop|TV|Mobile|Labtop|Tv)$/; 
    if(categoryRegex.test(productCategoryInput.value)){
        updataBtn.removeAttribute("disabled");

        productCategoryInput.classList.add("is-valid");
        productCategoryInput.classList.remove("is-invalid");
        CategoryAlert.classList.add("d-none"); 
        CategorySpan.classList.add("d-none");
    }else{
        addBtn.disabled="true"; 
        updataBtn.disabled="true";

        productCategoryInput.classList.add("is-invalid");
        productCategoryInput.classList.remove("is-valid");
        CategoryAlert.classList.remove("d-none"); 
        CategorySpan.classList.remove("d-none");
    }
};

//_____________3


var CategoryAlert = document.getElementById("CategoryAlert");
var CategorySpan = document.getElementById("CategorySpan");

productCategoryInput.onkeyup=function () {
    var categoryRegex = /^(tv|mobile|laptop|TV|Mobile|Laptop|Tv)$/;
    if(categoryRegex.test(productCategoryInput.value)){
        updataBtn.removeAttribute("disabled");

        productCategoryInput.classList.add("is-valid");
        productCategoryInput.classList.remove("is-invalid");
        CategoryAlert.classList.add("d-none");
        CategorySpan.classList.add("d-none");
    }else{
        addBtn.disabled="true";
        updataBtn.disabled="true";

        productCategoryInput.classList.add("is-invalid");
        productCategoryInput.classList.remove("is-valid");
        CategoryAlert.classList.remove("d-none"); 
        CategorySpan.classList.remove("d-none");
    }
};


//_____________4
var DiscriptionSpan = document.getElementById("DiscriptionSpan");

productDiscriptionInput.onkeyup=function () {
    var categoryRegex = /^[A-Za-z]{4,150}$/;
    if(categoryRegex.test(productDiscriptionInput.value)){
        addBtn.removeAttribute("disabled"); 
        updataBtn.removeAttribute("disabled"); 

        productDiscriptionInput.classList.add("is-valid");
        productDiscriptionInput.classList.remove("is-invalid");
        DiscriptionSpan.classList.add("d-none");
    }else{
        addBtn.disabled="true";
        updataBtn.disabled="true";

        productDiscriptionInput.classList.add("is-invalid");
        productDiscriptionInput.classList.remove("is-valid");
        DiscriptionSpan.classList.remove("d-none");
    }
};
