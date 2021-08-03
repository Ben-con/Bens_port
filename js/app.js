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


