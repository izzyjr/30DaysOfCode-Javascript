class Calculator{
    
    
    power(n,p){
       
       
       try{
            if(n < 0 || p < 0)throw "n and p should be non-negative";
       }catch(error){
           return error;
       }
         return Math.pow(n,p); 
    }
    
    
    
    
    
    
    
    
    
}