const sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = () => {
    const username = document.getElementById("name").value;
    alert(`Bienvenido ${username}, al sistema de consulta.`);
}