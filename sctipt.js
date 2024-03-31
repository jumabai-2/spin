(function singleSpin() {
    let count = 4;
    const spin = document.querySelector('.spin');
    const spinLine = document.querySelector('.spin-line');
    const max = 10;
    let state = false;
    let timeOut;


    function freeSpin() {
        state = true;
        console.log('free spin');
        const div = document.createElement('div');
        if (count + 1 < max) count++;
        else count = 0;
        div.textContent = count;
        spinLine.append(div);
        removeElement(document.querySelector('.spin-line>div:first-child'));
    }

    function removeElement(elem) {
        elem.classList.add('animation-remove');
        setTimeout(function () {
            elem.remove();
            rotateSpin();
        }, 500);
    }

    document.querySelector('button').onclick = function () {
        state = !state;
        rotateSpin();
    }

    function rotateSpin() {
        if (state) {
            timeOut = setTimeout(freeSpin, 300);
        }
        else {
            clearTimeout(timeOut);
        }
    }
})();