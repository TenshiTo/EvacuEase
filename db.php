<?php
$host = "localhost";
$user = "root";
$pass = "bayangmagiliw"; 
$dbname = "login_cred";

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>