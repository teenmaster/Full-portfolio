const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-Btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-Btn', '')
            this.className += 'active-Btn';
           }
        )
    }
}

PageTransitions();