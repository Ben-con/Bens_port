// -----------------------summary hide start------------------------------------------

const summaryButtons = document.querySelectorAll(".view-summary");


summaryButtons.forEach(item => {
    item.addEventListener('click', e =>{
        if(e.target.classList.contains("summary-hide")){
            e.target.classList.remove("summary-hide");
            e.target.previousElementSibling.closest('.hide').classList.add("non-hide");
            e.target.previousElementSibling.closest('.hide').classList.remove('hide');
            e.target.textContent = "Hide summary";
        }else{
            e.target.previousElementSibling.closest('.non-hide').classList.add("hide");
            e.target.classList.add("summary-hide");
            e.target.textContent = "Click to view summary";
        }
    });
});
// -----------------------summary hide end------------------------------------------

// -----------------------JavaScript Demo start------------------------------------------

const javascriptExample1 = document.querySelector("#javascript-demo-ex1");
const javascriptExample2 = document.querySelector("#javascript-demo-ex2");
const javascriptExample3 = document.querySelector("#javascript-demo-ex3");
const javascriptExample4 = document.querySelector(".javascript-demo-ex4");
const javascriptExample5 = document.querySelector("#javascript-demo-ex5");
const javascriptExample6 = document.querySelector("#javascript-demo-ex6");
const javascriptExample7 = document.querySelector("#javascript-demo-ex7");
const javascriptExample8 = document.querySelector("#javascript-demo-ex8");
const javascriptExample9 = document.querySelector("#javascript-demo-ex9");
const javascriptDemoPar = document.querySelector("#javascript-demo-p");
const javascriptDemo = document.querySelector("#javascript-demo");
if(javascriptDemo){
javascriptDemo.addEventListener("click",e => {
    if(e.target.classList.contains("javascript-demo-changeme")){
        javascriptDemoPar.textContent = "JavaScript is amazing you can you can change almost everying on a webpage with it. Just look at the navigation bar";
        setTimeout(() => { javascriptExample1.textContent = "Like me",javascriptExample1.classList.add("javascript-demo-class"); }, 4000); 
        setTimeout(() => {  javascriptExample2.textContent = "And me",javascriptExample2.classList.add("javascript-demo-class"); }, 5000); 
        setTimeout(() => {  javascriptExample3.textContent = "Also me",javascriptExample3.classList.add("javascript-demo-class"); },6000); 
        setTimeout(() => {  javascriptExample4.textContent = "Click me",javascriptExample4.classList.add("javascript-demo-class"); }, 7000); 
        setTimeout(() => {  javascriptExample5.textContent = "Even in here",javascriptExample5.classList.add("javascript-demo-class"); }, 9000); 
        setTimeout(() => {  javascriptExample6.textContent = "you can change",javascriptExample6.classList.add("javascript-demo-class"); }, 10000);  
        setTimeout(() => {  javascriptExample7.textContent = "everything",javascriptExample7.classList.add("javascript-demo-class"); }, 11000);  
        setTimeout(() => {   javascriptExample8.textContent = "Click the",javascriptExample8.classList.add("javascript-demo-class"); }, 12000); 
        setTimeout(() => {   javascriptExample9.textContent = "Button again",javascriptExample9.classList.add("javascript-demo-class"); }, 13000); 
        setTimeout(() => {  javascriptDemo.textContent = "Click me again!"; }, 14000); 
        javascriptDemo.classList.remove("javascript-demo-changeme");
        javascriptDemo.classList.add("javascript-demo-changeme2");
    }else if(e.target.textContent === "Click me again!"){
        javascriptExample1.textContent = "Home",javascriptExample1.classList.remove("javascript-demo-class");
        javascriptExample2.textContent = "About me",javascriptExample2.classList.remove("javascript-demo-class");
        javascriptExample3.textContent = "Contact me",javascriptExample3.classList.remove("javascript-demo-class");
        javascriptExample4.textContent = "Projects",javascriptExample4.classList.remove("javascript-demo-class");
        javascriptExample5.textContent = "Web App",javascriptExample5.classList.remove("javascript-demo-class");
        javascriptExample6.textContent = "Employee Directory",javascriptExample6.classList.remove("javascript-demo-class");
        javascriptExample7.textContent = "Web Form",javascriptExample7.classList.remove("javascript-demo-class");
        javascriptExample8.textContent = "Photo Gallery",javascriptExample8.classList.remove("javascript-demo-class");
        javascriptExample9.textContent = "Wheel of Success",javascriptExample9.classList.remove("javascript-demo-class");
        javascriptDemoPar.textContent = "As you can see java script is a very powerful tool. Click the button one more time to switch everything back to normal!";
        javascriptDemo.textContent ="Click me one more time";
        javascriptDemo.classList.remove("javascript-demo-changeme2");
    }else if(javascriptDemo.textContent === "Click me one more time"){
        javascriptDemo.classList.add("javascript-demo-changeme");
        javascriptDemoPar.textContent = "Click below to see an amazing example of the wonderful tool JavaScript";
        javascriptDemo.textContent = "Click me!";
    }
});
}
// -----------------------Javascript Demo End------------------------------------------
// -----------------------nav readmore Start------------------------------------------
javascriptExample7.addEventListener("click", () =>{
    projectsUnhide.classList.add("more");
        projectsUnhide.classList.remove("un-hide");
        projectsUnhide.textContent = "Click to view less Projects";
        projectHide.classList.remove("hide");
});

javascriptExample8.addEventListener("click", () =>{
    projectsUnhide.classList.add("more");
        projectsUnhide.classList.remove("un-hide");
        projectsUnhide.textContent = "Click to view less Projects";
        projectHide.classList.remove("hide");
});

javascriptExample9.addEventListener("click", () =>{
    projectsUnhide.classList.add("more");
        projectsUnhide.classList.remove("un-hide");
        projectsUnhide.textContent = "Click to view less Projects";
        projectHide.classList.remove("hide");
});

const firstPortMore = document.querySelector('#first-port-more');

firstPortMore.addEventListener("click", () =>{
    projectsUnhide.classList.add("more");
        projectsUnhide.classList.remove("un-hide");
        projectsUnhide.textContent = "Click to view less Projects";
        projectHide.classList.remove("hide");
});
// -----------------------nav readmore End------------------------------------------


// -----------------------Css Demo start------------------------------------------
const cssDemo = document.querySelector(".css-demo");
const cssDemoPar = document.querySelector(".css-demo-p");
const cssDemoTitle = document.querySelector(".css-demo-title");
const cssDemoBody = document.querySelector(".css-demo-body");
if(cssDemo){
cssDemo.addEventListener("click", () =>{
    if(cssDemo.id === "css-demo-start"){
        cssDemoPar.textContent = "CSS is a great tool that lets me change the look of everything that you are looking at on this webpage!";
        cssDemoPar.style.color = "red";
        cssDemoTitle.style.color = "red";
        cssDemoBody.style.borderRadius = "100%";
        cssDemoBody.style.backgroundColor = "#313639";
        cssDemo.textContent = "Click me again!";
        cssDemo.id = "css-demo-end";
    }else{
        cssDemoTitle.style.color = "white";
        cssDemoPar.style.color = "white";
        cssDemoBody.style.backgroundColor = "#fbc53f";
        cssDemoBody.style.borderRadius = "1em";
        cssDemo.textContent = "Click me!";
        cssDemoPar.textContent = "Without CSS everything on this webpage would be all out of center as well as being very boring!";
        cssDemo.id = "css-demo-start";
    }
});
}
// -----------------------Css Demo end------------------------------------------

// -----------------------HTML Demo start------------------------------------------
const htmlDemo = document.querySelector(".html-demo");
const htmlDemoPar = document.querySelector(".html-demo-p");
const selectAll = document.getElementsByTagName("*");
if(htmlDemo){
htmlDemo.addEventListener("click",e =>{
    if(e.target.classList.contains("not-red")){
        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].classList.add("red-border");
          }
       htmlDemo.classList.remove("not-red");
       htmlDemo.textContent="Click to turn it back";
       htmlDemoPar.textContent = "All you have to do is click the button again to turn the the red borders off again!";

    }else{
        for (let i = 0; i < selectAll.length; i++) {
            selectAll[i].classList.remove("red-border");
          }
        htmlDemo.classList.add("not-red") ;
        htmlDemoPar.textContent = "Click below to put a red border around everything on the webpage";
        htmlDemo.textContent="Click me!";
    }
});
}
// -----------------------HTML Demo end------------------------------------------

// -----------------------See more projects start------------------------------------------
const projectsUnhide = document.querySelector(".un-hide");
const projectHide = document.querySelector(".hide");
if(projectsUnhide){
    
    projectsUnhide.addEventListener("click",e =>{
        if(e.target.classList.contains("un-hide")){
            projectsUnhide.classList.add("more");
            projectsUnhide.classList.remove("un-hide");
            projectsUnhide.textContent = "Click to view less Projects";
            projectHide.classList.remove("hide");
        }else{
            projectsUnhide.classList.remove("more");
            projectHide.classList.add("hide");
            projectsUnhide.classList.add("un-hide");
            projectsUnhide.textContent = "Click to view more Projects";
        }
    });
}
// -----------------------See more projects end------------------------------------------
// -----------------------rotate cube start------------------------------------------
const cube = document.querySelector(".exp-cube");

if (cube) {
    const eduBut1 = document.querySelector(".edu-but-1");
    const eduBut2 = document.querySelector(".edu-but-2");
    const eduBut3 = document.querySelector(".edu-but-3");
    const eduBut4 = document.querySelector(".edu-but-4");
    const allEdu = document.querySelectorAll('.edu-button');
    
    eduBut1.addEventListener("click", () => {
        cube.style.transform = "rotateX(90deg)";
        allEdu.forEach(item => {
            item.classList.remove("edu-button-active");
        });
        eduBut1.classList.add('edu-button-active');
    });
    eduBut2.addEventListener("click", () => {
        cube.style.transform = "rotateX(-90deg)";
        allEdu.forEach(item => {
            item.classList.remove("edu-button-active");
        });
        eduBut2.classList.add('edu-button-active');
    })
    eduBut3.addEventListener("click", () => {
        cube.style.transform = "rotatey(-90deg)";
        allEdu.forEach(item => {
            item.classList.remove("edu-button-active");
        });
        eduBut3.classList.add('edu-button-active');
    })
    eduBut4.addEventListener("click", () => {
        cube.style.transform = "rotatey(90deg)";
        allEdu.forEach(item => {
            item.classList.remove("edu-button-active");
        });
        eduBut4.classList.add('edu-button-active');
    })
    document.addEventListener('click', e => {
        let clickedOutside = true;
  
        e.path.forEach(item => {
          if (!clickedOutside)
            return;
  
          if (item.className === 'edu-button-container')
            clickedOutside = false;
        });
  
        if (clickedOutside){
            cube.style.transform = "rotatey(0deg)";
            cube.style.transform = "rotateX(0deg)";
            allEdu.forEach(item => {
                item.classList.remove("edu-button-active");
            });

        }
          
      });
      
}
// -----------------------rotate cube end------------------------------------------

// -----------------------Sub page goals Start------------------------------------------
const goTo = document.querySelector(".go-to-goals-h3")
const goBack = document.querySelector(".return-h3")
const subPageParentMiddle = document.querySelector(".sub-page-parent-middle")
const goals = document.querySelector(".goals-container")
const appearAni = document.querySelector(".goals-parent")

goTo.addEventListener("click",()=>{
    subPageParentMiddle.style.opacity = "0";
    subPageParentMiddle.style.display = "none";
    goals.style.display = "flex"
    goals.style.opacity ="1"
    setTimeout(()=>{appearAni.style.opacity="1"},1000);

})
goBack.addEventListener('click',()=>{
    subPageParentMiddle.style.display ="flex"
    goals.style.display = "none"
})
console.log(goals)







// -----------------------Sub page goals end------------------------------------------




// -----------------------Svg Hovers Start------------------------------------------

const svgImg1 = document.querySelector(".svg-1");
const svgImg2 = document.querySelector(".svg-2");
const svgImg3 = document.querySelector(".svg-3");
const svgImg4 = document.querySelector(".svg-4");
const svgImg5 = document.querySelector(".svg-5");
const svgLi1 = document.querySelector(".contact-li-1");
const svgLi2 = document.querySelector(".contact-li-2");
const svgLi3 = document.querySelector(".contact-li-3");
const svgLi4 = document.querySelector(".contact-li-4");
const svgLi5 = document.querySelector(".contact-li-5");

svgLi1.addEventListener("mouseover",() =>{
    svgImg1.classList.add("facebook-svg");
});
svgLi1.addEventListener("mouseout",() =>{
    svgImg1.classList.remove("facebook-svg");
});


svgLi2.addEventListener("mouseover",() =>{
    svgImg2.classList.add("github-svg");
});
svgLi2.addEventListener("mouseout",() =>{
    svgImg2.classList.remove("github-svg");
});

svgLi3.addEventListener("mouseover",() =>{
    svgImg3.classList.add("instagram-svg");
});
svgLi3.addEventListener("mouseout",() =>{
    svgImg3.classList.remove("instagram-svg");
});

svgLi4.addEventListener("mouseover",() =>{
    svgImg4.classList.add("twitter-svg");
});
svgLi4.addEventListener("mouseout",() =>{
    svgImg4.classList.remove("twitter-svg");
});

svgLi5.addEventListener("mouseover",() =>{
    svgImg5.classList.add("gmail-svg");
});
svgLi5.addEventListener("mouseout",() =>{
    svgImg5.classList.remove("gmail-svg");
});



// -----------------------Svg Hovers End------------------------------------------
// -----------------------CSS Animtion Hide Start------------------------------------------

const openingDiv = document.querySelector(".opening-div");
const openingDivTop = document.querySelector(".opening-top");
const openingDivBottom = document.querySelector(".opening-bottom");
const openingDivImgDiv = document.querySelector(".opening-img-div");
const openingDivImg = document.querySelector(".opening-img");
if(openingDiv){
function hideAnimation(){
    openingDiv.classList.add("opening-hide");
    openingDivBottom.classList.add("opening-hide");
    openingDivImg.classList.add("opening-hide");
    openingDivTop.classList.add("opening-hide");
    openingDivImgDiv.classList.add("openingDivImgDiv");
}

setTimeout(hideAnimation,2900);
}




// -----------------------CSS Animtion Hide End------------------------------------------


