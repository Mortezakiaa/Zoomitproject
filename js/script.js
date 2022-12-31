document.getElementById("zoomit-a").addEventListener("click" , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("zoomit-menu");
    let icon = document.getElementById("icon");
   if(menu.style.opacity == "1"){
          menu.style.opacity = "0";
          menu.style.zIndex = "0";
          menu.classList.remove("menu-vis"); 
          icon.classList.remove("caret-animate-vis");       
   }else{
         menu.style.opacity = "1";
         menu.style.zIndex = "10";
         menu.classList.add("menu-vis");
         icon.classList.add("caret-animate-vis");
     }
     document.addEventListener("click" , (e)=>{
        if(e.target.id != "zoomit-a"){
            menu.style.opacity = "0";
            menu.style.zIndex = "0";
            menu.classList.remove("menu-vis"); 
            icon.classList.remove("caret-animate-vis");
        }
     })
});

document.getElementById("tech-a").addEventListener('click' , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("tech-menu");
    let icon = document.getElementById("icon-1");
    if(menu.style.opacity != "1"){
        menu.style.opacity = "1";
        menu.style.zIndex = "10";
        menu.classList.add("menu-vis"); 
        icon.classList.add("caret-animate-vis");       
    }else{
       menu.style.opacity = "0";
       menu.style.zIndex = "0";
       menu.classList.remove("menu-vis");
       icon.classList.remove("caret-animate-vis");
    }
    document.addEventListener("click" , (e)=>{
        if(e.target.id != "tech-a"){
            menu.style.opacity = "0";
            menu.style.zIndex = "0";
            menu.classList.remove("menu-vis"); 
            icon.classList.remove("caret-animate-vis");
        }
     })
});

document.getElementById("check-a").addEventListener('click' , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("check-menu");
    let icon = document.getElementById("icon-2");
    if(menu.style.opacity != "1"){
       menu.style.zIndex = "10";
       menu.style.opacity = "1";
        menu.classList.add("menu-vis"); 
        icon.classList.add("caret-animate-vis");       
    }else{
       menu.style.opacity = "0";
       menu.style.zIndex = "0";
       menu.classList.remove("menu-vis");
       icon.classList.remove("caret-animate-vis");
    }
    document.addEventListener("click" , (e)=>{
        if(e.target.id != "check-a"){
            menu.style.opacity = "0";
            menu.style.zIndex = "0";
            menu.classList.remove("menu-vis"); 
            icon.classList.remove("caret-animate-vis");
        }
     })
});

document.getElementById("video-a").addEventListener('click' , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("video-menu");
    let icon = document.getElementById("icon-3");
    if(menu.style.opacity != "1"){
       menu.style.zIndex = "10";
       menu.style.opacity = "1";
        menu.classList.add("menu-vis"); 
        icon.classList.add("caret-animate-vis");       
    }else{
       menu.style.opacity = "0";
       menu.style.zIndex = "0";
       menu.classList.remove("menu-vis");
       icon.classList.remove("caret-animate-vis");
    }
    document.addEventListener("click" , (e)=>{
        if(e.target.id != "video-a"){
            menu.style.opacity = "0";
            menu.style.zIndex = "0";
            menu.classList.remove("menu-vis"); 
            icon.classList.remove("caret-animate-vis");
        }
     })
});

document.getElementById("science-a").addEventListener('click' , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("science-menu");
    let icon = document.getElementById("icon-4");
    if(menu.style.opacity != "1"){
       menu.style.zIndex = "10";
       menu.style.opacity = "1";
        menu.classList.add("menu-vis"); 
        icon.classList.add("caret-animate-vis");       
    }else{
       menu.style.opacity = "0";
       menu.style.zIndex = "0";
       menu.classList.remove("menu-vis");
       icon.classList.remove("caret-animate-vis");
    }
    document.addEventListener("click" , (e)=>{
        if(e.target.id != "science-a"){
            menu.style.opacity = "0";
            menu.style.zIndex = "0";
            menu.classList.remove("menu-vis"); 
            icon.classList.remove("caret-animate-vis");
        }
     })
});

document.getElementById("work-a").addEventListener('click' , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("work-menu");
    let icon = document.getElementById("icon-5");
    if(menu.style.opacity != "1"){
       menu.style.zIndex = "10";
       menu.style.opacity = "1";
        menu.classList.add("menu-vis"); 
        icon.classList.add("caret-animate-vis");       
    }else{
       menu.style.opacity = "0";
       menu.style.zIndex = "0";
       menu.classList.remove("menu-vis");
       icon.classList.remove("caret-animate-vis");
    }
    document.addEventListener("click" , (e)=>{
        if(e.target.id != "work-a"){
            menu.style.opacity = "0";
            menu.style.zIndex = "0";
            menu.classList.remove("menu-vis"); 
            icon.classList.remove("caret-animate-vis");
        }
     })
});

document.getElementById("zoom-a").addEventListener('click' , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("zoom-menu");
    let icon = document.getElementById("icon-6");
    if(menu.style.opacity != "1"){
       menu.style.zIndex = "10";
       menu.style.opacity = "1";
        menu.classList.add("menu-vis"); 
        icon.classList.add("caret-animate-vis");       
    }else{
       menu.style.opacity = "0";
       menu.style.zIndex = "0";
       menu.classList.remove("menu-vis");
       icon.classList.remove("caret-animate-vis");
    }
    document.addEventListener("click" , (e)=>{
        if(e.target.id != "zoom-a"){
            menu.style.opacity = "0";
            menu.style.zIndex = "0";
            menu.classList.remove("menu-vis"); 
            icon.classList.remove("caret-animate-vis");
        }
     })
});

document.getElementById("zoomit-col-1").addEventListener("click" , ()=>{
    let div = document.getElementById("zoomit-col-1");
    let roti = document.getElementById("zoomit-icon");

    if(div.classList.contains("collapsed")){    
        div.classList.remove("bg-link");
        roti.classList.remove("rotate-icon");
    }else{
        div.classList.add("bg-link");
        roti.classList.add("rotate-icon");
    }
   
})

document.getElementById("tech-col-1").addEventListener("click" , ()=>{
    let div = document.getElementById("tech-col-1");
    let roti = document.getElementById("tech-icon");

    if(div.classList.contains("collapsed")){    
        div.classList.remove("bg-link");
        roti.classList.remove("rotate-icon");
    }else{
        div.classList.add("bg-link");
        roti.classList.add("rotate-icon");
    }
})

document.getElementById("check-col-1").addEventListener("click" , ()=>{
    let div = document.getElementById("check-col-1");
    let roti = document.getElementById("check-icon");

    if(div.classList.contains("collapsed")){    
        div.classList.remove("bg-link");
        roti.classList.remove("rotate-icon");
    }else{
        div.classList.add("bg-link");
        roti.classList.add("rotate-icon");
    }
})

document.getElementById("video-col-1").addEventListener("click" , ()=>{
    let div = document.getElementById("video-col-1");
    let roti = document.getElementById("video-icon");

    if(div.classList.contains("collapsed")){    
        div.classList.remove("bg-link");
        roti.classList.remove("rotate-icon");
    }else{
        div.classList.add("bg-link");
        roti.classList.add("rotate-icon");
    }
})

document.getElementById("science-col-1").addEventListener("click" , ()=>{
    let div = document.getElementById("science-col-1");
    let roti = document.getElementById("science-icon");

    if(div.classList.contains("collapsed")){    
        div.classList.remove("bg-link");
        roti.classList.remove("rotate-icon");
    }else{
        div.classList.add("bg-link");
        roti.classList.add("rotate-icon");
    }
})

document.getElementById("work-col-1").addEventListener("click" , ()=>{
    let div = document.getElementById("work-col-1");
    let roti = document.getElementById("work-icon");

    if(div.classList.contains("collapsed")){    
        div.classList.remove("bg-link");
        roti.classList.remove("rotate-icon");
    }else{
        div.classList.add("bg-link");
        roti.classList.add("rotate-icon");
    }
})

document.getElementById("zoom-col-1").addEventListener("click" , ()=>{
    let div = document.getElementById("zoom-col-1");
    let roti = document.getElementById("zoom-icon");

    if(div.classList.contains("collapsed")){    
        div.classList.remove("bg-link");
        roti.classList.remove("rotate-icon");
    }else{
        div.classList.add("bg-link");
        roti.classList.add("rotate-icon");
    }
})

document.getElementById("btn-nav").addEventListener('click', ()=>{
    let btn = document.getElementById("btn-nav");
    let close = document.getElementById("close");
    let open = document.getElementById("open");
    if(btn.classList.contains("collapsed")){
        close.style.display = "none";
        open.style.display = "block";
    }else{
        close.style.display = "block";
        open.style.display = "none";
    }
})

document.getElementById("fa-search").addEventListener('click' , ()=>{
    let btncollapse = document.getElementById("btn-nav");
    let brand = document.getElementById("nav-menu");
    let icons = document.getElementById("icons-box");
    let input = document.getElementById("input-box");
    let maxsize = window.matchMedia("(max-width : 992px)");
    
    if(maxsize.matches){
        btncollapse.classList.add("d-none");
        brand.classList.add("d-none");
        icons.classList.add("d-none");
        input.classList.remove("d-none");
    } 
});

document.getElementById("close-input").addEventListener('click' , (e)=>{
    e.preventDefault();
    let btncollapse = document.getElementById("btn-nav");
    let brand = document.getElementById("nav-menu");
    let icons = document.getElementById("icons-box");
    let input = document.getElementById("input-box");
    
    btncollapse.classList.remove("d-none");
    brand.classList.remove("d-none");
    icons.classList.remove("d-none");
    input.classList.add("d-none");
});

document.getElementById("fa-search").addEventListener('click' , (e)=>{
    e.preventDefault();
    let input = document.getElementById("input-box");
    let wid = window.matchMedia("(min-width : 992px)");
    let searchicon = document.getElementById("fa-search");
    let closebtn = document.getElementById("close-input");
    if(wid.matches){            
            input.classList.remove("d-none");
            searchicon.style.visibility = "hidden";     
     } 
         closebtn.onclick = function(){
          searchicon.style.visibility = "visible";
        }
})

document.getElementById("share-btn").addEventListener('click' , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("share-menu");
    if(menu.classList.contains("share-overlay")){
        menu.classList.remove("share-overlay");
    }else{
        menu.classList.add("share-overlay");
    }
    document.addEventListener("click" , (e)=>{
        e.preventDefault();
        if(e.target.id != "share-icon" && e.target.id != "share-input" && e.target.id != "share-button" && e.target.id != "share-span" && e.target.id != "social-media" && e.target.id != "share-content"){
            menu.classList.remove("share-overlay");
        }
     })
})

document.getElementById("user-btn").addEventListener("click" , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("user-account");
    let over = document.querySelector("#over1");
    setTimeout(() => {
        menu.classList.remove("d-none");
        over.classList.remove("d-none");
        document.body.style.overflow = "hidden";
    }, 500);
})

document.getElementById("btn-close-user").addEventListener('click' , (e)=>{
    e.preventDefault();
    let useraccount = document.getElementById("user-account");
    let over = document.querySelector("#over1");
    useraccount.classList.add("d-none");
    over.classList.add("d-none");
    document.body.style.overflow = "visible";
})

document.getElementById("over1").addEventListener("click" , ()=>{
    let useraccount = document.getElementById("user-account");
    let over = document.querySelector("#over1");
    useraccount.classList.add("d-none");
    over.classList.add("d-none");
    document.body.style.overflow = "visible";
})

document.getElementById("btn-top").addEventListener('click' , ()=>{
    document.body.scrollIntoView({behavior : 'smooth' , block : 'start'});
})

document.addEventListener('scroll', function() {
    let btn = document.getElementById("btn-top");
    if(window.scrollY >= "160"){
        btn.classList.remove("fade");
    } else{
        btn.classList.add("fade");
     }
});

document.addEventListener('scroll' , ()=>{
    let nav = document.getElementById("nav-py");
    let wid = window.matchMedia("(min-width : 992px)");
    if(window.scrollY >= "170" && wid.matches){
        nav.classList.add("navbar-scroll");
    }else{
        nav.classList.remove("navbar-scroll");  
    }
})

document.addEventListener('scroll' , ()=>{
    let rightside = document.getElementById("ads-right");
    let leftside = document.getElementById("ads-left");
    if(window.scrollY >= "3500"){
       rightside.classList.add("ads-right");
       leftside.classList.add("ads-left");
    }
    if(window.scrollY >= "5250"){
        rightside.classList.remove("ads-right");
        leftside.classList.remove("ads-left");
        rightside.classList.add("ads-top");
        leftside.classList.add("ads-top");
    }
    if(window.scrollY <= "1301"){
        rightside.classList.remove("ads-top");
        leftside.classList.remove("ads-top");
        rightside.classList.add("ads-right");
        leftside.classList.add("ads-left");
    }
})



