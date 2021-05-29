const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const bkg = ["linear-gradient(to right, #bc4e9c, #f80759)",
"linear-gradient(to right, #fc4a1a, #f7b733)","linear-gradient(to right, #2193b0, #6dd5ed)",
"linear-gradient(to right, #11998e, #38ef7d)"];

const options = {
    threshold:0.7
};
 


let observer= new IntersectionObserver(navCheck,options);
function navCheck(entries){
   entries.forEach(entry =>{
       console.log(entry);
       const className = entry.target.className;
       const activeAnchor = document.querySelector(`[data-page=${className}]`);
       const bkgIndex = entry.target.getAttribute("data-index");
       const coords = activeAnchor.getBoundingClientRect();
       const directions = {
           height : coords.height,
           width : coords.width,
           top :coords.top,
           left :coords.left
       };
       if(entry.isIntersecting){
           bubble.style.setProperty("left",`${directions.left}px`);
           bubble.style.setProperty("top",`${directions.top}px`);
           bubble.style.setProperty("height",`${directions.height}px`);
           bubble.style.setProperty("width",`${directions.width}px`);
           bubble.style.background = bkg[bkgIndex]; 
           
       }
   });
}


    
sections.forEach(section =>{
    observer.observe(section);
})





