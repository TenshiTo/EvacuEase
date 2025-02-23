<?php
session_start();
session_destroy(); // Destroy session
header("Location: head.html"); // Redirect to login page
exit();
?>
