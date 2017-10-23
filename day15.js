	this.insert=function(head,data){
        if(null == head){
        head = new Node(data);
        }else{
            var start = head; 
            while(null !== start.next){
                start = start.next;
            }
            start.next = new Node(data);
        }
        return head;
    };
