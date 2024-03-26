<?php
// Andmebaasi ühenduse parameetrid
$servername = "localhost";
$username = "root";
$password = "";
$database = "cinema";

// Andmebaasiga ühenduse loomine
$conn = new mysqli($servername, $username, $password, $database);

// Ühenduse kontrollimine
if ($conn->connect_error) {
    die("Ühendus andmebaasiga ebaõnnestus: " . $conn->connect_error);
}

echo "Andmebaasiga ühendus loodud";

// Andmebaasist päringu tegemine
$sql = "SELECT * FROM movies_new";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Andmete kuvamine
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Title: " . $row["title"]. "<br>";
    }
} else {
    echo "Andmeid ei leitud";
}

// Andmebaasiga ühenduse sulgemine
$conn->close();
?>
