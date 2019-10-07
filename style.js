var a = alert('Вас приветствует калькулятор');
var oneNum = prompt('Введите первое число');
var twoNum = prompt('Введите второе число');
var operation = prompt('Вберете действие "+", "-", "*", "/" ');


function calc(oneNum, twoNum, operation) {
    switch (operation)
    {
        case '+':
            alert(oneNum + twoNum);
            break;
        case '-':
            alert(oneNum - twoNum);
            break;
        case '*':
            alert(oneNum * twoNum);
            break;
        case '/':
            alert(oneNum / twoNum);
            break;

    }
}
calc(parseInt(oneNum), parseInt(twoNum),operation);
var quest = confirm('Хотите повторить?');
if (quest == true){
    window.location.reload();
}



