function processData(input) {
    //Enter your code here
    var phoneBk = {};
    var arr = input.split("\n");
    var n = parseInt(arr[0]);
    
    //phonebook creation
    for(var i = 1; i < n + 1; i++){
        var ar = [];
        ar.push(arr[i]);
        ar = ar.toString('');
        ar = ar.split(" ");
        var name = ar[0];
        var number = ar[1];
        phoneBk[name] = number;
    }

    for(var j = 1 + n; j < arr.length; j++){
        var friend = arr[j];
            if(phoneBk[friend] === undefined){
                console.log("Not found");
            }else{
                console.log(`${friend}=${phoneBk[friend]}`);
            }
            
    }
    
    
    
//    for(var prop in phoneBk){
//        for(var j = 1 + n; j < arr.length; j++){
//            if(prop === arr[j]){
//                console.log(`${prop}=${phoneBk[prop]}`);
//                break;
//            }else if()
//        }
//    }
    
//    for(var j = 1 + n; j < arr.length; j++){
//        for(var prop in phoneBk){
//            if(arr[j] === prop){
//             console.log(`${prop}=${phoneBk[prop]}`);
//            }
//        }
//    }
    
       
    
    
} 
