// Chapter 38 - 42 task 03




// var a = +prompt("Enter your height");
// var b = +prompt("Enter your lenght");
// var c = +prompt("Enter your width");

// var s =  (a+b+c)/2

// var area = s*(s-a)(s-b)(s-c)

// document.write(s + area);


// Chapter 38 - 42 task 04//



// var a = +prompt("Enter your english marks");
// var b = +prompt("Enter your urdu");
// var c = +prompt("Enter your chemistry");

// var percent =  (a+b+c)/900*100

// var aver = (a+b+c)/3
// document.write(round);
// document.write("<br");

// document.write(round);


// Chapter 43 - 48 task 01//


// function click1(){

// alert("This is alert box")

// }


// Chapter 43 - 48 task 02//


//  function mobile1(){
//  alert("This is Iphone")

//  }

 
//  function mobile2(){
//     alert("This is Samsung")
   
//     }

//     function mobile3(){
//         alert("This is Nokia")
       
//         }



// Chapter 43 - 48 task 03//

var d = document.getElementById("mess")

function text(){

var a = document.getElementById("t");

var p = document.createElement("li");

var text = document.createTextNode(t.value)

p.setAttribute("class","text")
p.appendChild(text)

var delbtn = document.createElement("button");

var delbtntext = document.createTextNode("Delete this task");

delbtn.setAttribute("onClick","delitem(this)")

delbtn.setAttribute("class","btn")

p.appendChild(delbtn)

delbtn.appendChild(delbtntext)



d.appendChild(p)
a.value = ""


var editbtn = document.createElement("button");

var editbtntext = document.createTextNode("Edit the task");

editbtn.setAttribute("onClick","edittask(this)")

editbtn.setAttribute("class","btn")

editbtn.appendChild(editbtntext)
p.appendChild(editbtn)

}



function edittask(t){

   var editvalue = prompt("Enter the value for edit",t.parentNode.firstChild.nodeValue)

    t.parentNode.firstChild.nodeValue = editvalue

console.log(t.parentNode.firstChild.nodeValue)

}




function delitem(r){

    
   
    r.parentNode.remove()
    console.log(r)
      
        
    }
    



function deleteall(){
d.innerHTML = ""

    
}
   






