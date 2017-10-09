function processData(input) {
    //Enter your code here
    //String.fromCharCode(arrTwo[j]);
    var words = input.split('\n');
    var n = parseInt(words[0]);
    
    //console.log(words);
    //console.log(n);
    
    for(i = 0; i < n; i++){
       var arr = words[i + 1].split('');
       var arrTwo =[];
       var arrThree = [];
       var strTwo;
       var strThree;
       
        for(j = 0; j < arr.length; j ++){
            if (j % 2 == 0){
                arrTwo.push(arr[j]);
            }else{
                arrThree.push(arr[j]);
            }
        }
        strTwo = arrTwo.join("");
        strThree = arrThree.join("");
        console.log(strTwo + " " + strThree);
    }
    
    
}