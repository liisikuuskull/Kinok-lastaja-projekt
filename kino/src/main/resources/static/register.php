<?php

if (empty($_POST["username"])) {
    die("Name is required");
}

print_r($_POST);

//first name
if (empty($_POST["first_name"])) {
    die("First name is required");
}
//last name 
if (empty($_POST["last_name"])) {
    die("Last name is required");
}

if ( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required");
}

if (strlen($_POST["password"]) < 8) {
    die("Password must be at least 8 characters");
}

if ( ! preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain at least one letter");
}

if ( ! preg_match("/[0-9]/", $_POST["password"])) {
    die("Password must contain at least one letter");
}

if ($_POST["password"] !== $_POST["confirmPassword"]){
    die("Passwords must match");
}

$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

if (empty($_POST["age"])) {
    die("Age is required");
}

$mysqli =require __DIR__. "/database.php";

$sql = "INSERT INTO user_new (username, first_name, last_name, email, password_hash, age)
        VALUES (?, ?, ?, ?, ? ,?)";

$stmt = $mysqli ->stmt_init();

if ( ! $stmt ->prepare($sql)) {
    die("SQL error: " . $mysqli ->error);
}

$stmt ->bind_param("sssssi",
                    $_POST["username"],
                    $_POST["first_name"],
                    $_POST["last_name"],
                    $_POST["email"],
                    $password_hash,
                    $_POST["age"]);   

if ($stmt ->execute()) {

    header("Location: registration-success.html");
    exit;

} else {

    if ($mysqli->errno === 1062) {
        die("email already taken");
    } else {
        die($mysqli->error . " " . $mysqli ->errno);   
    }
}



print_r($_POST);
var_dump($password_hash);