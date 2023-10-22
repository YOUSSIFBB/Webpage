/*
  *reference:  https://www.geeksforgeeks.org/read-xml-file-and-print-the-details-as-tabular-data-by-using-javascript/              
  *reference: : https://www.w3schools.com/jsref/event_onclick.asp
  *reference:  https://www.w3schools.com/xml/dom_nodes_get.asp 
  *reference: https://www.w3schools.com/xml/dom_nodes_clone.asp
  *referemce: https://www.w3schools.com/xml/tryit.asp?filename=try_dom_loadxmltext2
  * Reference solution for the last code: https://stackoverflow.com/questions/30421679/loops-through-array-executes-else-even-when-if-statement-is-true-javascript
*/


const arrayProduct = new Array(100); //create an array 



function loadXMLDoc(){
    document.getElementById("code").innerHTML = "";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
            productDetails(this);
        }
    };

    xmlhttp.open("GET","Products.xml", true);   //xml file access is here using http request function XML DOM 
    xmlhttp.send(); //send the Http request, should be able to show in consle website
}



function productDetails(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("product"); //access the product node from the xml file

    for (i = 0; i < x.length; i++){
        arrayProduct[i] = x[i].getAttribute("code"); //get the attribute code from the element product
    }
    check(xml);
}

function check(xml){

    var j = 0;
    var input = document.getElementById("input").value;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("product");

    for (j = 0; j < arrayProduct.length; j++){   //print the xml data into the html tables specified by their tag names
        if (input === arrayProduct[j]){
            document.getElementById("code").innerHTML =  x[j].getAttribute("code");
            document.getElementById("category").innerHTML = x[j].getElementsByTagName("category")[0].childNodes[0].nodeValue;
            document.getElementById("brandName").innerHTML = x[j].getElementsByTagName("brandName")[0].childNodes[0].nodeValue;
            document.getElementById("description").innerHTML = x[j].getElementsByTagName("description")[0].childNodes[0].nodeValue;
            document.getElementById("quantity").innerHTML = x[j].getElementsByTagName("quantity")[0].childNodes[0].nodeValue;
            document.getElementById("unitPrice").innerHTML = x[j].getElementsByTagName("unitPrice")[0].childNodes[0].nodeValue;

            break;
        }
    }

    SearchBoxValidation(); //call the seach fuction for the search bar validation

}



//alert the user if the search text feild is empt, if field is empty the checkInput function should be called since the text field value is zero
function SearchBoxValidation(){
    //Solution from: https://stackoverflow.com/questions/30421679/loops-through-array-executes-else-even-when-if-statement-is-true-javascript
    const valid = ["002-01","002-02","002-03","002-04","002-05","002-06","004-01","004-02","004-03","004-04","004-05","004-06","007-01","007-02","007-03","007-04","007-05","007-06"]; //array with all product codes
    var boolean = false;
    
    for(let i = 0; i < valid.length; i++){
        if(document.getElementById("input").value === valid[i]){ //execute this code to loop through the array and return true if the code is correct
            boolean = true; 
            break;
        }

    }//forloop
    if(boolean){
        alert("Loading Data" + "\nPlease Wait.....");   //print this message to the user if the code is correct boolean = true
    }else if(document.getElementById("input").value === ""){
        alert("Please enter a product code in the search field");    //print this message if the search field is empty
    }else{
        alert("Invalid code !");    //print this message if the code is not correct
    }

}


