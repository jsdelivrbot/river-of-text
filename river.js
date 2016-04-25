// var codeStrings = [
//   '(function(){a=b})(),a=a)',
//   'a=a=b',
//   'for(vari=0;i<arr.length;i++)',
//   'if(cat="orange"){lasagna.eat}',
//   'typeof NaN==="number"',
//   '5!=="5"',
//   '7=="7"',
//   '[{prp:0},{prp:1}]',
//   '!(x!==y)||false',
//   'o[p].q>=r+s',
//   '01001',
//   '0110010110'
// ];

var createRiver = function(minFontSize, maxFontSize, userColor, containerWidth, containerHeight, codeStrings){

if(typeof minFontSize !== 'number' || typeof maxFontSize !== 'number'){
minFontSize = 10;
maxFontSize = 30;
console.log('sorry, your font input was not a number. I set it for you.');
}

if(typeof containerWidth || typeof containerHeight !== 'number'){
 containerWidth = 800;
 containerHeight = 400;
 console.log('sorry, your container input was not a number. I set it for you.')
}

if(typeof userColor !== 'string'){
  userColor = 'black';
  console.log('sorry, color should be a string! I set it for you.')
}

if(!Array.isArray(codeStrings)){
  codeStrings = [
    '(function(){a=b})(),a=a)',
    'a=a=b',
    'for(vari=0;i<arr.length;i++)',
    'if(cat="orange"){lasagna.eat}',
    'typeof NaN==="number"',
    '5!=="5"',
    '7=="7"',
    '[{prp:0},{prp:1}]',
    '!(x!==y)||false',
    'o[p].q>=r+s',
    '01001',
    '0110010110'
  ];
  console.log('sorry, ur input was not an array. I set it for you.');
}

var riverContainer = document.getElementById('river-container');
var parentWidth = riverContainer.style.width;
function formatContainer(){
  riverContainer.style.position = 'relative';
  riverContainer.style.top = '0';
  riverContainer.style.left = '0';
  riverContainer.style.width = containerWidth + 'px';
  riverContainer.style.height = containerHeight + 'px';
  riverContainer.padding = '0px';
  riverContainer.margin = '0px';
  riverContainer.parentNode.style.overflow = 'hidden';
  riverContainer.style.overflow = 'hidden';
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jsAnimate(){
  var children = riverContainer.children;
  if(children.length){
    for(var i = 0; i < children.length; i ++){
      children[i].style.left = parseInt(children[i].style.left.slice(0, -2)) + 1 + 'px';

      if(parseInt(children[i].style.left.slice(0, -2)) > 850 || children.length > 25){
         riverContainer.removeChild(children[i]);
     }
    }
  }
}

function loopAnim (){
  var p = document.createElement('p');
  var randomSize = getRandom(minFontSize, maxFontSize);
  var randomY = getRandom(0, 800);
  var randomI = getRandom(0, codeStrings.length - 1);
  p.textContent = codeStrings[randomI];
  p.style.fontSize = randomSize + 'px';
  p.style.top = randomY + 'px';
  p.style.color = userColor;
  p.style.left = '10px';
  p.style.background = 'rgba(0,0,0,0)';
  p.style.position = 'absolute';
  p.style.margin = '0';
  p.style.padding = '0';
  p.classList.add('code-piece');
  riverContainer.appendChild(p);
}

formatContainer();
setInterval(loopAnim, 500);
setInterval(jsAnimate, 25);
}
