<?php
session_start();
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['Username'];
    $password = $_POST['pass'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE Username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Ensure password column is correct in your database
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['Username']; 
            header("Location: in.php"); // Redirect to dashboard
            exit();
        } else {
            echo "<script>alert('Incorrect password.'); window.location.href='user.html';</script>";
        }
    } else {
        echo "<script>alert('User not found.'); window.location.href='user.html';</script>";
    }

    $stmt->close();
}

$conn->close();
?>
