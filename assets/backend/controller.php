<?php
    include "./Connection.php";
    $dbConn = new Connection("localhost", "root", "", "pciform");
    $conn = $dbConn->connect();

    $first_name = $_POST['fn'];
    $last_name = $_POST['ln'];
    $email = $_POST['email'];
    $phone_number = $_POST['pn'];
    $location = $_POST['location'];
    $qualification = $_POST['qualification'];
    $html = $_POST['html'];
    $css = $_POST['css'];
    $bootstrap = $_POST['bootstrap'];
    $angular = $_POST['angular'];
    $github = $_POST['github'];
    $git = $_POST['git'];
    $js = $_POST['js'];
    $nodejs = $_POST['nodejs'];
    $postgres = $_POST['postgres'];
    $mysql = $_POST['mysql'];
    $source = $_POST['source'];
    $message = $_POST['message'];

    // echo $first_name.' '.$last_name.' '.$email.' '.$phone_number.' '.$location.' '.$qualification.' '.$html.' '.$css.' '.$bootstrap.' '.$angular.' '.$github.' '.$git.' '.$js.' '.$nodejs.' '.$postgres.' '.$mysql.' '.$source.' '.$message;

    $ins = mysqli_query($conn, "INSERT INTO participants (first_name, last_name, email, phone, location, qual, html, css, bootstrap, angular, github, git, js, nodejs, postgres, mysql, source, message) VALUES ('$first_name', '$last_name', '$email', '$phone_number', '$location', '$qualification', '$html', '$css', '$bootstrap', '$angular', '$github', '$git', '$js', '$nodejs', '$postgres', '$mysql', '$source', '$message')");
    if($ins){
        echo "success";
    }else{
        echo "failed";
    }
?>