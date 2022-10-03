const mq = window.matchMedia("(max-width: 768px)");


if (mq.matches){
    const btn = document.getElementById("button");
    const mnav= document.getElementsByClassName("header__nav")[0];
    const menu_icon = document.querySelector(".menu-icon");
    btn.addEventListener("click", function(){
        if(mnav.style.display != "block"){
            mnav.style.display = "block";
            menu_icon.style.backgroundColor = "transparent";
            menu_icon.style.transform = "rotate(720deg)";
            document.documentElement.style.setProperty('--before', "translate(-20px,-10px) rotate(45deg)");
            document.documentElement.style.setProperty('--after', "translate(-20px,-10px) rotate(-45deg)");
        }
        else{
            mnav.style.display = "none";
            menu_icon.style.backgroundColor = "white";
            menu_icon.style.transform = "rotate(0deg)";
            document.documentElement.style.setProperty('--before', "translate(-20px,-12px)");
            document.documentElement.style.setProperty('--after', "translate(-20px,12px)");
        }
    });
}

else{
    document.querySelector(".header__nav").style.display = "block";
}