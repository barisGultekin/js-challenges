function checkPalindrome(){

    let text = document.getElementById("userInput").value;
    let result = true;
    let leftMid = 0, rightMid = 0;

    if(text.length % 2 == 0){
        leftMid = text.length/2 - 1;
        rightMid = text.length/2;
    }
    else{
        leftMid = text.length/2 - 1.5;
        rightMid = text.length/2 + 0.5;
    }

    console.log("leftMid = " + leftMid + "  rightMid = " + rightMid);

    for(let i = leftMid, j = rightMid; i >= 0 ; i--, j++){
        // console.log("text[" + i + "] = " + text[i] + "  text[" + j + "] = " + text[j]);
        if(text[i] != text[j]){
            result = false;
        }
    }

    result == true ? document.getElementById("palindromeStatus").innerHTML = "Yes, it is!" :  document.getElementById("palindromeStatus").innerHTML = "No, it isn't.";
}