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
};

//Calculator end//
///////----------------------///////
///////----------------------//////

var family = {
    name: 'Alex',
    surname: 'Moiseev',
    age: 30,
    gender: 'man',
    obj: {
        name: 'Evgeniy',
        surname: 'Moiseiev',
        age: 34,
        gender: 'man',
    },
    brothers: [
        {
            name: 'Evgeniy',
            surname: 'Moiseiev',
            age: 34,
            gender: 'man',
        },
        {
            name: 'Anton',
            surname: 'Popov',
            age: 33,
            gender: 'man',
        },
        {
            name: 'Alexandr',
            surname: 'Volov',
            age: 41,
            gender: 'man',
            sisters: [
                {
                    name: 'Alexandra',
                    surname: 'Voloshina',
                    age: 25,
                    weight: 52,
                },
                {
                    name: 'Natalya',
                    surname: 'Osipova',
                    age: 27,
                    weight: 53,
                    brothers: [
                        {
                            name: 'Viktor',
                            surname: 'Malov',
                            age: 27,
                            gender: 'man'
                        },
                        {
                            name: 'Oleg',
                            surname: 'Tronov',
                            age: 35,
                            gender: 'man',
                            sisters: [
                                {
                                    name: 'Katya',
                                    surname: 'Orlova',
                                    age: 22,
                                    weight: 50,
                                },
                                {
                                    name: 'Vera',
                                    surname: 'Volya',
                                    age: 21,
                                    weight: 45,
                                    sisters: [
                                        {
                                            name: 'Kira',
                                            surname: 'Ogurtcova',
                                            age: 30,
                                            weight: 60,
                                            brothers: [
                                                {
                                                    name: 'Senya',
                                                    surname: 'Mimikov',
                                                    age: 15,
                                                    gender: 'man',
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

var totalAge = 0;
var totalWeight = 0;

function calc (obj) {
    var array = Object.keys (obj);
    array.forEach ((item, index) => {
        var valueInKey = obj[item];
        var isType =typeof valueInKey
        if (isType == 'number' && item == 'age'){
            totalAge +=  valueInKey
        } else if (isType == 'number' && item == "weight"){
            totalWeight +=  valueInKey
        } else if (Array.isArray(valueInKey)){
            valueInKey.forEach ((name, nameIndex) => calc (name))
        }
    })
}

calc (family);
console.log (totalAge, totalWeight, totalAge +  totalWeight)




