let timeout;

function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(logout, 600000); // 10 minutes (600,000 ms)
}

function logout() {
    alert("Session expired due to inactivity.");
    window.location.href = "logout.php";
}

document.onload = resetTimer();
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;
document.onclick = resetTimer;
document.onscroll = resetTimer;