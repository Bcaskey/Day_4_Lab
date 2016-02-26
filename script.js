document.addEventListener('DOMContentLoaded', function() {
    var myTopButton = document.createElement('button'); 
        myTopButton.innerText = 'Add A Box!'; 
        myTopButton.className = 'myButton';
        myTopButton.onclick= addBox;
        document.body.appendChild(myTopButton)});

function addBox() {
    var myNewBox = document.createElement('div');
    var divNumber = String(document.getElementsByClassName('myBox').length);
        divNumber = parseInt(divNumber, 10);
    myNewBox.id=divNumber;
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
//    myNewBox.addEventListener('dblclick', function () {
//        removeBox();
//        resetBoxId();
//    });    
//    Save below -----------
    myNewBox.addEventListener('dblclick', removeBox);
//    Save above ------------
    
        function removeBox() {
                if (thisBoxNumber < 1) {
                    alert('There is no element to remove');
                }
                else if (thisBoxNumber % 2 === 0) {
                    document.getElementById(nextBoxNumber).remove();
                    var newDivNumber = String(document.getElementsByTagName('div').length);
                    newDivNumber = parseInt(newDivNumber, 10);
                }
                else {
                    document.getElementById(prevBoxNumber).remove();
                    var newDivNumber = String(document.getElementsByTagName('div').length);
                    newDivNumber = parseInt(newDivNumber, 10);
                }
            divNumber = newDivNumber;
            }
//    function resetBoxId () {
//            // console.log('trying to reset box id');
//            var getDiv = document.getElementsByTagName ('div')[0].setAtribute('id');
//            console.log(getDiv);
//    }

        
    
    document.body.appendChild(myNewBox);
}

function getRandomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.backgroundColor = color;
}
