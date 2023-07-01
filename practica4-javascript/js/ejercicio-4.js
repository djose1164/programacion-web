const btn = document.getElementById("sendBtn");

btn.onclick = () => {
    const number = parseInt(document.getElementById("age").value);
    setModalHeader(number);
    generateTable(number);
};

function setModalHeader(number) {
    const modalTitle = document.getElementById("modalTitle");
    modalTitle.innerText = `Tabla de multiplicar de ${number}`;
}

function generateTable(number) {
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = "";

    for (let i = 1; i <= 10; ++i)
        modalBody.innerHTML += `<p>${i} x ${number} = ${i*number}</p>`
}