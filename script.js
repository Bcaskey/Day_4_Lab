document.addEventListener('DOMContentLoaded', function () {
    var myTopButton = document.createElement('button');
    myTopButton.innerText = 'Add A Box!';
    myTopButton.className = 'myButton';
    myTopButton.onclick = addBox;
    document.body.appendChild(myTopButton)
});

function addBox() {
    var myNewBox = document.createElement('div');
    var divNumber = String(document.getElementsByClassName('myBox').length);
    divNumber = parseInt(divNumber, 10);
    myNewBox.id = divNumber;
    myNewBox.className = 'myBox';
    myNewBox.addEventListener('click', getRandomColor);
    myNewBox.addEventListener('mouseover', mouseEnter);
    function mouseEnter(e) {
        e.target.innerHTML = e.target.id;
    }
    myNewBox.addEventListener('mouseleave', mouseLeave);
    function mouseLeave(e) {
        e.target.innerHTML = "";
    }
    myNewBox.addEventListener('dblclick', function (e) {
        var dblClickedBox = e.target; //this calls the e as the target.
        var x = dblClickedBox.id;
            if (x === '0') {
            alert('There is no element to remove');
            }
            else if (x % 2 === 0) {
                if (dblClickedBox.nextElementSibling === null) {
                    alert('No Element to remove');
                    return;
                }
                e.target.nextElementSibling.remove();
                // console.log('remove right');
            }
            else {
                if (dblClickedBox.previousElementSibling.className === 'myButton'){
                    alert('Please leave the button);
                    return;
                }

                e.target.previousElementSibling.remove();
    });    

    function resetBoxId() {
        //console.log('trying to reset box id');
        
        var x = document.getElementsByClassName('myBox');
        //var y = x.innerHTML;
            for (var i = 0; i < x.length; i++) {
                console.log(x[i].id);
            } 
    }
    document.body.appendChild(myNewBox);
}

function getRandomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.backgroundColor = color;
}
