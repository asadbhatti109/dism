function product_1(){
    var proname=document.getElementById("pro_1").value
    var detail_1=document.getElementById("details_1")
if(proname=="SAMSUNG"){
    document.getElementById("img_1").src="download.jpg";
    detail_1.innerHTML="<li>MOBILE NAME:-SAMSUNG</li><li>MOBILE PRICE:-12500</li>"
}
else if(proname=="OPPO"){
     document.getElementById("img_1").src="download (1).jpg";
     detail_1.innerHTML="<li>MOBILE NAME:-OPPO</li><li>MOBILE PRICE:-25000</li>"
}
else("invalid name")



}


function product_2(){
    var proname=document.getElementById("pro_2").value
if(proname=="SAMSUNG"){
    document.getElementById("img_2").src="download.jpg"
}
else if(proname=="OPPO"){
     document.getElementById("img_2").src="download (1).jpg"
}
else("invalid name")



}