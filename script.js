document.addEventListener('DOMContentLoaded', function() {
    var myTopButton = document.createElement('button'); 
        myTopButton.innerText = 'Add A Box!'; 
        myTopButton.className = 'myButton';
        myTopButton.onclick= addBox;
        document.body.appendChild(myTopButton)});

function addBox() {
    var divNumber = String(document.getElementsByClassName('myBox').length);
    var myNewBox = document.createElement('div');
    myNewBox.id=divNumber;
    myNewBox.className = 'myBox';
    myNewBox.addEventListener('click', getRandomColor);
    myNewBox.addEventListener('mouseover', mouseEnter);
    myNewBox.addEventListener('mouseleave', mouseLeave);
    myNewBox.addEventListener('dblclick', removeBox);
        function removeBox() {
            var x = myNewBox.id;
            x = parseInt(x, 10);
            
        if (x < 1) {
            console.log('This is Zero');
        }
        else if (x % 2 === 0) {
            var y = (x + 1);
            //console.log('this is an addition test  ' + y)
            document.getElementById(y).remove();

            // console.log('This is Even')
            // alert(document.getElementById("x").previousSibling.id); //returns null
            //document.removeNextsibling;
            //e.nextElementSibling.removeChild();

        }
        else {
            var y = (x - 1);
            document.getElementById(y).remove();
            //console.log('This is Odd' + y)
        }
    }
    
    document.body.appendChild(myNewBox);
}

function mouseEnter(e) {
    e.target.innerHTML = e.target.id;
}

function mouseLeave(e) {
    e.target.innerHTML = "";
}

function getRandomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.backgroundColor = color;
}
