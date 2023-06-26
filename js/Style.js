window.onscroll = () => {
    const header = document.querySelector('.navbar');
    const Y = window.scrollY

    if(Y > 350) {
        header.classList.add("navbar_fixed");
    }   else if (Y < 5) {
        header.classList.remove("navbar_fixed");
    }
    
}


//new 

$('.split-section__image').slick({
    dots:true,
    speed:1000,
    draggable:false
});





