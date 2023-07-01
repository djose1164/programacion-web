const sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = () => {
    const age = parseInt(document.getElementById("age").value);
    const requiredAge = 18;

    if (age < requiredAge)
        alert("Usted tiene accesos a servicios limitados");
    else
        alert("Usted tiene acceso a todos nuestros servicios");
}