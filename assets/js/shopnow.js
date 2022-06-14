 //Variables
 var products = [];
 var exotic = [];
 var seasonal = [];
 var herbs = [];
 var regular = [];
 var green = [];
 var dairy = [];
 var frozen = [];

 //Get Data from Firebase
async function getDataFromFirebase() {
    const db_ref = firebase.database().ref('Website-Data');
    var snapshot = await db_ref.once('value');
    if(snapshot.exists()){
        console.log("Data Loaded Successfully");
        setCategory(snapshot.val());
    }else{
        console.log("Error Loading Data");
    }
}

getDataFromFirebase();

//Set Arrays based on Category
function setCategory(data){
    for (var key in data) {
        products.push(data[key]);
        if(data[key].category.toString() == "Exotic")
            exotic.push(data[key]);
        else if(data[key].category.toString() == "Regular")
            regular.push(data[key]);
        else if(data[key].category.toString() == "Seasonal")
            seasonal.push(data[key]);
        else if(data[key].category.toString() == "Green-Leafy")
            green.push(data[key]);
        else if(data[key].category.toString() == "Herbs")
            herbs.push(data[key]);
        else if(data[key].category.toString() == "Dairy")
            dairy.push(data[key]);
        else if(data[key].category.toString() == "Frozen")
            frozen.push(data[key]);
        }
        setItems();
}

//Set Items on Page
function setItems(){
    for (let index = 0; index < products.length; index++) {
        document.getElementById('row1').innerHTML+=`
        <div class="card m-2" style="width=10rem;">
        <img src="${/*Change imageur -> imageurl*/products[index].imageur}" class="card-img-top">
        <div class"card-body">
        <h5 class="card-title">${products[index].item}</h5>
        <p class="card-text">₹${products[index].price}</p>
        <button class="btn btn-primary" onclick="add('${products[index].id}')">Add</button>
        </div>
        </div>
        `;
    }
}

//Buy the Items in Cart
function buy(){
    var productsFirebase = [];
    for (let index = 0; index < products.length; index++) {
        if(products[index].cart){
            var product = {
                name: products[index].name,
                price: products[index].price,
                quantity: products[index].quantity,
                total: products[index].total,
            }
            productsFirebase.push(product);
        }     
    }
    firebase.database().ref('cart').push({
        total:total(),
        products: productsFirebase
    });
    swal.fire({
        type: 'success',
        title: 'success',
        text: 'Order Placed'
    });
    clean();
}

//Calculate the Total Amount
function total(){
    let total=0;
    for (let index = 0; index < products.length; index++) {
        if(products[index].cart){
            total += products[index].total;
        }
    }
    return total    
}

var con = 0;
var con2 = [];

//Clean Cart
function clean(){
    for (let index = 0; index < products.length; index++) {
        product[index].cart = false;
        products[index].quantity=1;
        products[index].total=0;
        con2 = [];
        updateCart();
    }
}

//Update the Cart
function updateCart(){
    con=0;
    document.getElementById('tableProducts').innerHTML='';
    for (let index = 0; index < con2.length; index++) {
        var position = con2[index];
        for (let index3 = 0; index3 < products.length; index3++) {
            if(position == products[index3].id){
                document.getElementById('tableProducts').innerHTML+=`
            <tr>
            <th scope="row">${con+1}</th>
            <td><button class="btn btn-danger" onclick="remove(${products[index3].id})">X</button></td>
            <td><img style="width: 5 rem;" src="${/*imageur-> imageurl*/products[index3].imageur}"></td>
            <td>${products[index3].item}</td>
            <td>
            <button class="btn btn-primary" onclick="reduceAmount(${products[index3].id})">-</button>
            <input style="width: 2rem;" id="${products[index3].id}" value="${products[index3].quantity}" disabled>
            <button class="btn btn-primary" onclick="addAmount(${products[index3].id})">+</button>
            </td>
            <td>${products[index3].price*products[index3].quantity}</td>
            </tr>
            `
             
            products[index3].total = products[index3].price * products[index3].quantity;
            }else{

            }
        }
        con= con+1;
    }
    if(total()==0){
        document.getElementById('total').innerHTML='';
    }
    else{
        document.getElementById('total').innerHTML =`
        <tr>
        <th scope = "row"></th>
        <td></td>
        <td></td>
        <td>
        <h4>Total: </h4>
        </td>
        <td>
            ${total()}.00
        </td>
        </tr>
        <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>  
        <td>
        <button onclick="buy()" class="btn btn-success">Buy</button>
        </td> 
        </tr>
    `
    }
}