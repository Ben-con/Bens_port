
const htmlDemo = document.querySelector(".html-demo")
const htmlDemoPar = document.querySelector(".html-demo-p")
const selectAll = document.getElementsByTagName("*");

// help here please.
htmlDemo.addEventListener("click",e =>{
    if(e.target.classList.contains("not-red")){
        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].classList.add("red-border")
          }
       htmlDemo.classList.remove("not-red")
       htmlDemoPar.textContent = "All you have to do is click the button again to turn the the red borders off again!"

    }else{
        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].classList.remove("red-border")
          }
        htmlDemo.classList.add("not-red") 
        htmlDemoPar.textContent = "Click below to put a red border around everything on the webpage"
        
    }
})














const projectsUnhide = document.querySelector(".un-hide");
const projectHide = document.querySelector(".hide")

projectsUnhide.addEventListener("click",e =>{
    if(e.target.classList.contains("un-hide")){
        projectsUnhide.classList.add("more");
        projectsUnhide.classList.remove("un-hide")
        projectsUnhide.textContent = "Click to view less Projects";
        projectHide.classList.remove("hide")
    }else{
        projectsUnhide.classList.remove("more");
        projectHide.classList.add("hide")
        projectsUnhide.classList.add("un-hide")
        projectsUnhide.textContent = "Click to view more Projects";
    }
})


