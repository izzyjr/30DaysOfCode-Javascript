class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    
        constructor (firstName, lastName, identification, scores){
        super(firstName, lastName, identification, scores);
        this.scores = scores;
        }
        
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        var final = 0;
        
        for(var i = 0; i < this.scores.length; i++){
            final = final + this.scores[i];   
        }
        final = final/this.scores.length;
        if(final >= 90){
            return 'O';
        }else if(final >= 80){
            return 'E';
        }else if(final >= 70){
            return 'A';
        }else if(final >= 50 && final < 70){
            return 'P';
        }else if(final >= 40 && final < 55){
            return 'D';
        }else if(final < 40){
            return 'T';
        }
    }
}