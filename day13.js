class MyBook extends Book {
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    constructor(title, author, price){
        super(title, author, price);
        this.price = price;
    }
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
        display(title, author, price){
            console.log("Title: " + this.title);
            console.log("Author: " + this.author);
            console.log("Price: " + this.price);
        }
// End class
}