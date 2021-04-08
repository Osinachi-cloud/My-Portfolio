const btt= document.getElementById("back-to-top");
let body = document.body,
docElem = document.documentElement,
offset = 100,
scrollPos, docHeight;

// docHeight = Math.max

 docHeight = Math.max(body.scrollHeight);
 if(docHeight != 'undefined'){
     offset = docHeight/4;
     console.log(offset)
 }
 window.addEventListener("scroll", function(event){
     scrollPos = body.scrollTop || docElem.scrollTop;
     btt.className = (scrollPos > offset) ? "visible" : "";
 })
// Add click event Listeners
btt.addEventListener("click", function(event){
    event.preventDefault()
})
