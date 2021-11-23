let lfbutton = document.querySelector(".left-click");
    let rgbutton = document.querySelector(".right-click");
    let slides = document.querySelectorAll(".slides");
    let btn = document.querySelector(".menu");
    let navigate = document.querySelector(".navigation");
    let heading = document.querySelector("h1");
    let n = 0;
    slideShow(n);
    function slideShow(n) {
      for(let i = 0; i<slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[n].style.display = "block";
    }

    lfbutton.addEventListener("click",function(){
      n--;
      if(n<0){
        n=slides.length-1;
        slideShow(n);
      }else {
        slideShow(n);
      }
    });

    rgbutton.addEventListener("click",function(){
      n++;
      if(n>slides.length-1){
        n=0;
        slideShow(n);
      }else {
        slideShow(n);
      }
    });

    btn.addEventListener("click", function(){
      btn.classList.toggle("close");
    })

    btn.addEventListener('click',function(){
      heading.classList.toggle("closeHeading");
      navigate.classList.toggle("navigate");
    })
