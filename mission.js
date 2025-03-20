function addFeatures(){
let namevalue = String(document.querySelector('#nameofpro').value)
let pricevalue = String(document.querySelector('#priceofpro').value)
let optionselected = String(document.querySelector('#food').value)
let Image1 =document.querySelector('#linkvalue').value;
let x = document.querySelector('#thecart');
let x1 = document.createElement('tr');
let x2 = document.createElement('td');
let x3 = document.createElement('td');
let x4 = document.createElement('td');
let x5 = document.createElement('td');
let newimg = `<img width="200" src = ${Image1}>`
x2.innerText = "Product Name: "+ namevalue;
x3.innerText = "Product Price: "+ pricevalue;
x4.innerText = "catagory: "+ optionselected;
x5.innerHTML = newimg;




x.appendChild(x1);
x1.appendChild(x2);
x1.appendChild(x3);
x1.appendChild(x4);
x1.appendChild(x5);




}
function clearform(){
    document.querySelector('#nameofpro').value = "";
    document.querySelector('#priceofpro').value = "";
    document.querySelector('#linkvalue').value = "";
    document.querySelector('#food').value = "";


}