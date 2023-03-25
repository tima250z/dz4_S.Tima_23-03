const btn = document.querySelector('.btn');
const nameElems = document.querySelectorAll('.name');
const ageElems = document.querySelectorAll('.ageElem');

btn.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 3 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            for (let i = 0; i < data.length; i++) {
                nameElems[i].textContent = data[i].name;
                ageElems[i].textContent = data[i].age;
            }
        }
    };
    xhr.open('GET', 'people.json', true);
    xhr.send();
});
