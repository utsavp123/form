function myFunction() {
    let Fname1 = document.querySelector("#Fname");
    let Lname1 = document.querySelector("#Lname");
    if (!Fname1.value || !Lname1.value) {
        document.getElementById("validName").style.display = 'block';
    } else {
        document.getElementById("validName").style.display = 'none';
    }

    let Email = document.querySelector("#Email");
    if (!Email.value) {
        document.getElementById("validEmail").style.display = 'block';
    } else {
        document.getElementById("validEmail").style.display = 'none';
    }

    let pass = document.querySelector("#pass");
    let pass1 = document.querySelector("#pass1");
    if (!pass.value || !pass1.value) {
        document.getElementById("samePss").style.display = 'none';
        document.getElementById("validPass1").style.display = 'none';
        document.getElementById("validPass").style.display = 'block';
    }
    else if (pass.value.length < 8) {
        document.getElementById("validPass").style.display = 'none';
        document.getElementById("validPass1").style.display = 'block';
    }
    else if (pass.value.length >= 8) {
        for (i = 0; i < pass.value.length; i++) {
            console.log(pass.value.charAt(i));
            if ((pass.value.charCodeAt(i) >= 65 && pass.value.charCodeAt(i) <= 90) || (pass.value.charCodeAt(i) >= 97 && pass.value.charCodeAt(i) <= 122)) {
                document.getElementById("validPass1").style.display = 'none';
                document.getElementById("validPass").style.display = 'none';
                document.getElementById("samePss").style.display = 'none';
                abc1();
                abc();
                break;
            }
            else {
                document.getElementById("validPass1").style.display = 'block';
            }
        }
    } else {
        document.getElementById("validPass1").style.display = 'none';
    }

}

function upper() {
    let Fname1 = document.querySelector("#Fname");
    let Lname1 = document.querySelector("#Lname");

    Fname1.value = Fname1.value.toUpperCase();
    Lname1.value = Lname1.value.toUpperCase();

}

function xyz() {
    let pass = document.querySelector("#pass");
    let pass1 = document.querySelector("#pass1");
    if (pass.value != pass1.value) {
        document.getElementById("validPass").style.display = 'none';
        document.getElementById("samePss").style.display = 'block';
        pass1.value = '';
    }
    else {
        document.getElementById("samePss").style.display = 'none';
    }
}

function myCheck() {
    var checkBox = document.getElementById("check-box");
    if (checkBox.checked == true) {
        document.getElementById("pass").type = 'text';
        document.getElementById("pass1").type = 'text';
    } else {
        document.getElementById("pass").type = 'password';
        document.getElementById("pass1").type = 'password';

    }
}

function abc1() {

    for (i = 0; i < 10; i++) {

        if (pass.value.search(i) == -1) {
            console.log("jvv");
            document.getElementById("samePss").style.display = 'none';
            document.getElementById("validPass").style.display = 'none';
            document.getElementById("validPass1").style.display = 'block';
        }
        else {
            document.getElementById("validPass1").style.display = 'none';
            break;
        }
    }
}   

function abc() {

    for (i = 0; i < pass.value.length; i++) {
        
        if ((pass.value.charCodeAt(i) > 32 && pass.value.charCodeAt(i) <= 47) || (pass.value.charCodeAt(i) >= 58 && pass.value.charCodeAt(i) <= 64) || (pass.value.charCodeAt(i) >= 91 && pass.value.charCodeAt(i) <= 96)
            || (pass.value.charCodeAt(i) >= 123 && pass.value.charCodeAt(i) <= 126)) {
            document.getElementById("validPass1").style.display = 'none';
            abc1()
            xyz();
            break;
        }
        else {
            document.getElementById("validPass1").style.display = 'block';
        }
    }
}
