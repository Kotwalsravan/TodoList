let count = 1;

function addTodo() {
    const inputEl = document.querySelector("input");
    const value1 = inputEl.value;

    if (value1 !== '') {
        const newH4 = document.createElement("h4");
        newH4.setAttribute("id", count);
        newH4.innerHTML = `
            <div>${value1}</div>
            <br/>
            <button onclick="deleteTodo(${count})">Delete Item</button>
            <button onclick="updateTodo(${count})">Update Item</button>
        `;

        const body = document.querySelector("#body");
        body.appendChild(newH4);
        count++;
    }

    inputEl.value = "";
}

function deleteTodo(value2) {
    const deleteItem = document.getElementById(value2);
    const body = document.querySelector("#body");

    body.removeChild(deleteItem);
}

function updateTodo(value2) {
    const input = document.createElement("input");
    input.setAttribute("placeholder", "Enter update");

    const proceed = document.createElement("button");
    proceed.innerText = "Proceed";

    proceed.onclick = function() {
        proceed1(value2);
    };

    const h4 = document.getElementById(value2);
    h4.appendChild(input);
    h4.appendChild(proceed);

    function proceed1(value2) {
        const text = input.value;
        const updatevau = document.getElementById(value2);
        
        updatevau.querySelector("div").innerText = text;
        h4.removeChild(input);
    h4.removeChild(proceed);

    }
}
