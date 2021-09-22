function add(id){
    for (let index = 0; index < products.length; index++) {
        if(products[index].id != id || products[index].cart == true){

        }   
    else{
        products[index].cart = true;
        con2.push(products[index].id);
        document.getElementById('tableProducts').innerHTML+=`
        <tr>
        <th scope="row">${con+1}</th>
        <td><button class="btn btn-danger" onclick="remove(${products[index].id})">X</button></td>
        <td><img style="width: 5 rem;" src="${/*Change imageur -> imageurl*/products[index].imageur}"></td>
        <td>${products[index].item}</td>
        <td>
        <button class="btn btn-primary" onclick="reduceAmount('${products[index].id}')">-</button>
        <input style="width: 2rem;" id="${products[index].id}" value="${products[index].quantity}" disabled>
        <button class="btn btn-primary" onclick="addAmount('${products[index].id}')">+</button>
        </td>
        <td>${products[index].price*products[index].quantity}</td>
        </tr>
        `
        con++;
        products[index].total = products[index].price * products[index].quantity;
        }  
    }
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

function remove(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            products[index].cart = false;
            products[index].total = 0;
            products[index].quantity = 1;
            total();
            for (let index2 = 0; index2 < con2.length; index2++) {
                if(products[index].id == con2[index2]){
                    con2.splice(index2,1);
                }
            }
            updateCart();
        }else{
            updateCart();
        }        
    }
    
}

function reduceAmount(id){
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            if (products[index].quantity > 1) {
                products[index].quantity = products[index].quantity-1;
                updateCart();
            }
        }
    }
}

function addAmount(id){
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            if (products[index].quantity > 0) {
                products[index].quantity = products[index].quantity+1;
                updateCart();
            }
        }
    }
}