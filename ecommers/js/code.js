

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".manu-close-open").addEventListener("click",function(){

        document.querySelector(".mobile-menu").style.width="100%";
    });

    document.querySelector(".menu-close-btn").addEventListener("click",function(){

        document.querySelector(".mobile-menu").style.width="0";
    });

 
    document.querySelector(".search-icon").addEventListener("click",function(){

        document.querySelector(".search-drower").style.width="50%";
    });
     
    
    document.querySelector(".drower-close").addEventListener("click",function(){

        document.querySelector(".search-drower").style.width="0";
    });

    document.querySelector(".cart-icon").addEventListener("click",function(){
        document.querySelector(".item-cart").style.width="400px";
    })

    document.querySelector(".cart-close").addEventListener("click",function(){

        document.querySelector(".item-cart").style.width="0";
    });

    document.querySelector(".cart-remove").addEventListener("click",function(){
        document.querySelector(".cart-list").style.display="none";
    })
    document.querySelector(".cart-remove-2").addEventListener("click",function(){
        document.querySelector(".cart-list-2").style.display="none";
    })


    
    AOS.init({
        offset: 100, // Adjust this value to change when the animation triggers
        duration: 500, // Duration of the animation (in ms)
        easing: 'ease-in-out', // Easing function for the animation
        once: true // Only animate an element once, even if it scrolls in and out of view
    });
    
});


