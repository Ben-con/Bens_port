
const selectAll = document.getElementsByTagName("*");
const htmlDemo = document.getElementsByClassName("html-demo")

htmlDemo.addEventListener("click",e =>{
    if(e.target.classList.contains("not-red")){
        htmlDemo.classList.remove("not-red")
       selectAll.style.border = "1px red solid"
    }else{
        htmlDemo.classList.add("not-red") 
        selectAll.style.border = "none"
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


