const tower1 = document.getElementById('tower1');
const tower2 = document.getElementById('tower2');
const tower3 = document.getElementById('tower3');
const disc1 = document.createElement('div');
const disc2 = document.createElement('div');
const disc3 = document.createElement('div');
 
// make discs
// give discs id's
// give discs css rules
// make towers clickable
// when click happens, do game logic:
// if there is nothing selected, select top disc on this tower
// if there is something selected, check to see if move is valid
// if valid move, move disc
// after a valid move, check to see if the player wins
 
 
disc1.setAttribute('id', 'disc1');
disc2.setAttribute('id', 'disc2');
disc3.setAttribute('id', 'disc3');
 
disc1.setAttribute('draggable', 'true');
disc2.setAttribute('draggable', 'true');
disc3.setAttribute('draggable', 'true');
 
disc1.setAttribute('class', 'discs');
disc2.setAttribute('class', 'discs');
disc3.setAttribute('class', 'discs');
 
disc1.dataset.size = 1;
disc2.dataset.size = 2;
disc3.dataset.size = 3;
 
tower1.append(disc1);
tower1.append(disc2);
tower1.append(disc3);
 
disc1.style.backgroundColor = 'red';
disc1.style.height = '30px';
disc1.style.width = '40px';
 
disc2.style.backgroundColor = 'blue';
disc2.style.height = '30px';
disc2.style.width = '60px';
 
disc3.style.backgroundColor = 'green';
disc3.style.height = '30px';
disc3.style.width = '80px';
 
function allowDrop(ev) {
    ev.preventDefault();
  }
 
  function drag(ev) {
    ev.dataTransfer.setData("discs", ev.target.id);
  }
 
  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("discs");
    ev.target.append(document.getElementById(data));
      let drops = 0;
      drops += 1;
      document.getElementById('moveCounter').innerHTML = drops;
  }