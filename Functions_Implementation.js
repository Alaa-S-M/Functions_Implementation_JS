//  function number 1
/* --> test <---------------------------------------------------
function toDoHandler(){
    console.log("codition is met!");
}
function toCheckHandler(){
    let rand= Math.random()*100; 
    console.log(rand);
    return (rand >= 99);
}
doOnlyWhen(toDoHandler,toCheckHandler,1000,2);
*/
function doOnlyWhen(toDoHandler, toCheckHandler, interval = 1000, times = 20, failHandler = null){
    let i=1,
    neverTrigerd =true;
    function callBack(){
            if(toCheckHandler()){
                toDoHandler();
                neverTrigerd=false;
                clearInterval(myvar);
            }
            if(i>=times){
                clearInterval(myvar);
                neverTrigerd=true;
            }
            i++;
        }
    var myvar = setInterval( callBack ,interval);    
    if (neverTrigerd && !!failHandler){
        failHandler();
    }
}
//  function number 2
/* --> test <---------------------------------------------------
let inputs = document.getElementsByTagName("input");
let input1 = inputs[0],
    input2 = inputs[1];
console.log(isElementVisible(input1));
*/
function isElementVisible(elementToCheck){
    let parent = elementToCheck; 
    while(parent && parent.offsetParent){
        if(parent.style.opacity =="0" || parent.style.visibility =="hidden")
            return false;
        parent = parent.parentElement;
    }
    if(parent.style.opacity =="0" || parent.style.visibility =="hidden")
        return false;
    return true;
}
//  function number 3
/* --> test <---------------------------------------------------
createStyle('h1','color:red');
*/
function createStyle(selector, rule){
    let newSelector = document.createElement('style');
    newSelector.innerHTML = '\n' + selector + '\t{\n\t' + rule +';'+'\n\t} \n' ;
    document.head.appendChild(newSelector);
}

//  function number 4
/* --> test <---------------------------------------------------
let inputs = document.getElementsByTagName("input");
let input1 = inputs[0],
    input2 = inputs[1];
unmask(input1,input2);
*/
function unmask(input1,input2){  
    let handler = addMirrorBehavior.bind(input2);
    input1.addEventListener('input', handler);
}
function addMirrorBehavior(event) {
    this.value = event.target.value;
}


