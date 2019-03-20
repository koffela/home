



const min = 1;
var name = prompt("What is your name?", "Your name");
let calc = Math.floor(Math.random() * 99) + min; 
var username = name.toUpperCase() + calc;
  
myFunction();

document.getElementById("demo").innerHTML = member();

function myFunction()
{
   
    
   
    document.getElementsByClassName("header")[0].innerHTML = "Welcome, user " + username;
    

    
    
}

function myButton(color) {
    
   document.getElementById("divholder").style.background = color;
    document.getElementsByClassName("wrapper")[0].style.background = color;
    
    
 }

 

function member()
{
{

    if(name != null)
var membership, text, fLen, i;
membership = ["STEVE12", "SALLY42", "JOHN63", ""];
membership[3] = username;
fLen = membership.length;
console.log("in member function");
text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + membership[i] + "</li>";
}
text += "</ul>"; 
}
return text;
}


 

