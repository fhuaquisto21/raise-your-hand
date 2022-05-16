console.log("Funciona");
var barActions = '';

const addBtn = () => {
    barActions = document.querySelector('.R5ccN');
    let btn = document.createElement('button');
    btn.classList.add('btnHand');
    btn.id = 'btnActive';
    btn.textContent = 'Hands';
    barActions.appendChild(btn);
}

const getHandsRaise = () => {
    let hands = document.querySelectorAll('div[jsname="v8MrR"]');
    if (hands.length > 1) {
        document.querySelector('.p2SYhf button').click()
    } else {
        setTimeout(() => {
            getHandsRaise()
        }, 500);
    }

}

const existElement = () => {
    barActions = document.querySelector('.R5ccN');
    if (barActions != null) {
        console.log(barActions)
        //addBtn();
        getHandsRaise();
        return;
    } else {
        setTimeout(() => {
            console.log('Aún no')
            existElement();
        }, 1000);
    }
}

existElement();