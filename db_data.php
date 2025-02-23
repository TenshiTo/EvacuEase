<?php
$host = "localhost";
$user = "root";
$pass = "bayangmagiliw"; 
$dbname = "evacuees";

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>