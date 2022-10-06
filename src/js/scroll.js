document.addEventListener('DOMContentLoaded', function(){
    scrollApp();
});

function scrollApp() {
    scrollNav();
};


function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(sectionScroll);
            seccion.scrollIntoView({behavior: 'smooth'});
        })
    })
}
