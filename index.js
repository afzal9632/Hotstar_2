
let movies_div=document.getElementById("movie");
let list=document.getElementById("movie_detail");
let id;
async function searchMovies(){
try{
    const query=document.getElementById("q").value;
    const url=`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`;
    const res=await fetch(url);
    const data=await res.json();
    const movies=data.Search;
    return movies   
}
catch(err){
    console.log(err);
}
}
function appendMovies(data){
    movies_div.innerHTML=null;

    data.forEach(function (el){
        let btn=document.createElement("button");
        btn.style.width="100%";
        btn.style.padding="10px 0px";
        btn.style.backgroundColor="white";
        btn.style.color="red";
        btn.innerText=el.Title;
        //btn.onclick=detail;
       // console.log(p);
        movies_div.append(btn);
        btn.addEventListener("click", function () {
            show(el);
          });
    });
   
 }
async function main(){
    let data=await searchMovies();
   // console.log(data)
   if(data===undefined){
       alert("no record found");
       return false
   }
    appendMovies(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
      id=setTimeout(function(){
         func();
     },delay);
}
async function detail(){
     event.preventDefault();
     let data=await searchMovies();
    // console.log(data)
     appendMovie(data);
     
  };
//    function appendMovie(data){
//       list.innerHTML=null;
//        console.log(data);
//        console.log(btn.innerText)
//       data.forEach(function (el){
//           let box=document.createElement("div");
//           let p=document.createElement("p");
//           p.innerText=el.Title;
//           let poster=document.createElement("img");
//           poster.src=el.Poster;
//           let yor=document.createElement("p");
//           yor.innerText=el.Year;
//           let Type=document.createElement("p");
//           Type.innerText=el.Type;
//           let imdbID =document.createElement("p");
//           imdbID.innerText=el.imdbID;
//         box.append(p,yor,poster,Type,imdbID)
//           list.append(box);
         
//       });
    
//    }

 function show(el){

     let box=document.createElement("div");
          let p=document.createElement("p");
            p.innerText=el.Title;
          let poster=document.createElement("img");
          poster.src=el.Poster;
          let yor=document.createElement("p");
          yor.innerText=el.Year;
          let Type=document.createElement("p");
          Type.innerText=el.Type;
          let imdbID =document.createElement("p");
          imdbID.innerText=el.imdbID;
        box.append(p,yor,poster,Type,imdbID)
          list.append(box);
       
 }


 