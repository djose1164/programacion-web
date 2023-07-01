const calculateBtn = document.getElementById("calculateBtn");
const currentItem = document.getElementById("currentItem");
populateComboBox();

calculateBtn.onclick = () => {
    const number = parseInt(document.getElementById("currentItem").innerText);
    setModalHeader(number);
    generateTable(number);
};

function populateComboBox() {
    const comboBox = document.getElementById("comboBox");
    const createButton = (text) => {
        const btn = document.createElement("button");
        const classList = "btn btn-secondary dropdown-item".split(" ");
        
        btn.onclick = () => currentItem.innerText = btn.innerText;
        btn.classList.add(...classList);
        btn.innerText = text;

        return btn;
    };

    for (let i = 1; i <= 10; ++i) {
        comboBox.appendChild(createButton(i));
    }
}

function setModalHeader(number) {
    const modalTitle = document.getElementById("modalTitle");
    modalTitle.innerText = `Tabla de multiplicar de ${number}`;
}

function generateTable(number) {
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = "";

    for (let i = 1; i <= 12; ++i)
        modalBody.innerHTML += `<p>${i} x ${number} = ${i*number}</p>`
}