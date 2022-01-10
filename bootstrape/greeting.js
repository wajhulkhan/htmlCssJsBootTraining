function hello(){
    alert("Hello javascript !!!!!");
    console.log("This is the console message!!!")
}

function printData(){
    let p = prompt("Plaese enter your name","place name");
    if(p!=null){
        console.log(p);
        document.getElementById("demo").innerHTML="hello "+p+"how are you today ?";
    }
}