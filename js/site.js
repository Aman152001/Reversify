//get the string from the user
function getString(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}
//Reverse the string
function reverseString(userString){

    let rev = [];
    for(let i=userString.length-1;i>=0;i--){
        rev +=  userString[i];
    }
    return rev;
}

//Display the reversed string to the user
function displayString(revString){
    document.getElementById("msg").innerHTML=`Your reversed string is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}