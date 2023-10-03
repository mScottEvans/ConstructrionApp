// var things = document.getElementsByClassName("things")
// for (var i = 0; i < things.length; i++){
//     console.log(things[i].innerText)
// }


// var text = document.querySelector("#headerTwo").textContent
// document.querySelector("#paragraph").textContent = text

// -------------------------------------------------------
// ** Modifying Styles **

// var myThirdHeader = document.getElementById("headerThree")
// console.log(Object.keys(myThirdHeader.style))
// headerThree.style.backgroundColor = "blue"

// var body = document.getElementsByTagName("myBody")
// myBody.style.backgroundColor = "green"
// document.body.style.backgroundColor = "olive"

// -------------------------------------------------------

// ** Modifying Elements: Value **

// className
// document.querySelector("#headerTwo").className += " new-class"

// classList
// document.querySelector("#headerTwo").classList.add("new-class")
// document.querySelector("#headerTwo").classList.toggle("another")
// console.log(document.querySelector("#headerTwo").className)
// document.querySelector("#headerTwo").classList.toggle("and-another")
// console.log(document.querySelector("#headerTwo").className)
// document.getElementsByClassName("title")
// -------------------------------------------------------

// PRACTICE
// 1. add elements to index HTML
// 2. Add styles those elements
// 3. Use JS to togggle and untoggle or add and remove

// ex.
// 1.
// var el = document.querySelector("#headerThree").className += "new-class"
// 2.
// headerThree.style.backgroundColor = "Olive"
// 3.
// document.querySelector("#headerThree").className += " another"


// console.log(document.querySelector("#headerThree").classList)
// console.log(el)

// -------------------------------------------------------

// ** Modifying Elements: Value **

// var x = document.getElementById("text-input")
// x.value = "I just changed the inputBox"

// console.log(x)

// -------------------------------------------------------

// ** Creating Elements in JS **

// var newListItem = document.createElement("li")
// var newParagraph = document.createElement("p")

// newListItem.textContent = "4"
// newParagraph.textContent = "This is a paragraph"
// newParagraph.style.fontSize = "30px"

// var ulParent = document.getElementById("my-unordered-list")

// console.log(ulParent.innerHTMl += "<li>Number 5</li>")


// ulParent.append(newListItem)
// ulParent.append(newParagraph)

// -------------------------------------------------------

// ** Using For loop put an Array in a unordered list **

// var evansList = [
//     "Brandon",
//     "Nathan",
//     "Dustin",
//     "Scott",
//     "Elizabeth",
//     "Taylor",
//     "Tyler",
//     "Maggie",
//     "Cruise",
//     "Allen",
//     "Mitchell",
//     "Jayce",
//     "Elvis"
// ]

// var evansList = document.getElementById("evans")

// for(let i = 0; i < evansList.length; i++){
    //     var newName = document.createElement("li")
    //     newName.textContent = family[i]
    //     console.log(newName)
    //     evansList.append(newName)
    // }
// -------------------------------------------------------

// STEP 1.) Create list component

// STEP 2.) Add a value/content to that li component

// STEP 3.) append it



var square = document.getElementById("mySquare")

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue"
})
square.addEventListener("mouseout", function(){
    square.style.backgroundColor = "white"
})
square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})
square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})
window.addEventListener("wheel", function(){
    square.style.backgroundColor = "orange"
})





window.addEventListener("keydown", function(e){
    switch(e.key){
        case "r":
        square.style.background = "red"
    }
})
window.addEventListener("keydown", function(e){
    switch(e.key){
        case "g":
        square.style.background = "green"
    }
})
window.addEventListener("keydown", function(e){
    switch(e.key){
        case "b":
        square.style.background = "blue"
    }
})
window.addEventListener("keydown", function(e){
    switch(e.key){
        case "y":
        square.style.background = "yellow"
    }
})




document.getElementById("btn").onclick = function(){
    var list = document.createElement("li")
    list.textContent = document.getElementById("textInput").value
    console.log(list)
    var outPut = document.getElementById("out")
    outPut.append(list)
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


// document.getElementById("btn").onclick = function(){
//     const li = document.createElement("li")
//     // want to grab the input value and save it
//     li.textContent = document.getElementById("inputText").value
//     // console.log(li)
//     var outPut = document.getElementById("out")
//     outPut.append(li)
// }




