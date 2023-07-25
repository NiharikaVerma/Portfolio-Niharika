$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // typing animate script 
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Developer", "Freelance Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-2", {
        strings: ["Freelance Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

});



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function sendMessage() {

    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var description = document.forms["myForm"]["description"].value;

    if (name == "") {
        alert("Please fill the name field.");
        return false;
    }
    else {
        if(email == ""){
            alert("Please fill the e-mail field.");
                return false;
        }
        else{
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.email.value))
            {
                if (subject == "") {
                    alert("Please fill the subject field.");
                    return false;
                }
                else {
                    if (description == "") {
                        alert("Please fill the description field.");
                        return false;
                    }
                    else {
                        var linkElement = document.createElement('a');
                        linkElement.style.visibility = 'hidden';
                        linkElement.style.position = 'absolute';
                        let subject = document.getElementById('subject').value;
                        let body = `Hi,%0d%0a My name is ${document.getElementById('name').value}.%0d%0a Project Details: ${document.getElementById('description').value}.%0d%0a My Email : ${document.getElementById('email').value}`;
                        linkElement.href = `mailto:niharikaverma.1217@gmail.com?subject=${subject}&body=${body}`;
                        document.body.appendChild(linkElement);
                        linkElement.click();
                    }
                }
            }
            else {
                alert("You have entered an invalid email address!");
                return (false);
            }
        }
    }
}
