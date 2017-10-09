function main() {
    var N = parseInt(readLine());
    if(N%2 == 0 && N < 5){
        console.log("Not Weird");    
    }else if(N%2 == 0 && N <= 20 && N > 6){
        console.log("Weird");   
    }else if(N%2 == 0 && N > 20){
        console.log("Not Weird");
    }else if(N%2 == 1){
        console.log("Weird")
    }
    

}