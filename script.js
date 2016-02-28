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
    myNewBox.addEventListener('dblclick', function (e) { //open event listener
        var dblClickedBox = e.target; //this calls the e as the target.
        var x = dblClickedBox.id;
            if (x === '0') {
            alert('There is no element to remove');
            }
            else if (x % 2 === 0) { //open else if
                if (dblClickedBox.nextElementSibling === null) { //open nested if
                    alert('No Element to remove');
                    return; //return returns me to the prior statement
                    } //closes nested if
                //console.log("latest test line 35");
            e.target.nextElementSibling.remove(); //function of else if, assuming if not true
                // console.log('remove right');
            } // close else if statement
            else { //open else
                //console.log("line 40 test");
                if (dblClickedBox.previousElementSibling.className === 'myButton'){ //open nested if
                    alert('Please leave the button');
                    return;
                    } //closes nested if
            e.target.previousElementSibling.remove(); //function of else
            } //close else
    }); //close event listener
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