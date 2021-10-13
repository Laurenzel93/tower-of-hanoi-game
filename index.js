const tower1 = document.getElementById('tower1');
const tower2 = document.getElementById('tower2');
const tower3 = document.getElementById('tower3');
const disc1 = document.createElement('div');
const disc2 = document.createElement('div');
const disc3 = document.createElement('div');

// make discs
// give discs id's
// give discs css rules

disc1.setAttribute('id', 'disc1');
disc2.setAttribute('id', 'disc2');
disc3.setAttribute('id', 'disc3');

disc1.setAttribute('class', 'discs');
disc2.setAttribute('class', 'discs');
disc3.setAttribute('class', 'discs');

tower1.append(disc1);
tower1.append(disc2);
tower1.append(disc3);

disc1.style.backgroundColor = 'hotpink';
disc1.style.height = '30px';
disc1.style.width = '40px';

disc2.style.backgroundColor = 'blue';
disc2.style.height = '30px';
disc2.style.width = '60px';

disc3.style.backgroundColor = 'purple';
disc3.style.height = '30px';
disc3.style.width = '80px';
