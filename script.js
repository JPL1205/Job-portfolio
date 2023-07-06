const pageLoadEffect = (function(){
    const intro = document.querySelector('.intro');
    const me = document.querySelector('#me');
    window.addEventListener('load', function(){
        console.log(me);
        intro.classList.add('intro-transition-effect');
        me.classList.add('me-transition-effect')
    });

})();


const expand = (function(){
    const abilityWrapper = document.querySelectorAll('.ability-wrapper');
    const languages = document.querySelectorAll('.language');
    const expandIcon = document.querySelectorAll('.expand');

    abilityWrapper.forEach((a) => {
        a.clickCount = 0;
        a.addEventListener('click', ()=>{
            expand(a.id);
            a.clickCount++;

            if (a.clickCount === 2) {
                a.clickCount = 0; // Reset click count to 0
                resetDisplay(a.id);
            }
        })
    })

    function resetDisplay(id) {
        if(id === 'ability1'){
            languages[0].style.display = "none";
            expandIcon[0].classList.remove('rotate');
        }else if(id === 'ability2'){
            languages[1].style.display = "none";
            expandIcon[1].classList.remove('rotate');
        }else{
            languages[2].style.display = "none";
            expandIcon[2].classList.remove('rotate');
        }
    }

    const expand = (function(id){
        if(id === 'ability1'){
            languages[0].style.display = "flex";
            expandIcon[0].classList.add('rotate');
        }else if(id === 'ability2'){
            languages[1].style.display = "flex";
            expandIcon[1].classList.add('rotate');
        }else{
            languages[2].style.display = "flex";
            expandIcon[2].classList.add('rotate');
        }
    });

})();

