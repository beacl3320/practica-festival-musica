document.addEventListener('DOMContentLoaded', function() {
    navApp();
});

function navApp() {
    navegacionFija();
};

function navegacionFija() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {
        
        if ( sobreFestival.getBoundingClientRect().top <0 ){
            /* console.log('ya pasamaos el elemento'); */
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            /* console.log('aun no...') */
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    })
}