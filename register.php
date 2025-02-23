<!DOCTYPE html>
<html>
    <head>
    </head>

<body>
    <div class="record">
        <h1>Register</h1>
        <form action="register.php" method="post">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Register">
        </form>
    </div>
<?php
include "db.php"; // Include your database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Hash the password before storing it
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert into database using prepared statements
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashed_password);

    if ($stmt->execute()) {
        echo "User registered successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
