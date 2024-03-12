const Numbers=document.querySelectorAll('#number');
const Operations=document.querySelectorAll('#operation');
const Display=document.querySelector('#total');

Numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        if (Display.value==0) {
            Display.value=number.innerHTML;
        } else {
            Display.value+=number.innerHTML;
        };
    });
});
Operations.forEach((Operation)=>{
    Operation.addEventListener('click',()=>{
        if (Display.value!=='0') {
            Display.value+=Operation.innerHTML;
        };
    });
});

function calculate() {
    const Cal=eval(Display.value);
    Display.value=Cal;
};

function Clear() {
    Display.value='0';
};