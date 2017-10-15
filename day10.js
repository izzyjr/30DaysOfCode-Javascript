function main() {
    var n = parseInt(readLine());
    var array = [];
    var arrayTwo = [];
    var num = 0;
    var max = 0;
    var binary = n.toString(2);
    var array = binary.split('');
    for(var i = 0; i < array.length; i++){
        if(array[i] == 1){
           num++;
           arrayTwo.push(num); 
        }else if(array[i] == 0){
           num = 0;
        }
    }
    arrayTwo.sort(function(a, b){
  return b - a;
  
});
    console.log(arrayTwo[0]);
}