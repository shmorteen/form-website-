$(document).ready(function() {
    $('#submitBtn').click(() => {
        let fn = $('#firstName').val();
        let ln = $('#lastName').val();
        let email = $('#email').val();
        let location = $('#location').val();
        let pn = $('#number').val();
        let qualification = $('#qualification').val();
        let html = $('#htmlRanking').val();
        let css = $('#cssRanking').val();
        let bootstrap = $('#bootstrapRanking').val();
        let angular = $('#angularRanking').val();
        let github = $('#githubRanking').val();
        let git = $('#gitRanking').val();
        let js = $('#jsRanking').val();
        let nodejs = $('#nodejsRanking').val();
        let postgres = $('#postgresRanking').val();
        let mysql = $('#mysqlRanking').val();
        let source = $('#source').val();
        let message = $('#message').val();

        // console.log(location);

        if(fn == ''){
            alert('First name is required');
        }else{
            if(ln == ''){
                alert('Last name is required');
            }else{
                if(email == ''){
                    alert('Email is required');
                }else{
                    if(location == '' || location == null){
                        alert('Location is required');
                    }else{
                        if(pn == ''){
                            alert('phone number is required');
                        }else{
                            if(qualification == '' || qualification == null){
                                alert('qualification is required');
                            }else{
                                if(source == '' || source == null){
                                    alert('Source of information is required');
                                }else{
                                    if(message == ''){
                                        alert('Reasons is required');
                                    }else{
                                        if(html == '' || html == null){
                                            alert('HTML ranking is required');
                                        }else{
                                            if(css =='' || css == null){
                                                alert('CSS ranking is required');
                                            }else{
                                                if(bootstrap == '' || bootstrap == null){
                                                    alert('Bootstrap ranking required');
                                                }else{
                                                    if(angular =='' || angular == null){
                                                        alert('Angular ranking is required');
                                                    }else{
                                                        if(github =='' || github == null){
                                                            alert('Github ranking is required');
                                                        }else{
                                                            if(git =='' || git == null){
                                                                alert('Git ranking is required');
                                                            }else{
                                                                if(js =='' || js == null){
                                                                    alert('Javascript ranking is required');
                                                                }else{
                                                                    if(nodejs =='' || nodejs == null){
                                                                        alert('Nodejs ranking is required');
                                                                    }else{
                                                                        if (postgres =='' || postgres == null){
                                                                            alert('Postgres ranking is required');
                                                                        }else{
                                                                            if (mysql =='' || mysql == null){
                                                                                alert('Mysql ranking is required');
                                                                            }else{
                                                                                $.post('./assets/backend/controller.php',
                                                                                {
                                                                                    fn: fn,
                                                                                    ln: ln,
                                                                                    email: email,
                                                                                    location: location,
                                                                                    pn: pn,
                                                                                    qualification: qualification,
                                                                                    html: html,
                                                                                    css: css,
                                                                                    bootstrap: bootstrap,
                                                                                    angular: angular,
                                                                                    github: github,
                                                                                    git: git,
                                                                                    js: js,
                                                                                    nodejs: nodejs,
                                                                                    postgres: postgres,
                                                                                    mysql: mysql,
                                                                                    source: source,
                                                                                    message: message
                                                                                },function(data, status) {
                                                                                    console.log(status);
                                                                                    console.log(data);
                                                                                });
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    });
});