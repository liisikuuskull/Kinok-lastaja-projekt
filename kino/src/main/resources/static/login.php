<?php

session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $mysqli = require __DIR__. "/database.php";

    $sql = sprintf("SELECT * FROM user_new
           WHERE username = '%s",
           $mysqli ->real_escape_string($_POST["username"]));

    $result = $mysqli->query($sql);

    $user = $result->fetch_assoc();

    var_dump($user);
    exit;
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form action="login.php" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>

            <input type="submit" value="Login">
        </form>
    </div>

    <script src="header.html"></script>

    <footer>
        <a href="frontpage.html">Go Back</a>
    </footer>
</body>
</html>

