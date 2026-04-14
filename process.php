<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from the keyboard/file input via POST
    $name = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $msg = htmlspecialchars($_POST['message']);

    // Final requirement: Data handling
    echo "<h1>Submission Successful</h1>";
    echo "<p>Thank you, <strong>$name</strong> ($email). Your message has been received.</p>";
    echo "<p><strong>Message Content:</strong> $msg</p>";
    echo "<br><a href='index.html'>Return to Homepage</a>";
} else {
    echo "Direct access not allowed.";
}
?>