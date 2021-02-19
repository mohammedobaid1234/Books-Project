let books = [
    {
       title: "book1",
       author: "John Doe",
       image: "https://upload.wikimedia.org/wikipedia/en/e/e2/IMG_Academy_Logo.svg"
    },
    {
      title: "book2",
      author: "John Doe",
    image: "https://img.com/bookimg.jpeg"
    },
    {
      title: "book2",
      author: "John Doe",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
    },
    {
      title: "book2",
      author: "John Doe",
    image: "https://img.com/bookimg.jpeg"
    },
    {
      title: "book6",
      author: "John Doe",
    image: "https://img.com/bookimg.jpeg"
    },
    

 ]



 let container =document.createElement('div');
 let clearFix = document.createElement('div');
 let book = document.createElement('div');
 let imge = document.createElement('img');
 let divI =document.createElement('div');
 let labI = document.createElement('label');
 let hI = document.createElement('h2');
 let divII =document.createElement('div');
 let labII = document.createElement('label');
 let hII = document.createElement('h2');
 let txt1 =document.createTextNode('Title : ');
 let txt2 =document.createTextNode('Auther : ');



 (function(){
 container.classList.add('conatiner');
 document.body.appendChild(container);
 clearFix.classList.add('clearFix');
 container.appendChild(clearFix);
 book.classList.add('book');
 book.appendChild(imge);
 book.appendChild(divI);
 book.appendChild(divII);
 divI.appendChild(labI);
 labI.appendChild(txt1);
 labII.appendChild(txt2);
 labI.appendChild(hI); 
 divII.appendChild(labII);
 labII.appendChild(hII);
 

})();

let buttons = document.createElement('div');
buttons.classList.add('buttons');
let add = document.createElement('button');
add.appendChild(document.createTextNode('Add book'));
//let delet = document.createElement('button');
//delet.appendChild(document.createTextNode('Delet book'));
buttons.appendChild(add);
// buttons.appendChild(delet);
document.body.appendChild(buttons);



 

(function InterF(){
      for(let i =0 ; i<books.length ; i++){
        let cloneNod = book.cloneNode(true);
        clearFix.before(cloneNod);
      }
     
      
     for(let j=0;j<books.length;j++){
        document.querySelector(`body > div > div:nth-child(${j+1}) > div:nth-child(2) > label > h2`) .appendChild(document.createTextNode( books[j].title));
        document.querySelector(`body > div > div:nth-child(${j+1}) > div:nth-child(3) > label > h2`).appendChild(document.createTextNode( books[j].author));
        document.querySelector(`body > div > div:nth-child(${j+1}) > img`).src = books[j].image;

     }
})();

let j = books.length-1;
add.addEventListener('click', function(){
  j++;
  let tit = prompt("Enter The Title OF Book");
  let auth = prompt('Enter The Name OF Auther OF Book');
  let img = prompt('Enter The Sorce OF img OF Book');
  ////////////////////////////////////////////
  books.push({
    title:tit,
    author:auth,
    image:img,
  })
 console.log(books);
 console.log(j);
 for(let i =j  ; i<books.length ; i++){
  let cloneNod = book.cloneNode(true);
  clearFix.before(cloneNod);
  document.querySelector(`body > div > div:nth-child(${i+1}) > div:nth-child(2) > label > h2`) .appendChild(document.createTextNode( books[i].title));
  document.querySelector(`body > div > div:nth-child(${i+1}) > div:nth-child(3) > label > h2`).appendChild(document.createTextNode( books[i].author));
  document.querySelector(`body > div > div:nth-child(${i+1}) > img`).src = books[i].image;
 }

});

/*
btn.addEventListener('click', function(){
  let clonBook= book.cloneNode(true);
  console.log(clonBook);
  let Title = prompt('Enter The Title of Book :');
  let x =document.createTextNode(Title);
  let Auther = prompt('Emter The Name of Auther of book : ');
  hII.appendChild(document.createTextNode(Auther));
  let imgLink = prompt('Emter The Link of Img of book : ');
  imge.src = imgLink;
  imge.alt = '...';
  container.removeChild(clearFix);
  labI.appendChild(document.createTextNode(Title));
  container.appendChild(clonBook);
  container.appendChild(clearFix);
  
})
*/



 

