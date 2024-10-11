let thispage1 = 1; 
let limit = 15;
let list = document.querySelectorAll('.product-grid .item');
function loadItem(){
    let beginGet = limit * (thispage1 - 1);
    let endGet = limit * thispage1 - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';
    let first = document.createElement('li');
    first.innerText = '<<';
    if(thispage1 != 1) {
        first.setAttribute('onclick', "changePage(" + (1) + ")");
    } else {
        first.setAttribute('onclick', "changePage(" + (thispage1) + ")");    
    }
    document.querySelector('.listPage').appendChild(first);
        let prev = document.createElement('li');
        prev.innerText = '<';
        if(thispage1 != 1) {
        prev.setAttribute('onclick', "changePage(" + (thispage1 - 1) + ")");
        } else {
            prev.setAttribute('onclick', "changePage(" + (thispage1) + ")");    
        }
        document.querySelector('.listPage').appendChild(prev);

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thispage1){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    let next = document.createElement('li');
    next.innerText = '>';
    if(thispage1 != count){
    next.setAttribute('onclick', "changePage(" + (thispage1 + 1) + ")");
    } else {
        next.setAttribute('onclick', "changePage(" + (thispage1) + ")");    
    }
    document.querySelector('.listPage').appendChild(next);
    let last = document.createElement('li');
    last.innerText = '>>';
    if(thispage1 != count) {
        last.setAttribute('onclick', "changePage(" + (count) + ")");
    } if(thispage1 == count) {
        last.setAttribute('onclick', "changePage(" + (thispage1) + ")"); 
    }
    document.querySelector('.listPage').appendChild(last);
}
function changePage(i){
    thispage1 = i;
    loadItem();
    window.scrollTo(500, 500);
}
var arr_hinh=[
    "http://andylongstore.com/storage/banner.jpg",
    "https://www.duchuymobile.com/images/promo/34/s20-plus-pc-banner.jpg",
    "https://vj360.vn/wp-content/uploads/2023/03/Xiaomi-Redmi-Note-12-Pro-Plus-ava.jpeg",
    "https://cdn.pico.vn/Files/2021/10/25/18673_dien-thoai-oppo.jpg",
    "https://theme.hstatic.net/200000136511/1000604100/14/col_banner_img3.jpg?v=384",
    "https://thepixel.vn/wp-content/uploads/Vivo-Y33s-5G-sap-duoc-ra-mat-tai-Trung-Quoc-voi-man-hinh-giot-nuoc-muc-gia-tu-56-trieu-dong.-1024x491.png",
    "https://cdn.tgdd.vn/Files/2020/06/07/1261474/nokia-5-3-1_800x450_800x450.jpg",
];
var index=0;
function prev(){
index--;
if(index<0) index=arr_hinh.length-1;
document.getElementById("hinh").src=arr_hinh[index];
}
function next(){
index++;
if(index==arr_hinh.length) index=0;
document.getElementById("hinh").src=arr_hinh[index];
}
setInterval("next()", 3000);
function opencart() {
    document.getElementById("mycart").style.width = "560px";
  }
  
  function closecart() {
    document.getElementById("mycart").style.width = "0";
  }
  const btn = document.querySelectorAll("button");
  btn.forEach(function(button,index) {
  button.addEventListener("click", function(event){{
    var btnItem = event.target;
    var product = btnItem.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector("h3").innerText;
    var productprice = product.querySelector("span.gia").innerHTML;
    event.preventDefault();
    addCart(productImg,productName,productprice);
   
    
  }})
  })
  function addCart(productImg,productName,productprice) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++) {
    var productT = document.querySelectorAll("span.title");
    if(productT[i].innerHTML == productName) {
      alert("Sản phẩm của bạn đã có sẵn trong giỏ hàng!");
      return;
    }
    }
    var trcontent = '<tr><td style="position: relative; display: flex; align-items: center; left: 7%;"><img style="width:70px"src='+productImg+'><span class="title">'+productName+'</span></td><td><span class="gia">'+productprice+'</span></td><td><input class="SL" style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete">Xóa</span></td></tr>';
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody"); 
    cartTable.append(addtr);
    cartTotal();
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    deleteCart();
  }
  function cartTotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  var totalC = 0;
  var count = 0;
  for (var i=0;i<cartItem.length;i++) {
  var inputValue = cartItem[i].querySelector("input.SL").value;
  inputValue1 = parseInt(inputValue);
  var Price = cartItem[i].querySelector("span.gia").innerHTML;
  if(inputValue1 > 1) {
  count = count + inputValue1;
  } else {
  count = count+1;
  }
  totalA = parseFloat(Price);
  totalB = inputValue*totalA*1000000;  
  totalC = totalC + totalB;
  inputChange();
  }
  console.log(count);
  var quantity = document.querySelector("span.shopping");
  quantity.innerHTML = count;
  var cartToTalA = document.querySelector(".price-total span"); 
  cartToTalA.innerHTML = totalC.toLocaleString('de-DE');
  }
  function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++) {
    var productDelete = document.querySelectorAll("span.delete");
    productDelete[i].addEventListener("click",function(event){
    var cartDelete = event.target;
    var cartItemB = cartDelete.parentElement.parentElement;
    cartItemB.remove()
    cartTotal();
    })
    
    }
  }
  function inputChange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++) {
    var inputValue = cartItem[i].querySelector("input.SL");
    inputValue.addEventListener("change",function(){
    cartTotal();
    })
  }
  }
