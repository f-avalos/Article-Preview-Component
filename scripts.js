const btnToggleDesign = document.querySelector('.footer .btn-share label');

const btnToggle = document.querySelector('.checkbox-btn input[type="checkbox"]');

const shareContent = document.querySelector('.share-content');

btnToggle.addEventListener('change', (event) => {

    if(window.innerWidth <= 651) {
        shareContent.style.visibility = 'visible';
        if (event.target.checked) {
            shareContent.style.bottom = '0';
            btnToggleDesign.style.backgroundBlendMode = 'screen';
            btnToggleDesign.style.backgroundColor = 'hsl(214, 17%, 51%)';

        } else {
            shareContent.style.bottom = '-80px';

            btnToggleDesign.style.backgroundColor = 'hsl(210, 46%, 95%)';
            btnToggleDesign.style.backgroundBlendMode = 'multiply';
        }
    }else{
        if (event.target.checked) {
            shareContent.classList.add('visible-share-content');
            btnToggleDesign.style.backgroundBlendMode = 'screen';
            btnToggleDesign.style.backgroundColor = 'hsl(214, 17%, 51%)';

        } else {
            shareContent.classList.remove('visible-share-content');
            btnToggleDesign.style.backgroundColor = 'hsl(210, 46%, 95%)';
            btnToggleDesign.style.backgroundBlendMode = 'multiply';
        }
    }
})