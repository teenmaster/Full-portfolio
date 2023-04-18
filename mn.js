const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');



function PageTransitions(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-Btn');
            if(currentBtn.length > 0){
                currentBtn[0].classList = currentBtn[0].className.replace('active-Btn', '');
            }
            sectBtn[i].classList += ' active-Btn';

            let sectionToShow = document.querySelector('.' + sectBtn[i].getAttribute('data-id'));
            sectionToShow.classList.remove('hidden');

            for( let j = 0; j < sections.length; j++){
                if (sections[j] !== sectionToShow) {
                    sections[j].classList.add('hidden');
                }
            }
            this.className += '.active-Btn';
           }
        )
    }
}

PageTransitions();