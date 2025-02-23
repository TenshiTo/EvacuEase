<?php
include 'db_data.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $evacuee_id = $_POST['barcodeInput'];
    $name = $_POST['Name'];
    $age = $_POST['Age'];
    $address = $_POST['Address'];
    $gender = isset($_POST['gender']) ? $_POST['gender'] : null;
    $contact_number = $_POST['ContactNumber'];
    $time_in = $_POST['Time-in'];
    $room_number = $_POST['RNUMBER'];

    // Convert time to 12-hour format with AM/PM
    $time_in_12hr = date("h:i A", strtotime($time_in));

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO evacuees (evacuee_id, name, age, address, gender, contact_number, time_in, room_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("isisssss", $evacuee_id, $name, $age, $address, $gender, $contact_number, $time_in_12hr, $room_number);

    if ($stmt->execute()) {
        echo "<script>window.location.href = 'form-page.html';</script>";
    } else {
        echo "<script>alert('Error: " . $stmt->error . "'); window.location.href = 'form.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
