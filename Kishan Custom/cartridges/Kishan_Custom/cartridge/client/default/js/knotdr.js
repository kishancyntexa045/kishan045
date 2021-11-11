$("#viewLessOrMoreProducts").on('click',function(event) {
    
    var productsToHide = document.getElementsByClassName("productToHide");
    const bTop = document.querySelector('#viewLessOrMoreProducts').offsetTop;
    if (this && event) {
        event.preventDefault();
        const action = this.getAttribute('data-action');
        for (var i = 0; i < productsToHide.length; i++) {
            if (action === 'hide') {
                productsToHide[i].style.display = "none";
            } else {
                productsToHide[i].style.display = "flex";
            }
        }
        if (action === 'hide') {
            this.setAttribute('data-action', 'show');
            this.innerText = 'View More';
            setTimeout(() => {
                const top = document.querySelector('#viewLessOrMoreProducts').offsetTop;
                window.scroll({
                    top: top - 300,
                    behavior: 'smooth',
                });
            }, 100);
        } else {
            this.setAttribute('data-action', 'hide');
            this.innerText = 'View Less';
            setTimeout(() => {
                window.scroll({
                    top: bTop - 100,
                    behavior: 'smooth',
                });
            }, 100);
        }
        return true;
    }
    return false;
},
);
