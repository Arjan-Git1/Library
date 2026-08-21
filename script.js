const library = [];

document.getElementById('bookForm').style.display = 'none';
function Book(name, author,id,read){
    this.name = name;
    this.author = author;
    this.id = id;


}
let sample = new Book("Name of the Book","Author","Id(Random Generated)");
library.push(sample);
var addu =0;
function add(name, author, id){
    if(addu==0){
        addu=1;
    }
    else{
        addu=0;
    }
    if(addu==1){
        document.getElementById("add").innerHTML = "Close";
        document.getElementById('bookForm').style.display = '';
    }
    else{
        document.getElementById('bookForm').style.display = 'none';
        document.getElementById("add").innerHTML = "ADD BOOK";
    }
}

document.getElementById('submit').onclick = function(){
    event.preventDefault()
    name = document.getElementById('bookName').value;
    author = document.getElementById('bookAuthor').value;
    id = crypto.randomUUID()

    const book =  new Book(name,author,id);
    library.push(book);
}
function display(i){

        object = library[i];
        document.getElementById('cardTitle').innerHTML = object.name;
        document.getElementById('author').innerHTML = object.author;
        document.getElementById('id').innerHTML = object.id;
        document.getElementById("next").onclick = function() {
           if (i==library.length-1){
              display(0)
           }
           else{
               display(i + 1);
           }
    }
    document.getElementById("Remove").onclick = function(){
            remove(i)
    }
    function remove(i){
            library.splice(i,1);
            display(0);
    }

}
document.getElementById("add").addEventListener("click", add);
document.getElementById("display").addEventListener("click", function (){
    display(0)
});


