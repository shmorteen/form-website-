<?php
    class Connection{
        private $server;
        private $username;
        private $password;
        private $database;
        private $link;

        function __construct($server, $username, $password, $database){
            $this->server = $server;
            $this->username = $username;
            $this->password = $password;
            $this->database = $database;   
        }

        public function connect(){
            $this->link = mysqli_connect($this->server, $this->username, $this->password, $this->database);
            if(!$this->link) {
                echo "Error: Unable to connect to server";
                exit;
            }
            return $this->link;
        }

        public function closeConnection(){
            mysqli_close($this->link);
        }
    }
?>