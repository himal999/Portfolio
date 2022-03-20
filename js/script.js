const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls')// main div
const sectBtn = document.querySelectorAll('.control')//div
const allSections = document.querySelectorAll('.main-content')


//start of active btn deactive btn

// control btn active/deactive in javascript

// function PageTransitions(){
//     //button click active class
//     for(let i=0;i<sectBtn.length;i++){
//         sectBtn[i].addEventListener('click',function(){
//             let currentBtn = document.querySelectorAll('.active-btn')
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
//             this.className += 'active-btn'
//         })
//     }
// }

// PageTransitions();



// control btn active/deactive in jQuery


const controlBtn  = $('.control');

function pageTt(){
   
    for(let i=0;i<controlBtn.length;i++){
       
       $('.control').on("click",function(){
           
            let curr = $('.active-btn')
            curr.removeClass('active-btn')
            $(this).addClass('active-btn')
      
        });
    }

    //load content 
    
    $('.control-1').click(function(){
        $('#home').addClass('active')
        $('#home').removeClass('deactive')
        $('#about').addClass('deactive')
        $('#about').removeClass('active')
        $('#portfolio').addClass('deactive')
        $('#portfolio').removeClass('active')
        $('#blogs').addClass('deactive')
        $('#blogs').removeClass('active')
        $('#contact').addClass('deactive')
        $('#contact').removeClass('active')
    })

    $('.control-2').click(function(){
        $('#home').addClass('deactive')
        $('#home').removeClass('active')
        $('#about').addClass('active')
        $('#about').removeClass('deactive')
        $('#portfolio').addClass('deactive')
        $('#portfolio').removeClass('active')
        $('#blogs').addClass('deactive')
        $('#blogs').removeClass('active')
        $('#contact').addClass('deactive')
        $('#contact').removeClass('active')
    })
    $('.control-3').click(function(){
        $('#home').addClass('active')
        $('#home').removeClass('deactive')
        $('#about').addClass('deactive')
        $('#about').removeClass('active')
        $('#portfolio').addClass('active')
        $('#portfolio').removeClass('deactive')
        $('#blogs').addClass('deactive')
        $('#blogs').removeClass('active')
        $('#contact').addClass('deactive')
        $('#contact').removeClass('active')
    })
    $('.control-4').click(function(){
        $('#home').addClass('active')
        $('#home').removeClass('deactive')
        $('#about').addClass('deactive')
        $('#about').removeClass('active')
        $('#portfolio').addClass('deactive')
        $('#portfolio').removeClass('active')
        $('#blogs').addClass('active')
        $('#blogs').removeClass('deactive')
        $('#contact').addClass('deactive')
        $('#contact').removeClass('active')
    })
    $('.control-5').click(function(){
        $('#home').addClass('active')
        $('#home').removeClass('deactive')
        $('#about').addClass('deactive')
        $('#about').removeClass('active')
        $('#portfolio').addClass('deactive')
        $('#portfolio').removeClass('active')
        $('#blogs').addClass('deactive')
        $('#blogs').removeClass('active')
        $('#contact').addClass('active')
        $('#contact').removeClass('deactive')
    })

}


pageTt();


//end of active btn deactive btn

//
//
//
//
//
//
//
//