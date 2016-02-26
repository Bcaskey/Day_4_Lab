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
    var thisBoxNumber = divNumber;
    var nextBoxNumber = (divNumber + 1);
    var prevBoxNumber = (divNumber - 1);
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
    myNewBox.addEventListener('dblclick', function () {
        removeBox();
        resetBoxId();
    });    
    //    Save below, this is if I go back to a single remove box function -----------
    //    myNewBox.addEventListener('dblclick', removeBox);
    //    Save above ------------
    
    function removeBox() {
        if (thisBoxNumber < 1) {
            alert('There is no element to remove');
        }
        else if (thisBoxNumber % 2 === 0) {
            document.getElementById(nextBoxNumber).remove();
        }
        else {
            document.getElementById(prevBoxNumber).remove();
        }
    }
    function resetBoxId() {
        //console.log('trying to reset box id');
        
        var x = document.getElementsByClassName('myBox');
        var y = x.innerHTML;
            for (var i = 0; i < x.length; i++) {
                console.log(x[i]);
            }

        //var boxId = document.getElementsByClassName('myBox');
        //myBox[0].style.color = 'green';
        
        // new goal, to build an array of remaining box numbers, then print numbers to console.log
        
        
        
        
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
