function main() {
    var count = 0;
    var arr = [];
    var group = [];
    var results = 0;
    
    for(var i = 0; i < 6; i++){
       arr[i] = readLine().split(' ');
       arr[i] = arr[i].map(Number);
    }
    
    for(var j = 0; j < 4; j++){
        for(var k = 0; k < 4; k++){
            group[results] = arr[j][k] + arr[j][k + 1] + arr[j][k + 2]
                     + arr[j + 1][k + 1] + arr[j + 2][k] + arr[j + 2][k + 1]
                     + arr[j + 2][k + 2];
            results++;
        }
    }
    group.sort(function(a, b){
        return b - a;
  
    });
    console.log(group[0]);
    
    
    
    
    
    
    
        
//        for(var j = 0; j < 3; j++){
//            for(var k = 0; k < 3; k++){
//                count++;
//                if(count !== 4 && count !== 6){
//                 array.push(arr[j][k]);
//                }
//            }
//            var result = array.reduce(function(previousVal, currentVal) {
//                return previousVal + currentVal;
//            });
//        }
//        console.log(array);
//        console.log(result);
    
}