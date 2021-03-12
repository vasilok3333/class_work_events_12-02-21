/* 1. З допомогою alt+u відкрити вікно де ми будемо запитуватись у юзера імя, далі з допомогою рандому 
додавати до цього юзера рандомне число. Зациклити запит за іменем юзера поки користувач не натисне 
на відміну у створенні нового юзера. 
В результаті ми маєм отримати масив з обєктами юзерів де вони будуть мати 3 поля - порядковий номер 
створення - id, name and mathNumber.
Далі з допомогою кнопки на екран вивести список юзерів на сторінку та просортувати їх у порядку 
спадання від рандомних значень. Додати мінімальні стилі для красивого відображення списку.
При наявності можливості скролу запитатись у юзера чи хоче він очистити колекцію від всіх наявних юзерів.
 */



let arrayUsers = [];
let btn = document.createElement('div');
btn.style.width = "200px";
btn.style.height = "100px";
btn.style.fontSize = "16px";
btn.style.textAlign = "center";
btn.style.backgroundColor = "red";
btn.innerHTML = "Click me";
btn.style.margin = "auto";
btn.onclick = createList;

document.body.append(btn);

window.addEventListener('keydown', (evt) => {
    if (evt.altKey && evt.code == "KeyU") {
        let accept;
        do {
            let user = {
                name: prompt("Enter name, please"), 
                mathNumber: Math.random(),
                id: arrayUsers.length + 1,
            };
            arrayUsers.push(user);
            accept = confirm("Do you want create another one?");
        } while (accept);
        console.log(arrayUsers)
    }
})


function createList() {
    let list = document.createElement("ol");
    list.style.display = "inline-block";     
    list.style.fontSize = "16px";
    list.style.color = "white";
    list.style.textTransform = "uppercase";
    list.style.textAlign = "center";

    arrayUsers.sort((a, b) =>  b.mathNumber - a.mathNumber );

    for (let i = 0; i < arrayUsers.length; i++) {
        let item = document.createElement("li");
        item.style.marginRight = "10px";
        item.style.padding = "10px";
        list.style.backgroundColor = "black";


        let subList = document.createElement("ul");
        for (let key in arrayUsers[i]) {
            let subItem = document.createElement("li");
            subItem.innerHTML = arrayUsers[i][key];
            subList.append(subItem);
        }
        item.append(subList);
        list.append(item);

    }
    document.body.append(list);

}

function clearList() {
    if (confirm("Do you want to clear list?")) {
        arrayUsers = [];
    }
    window.removeEventListener("scroll", clearList, true);

}

window.addEventListener("scroll", clearList, true);









