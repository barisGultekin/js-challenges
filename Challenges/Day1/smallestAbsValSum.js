function findSmallestElement() {

    var text = document.getElementById('userInput').value;
    const s = text.split(" ");
    let a = [];
    a.length = s.length;
    for(let i = 0 ; i < s.length ; i++){
        a[i] = parseInt(s[i]);
    }

    let tempSum = 0;
    let sum = 0;
    let val = 0;

    console.log("\n\n");
    for(let i = 0 ; i < a.length ; i++){

        for(let j = 0 ; j < a.length ; j++){
            tempSum += Math.abs(a[j] - a[i]);
        }

        if(i != 0){
            if(tempSum < sum){
                val = a[i];
                sum = tempSum;
            }
        }
        else{
            val = a[i];
            sum = tempSum;
        }
        console.log("a[" + i +"] = " + a[i] + ", tempSum = " + tempSum + ", sum = " + sum);
        tempSum = 0;
    }

    document.getElementById("resultTag").innerHTML = val;
}