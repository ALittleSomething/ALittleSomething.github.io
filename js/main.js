var masonryGrids = [];




var piccount = 26;
var prevRandomNumber = 1;
var firstLoad = true;
var isdarkMode = false;
var confettiEnabled = true;
var hidden = false;
$(document).ready(function() {

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkMode();
    } else {
        lightMode();
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? "dark" : "light";
        if (newColorScheme == "dark") {
            darkMode();
        } else if (newColorScheme == "light") {
            lightMode();
        };
    });

    $('#dark-mode-btn').click(function() {
        if (isdarkMode) {
            lightMode();
            isdarkMode = false;
        } else {
            darkMode();
            isdarkMode = true;
        }
    });
    $('#cenfetti-btn').click(function() {

        if (confettiEnabled) {
            $('.confetti-container').animate({ opacity: 0 });
            $('#cenfetti-btn').addClass('btn-success');
            $('#cenfetti-btn').removeClass('btn-danger');
            $('#confetti-btn-icon').removeClass('ci-close-circle');
            $('#confetti-btn-icon').addClass('ci-play-circle');
            confettiEnabled = false;
        } else {
            $('.confetti-container').animate({ opacity: 1 });
            $('#cenfetti-btn').removeClass('btn-success');
            $('#cenfetti-btn').addClass('btn-danger');
            $('#confetti-btn-icon').addClass('ci-close-circle');
            $('#confetti-btn-icon').removeClass('ci-play-circle');
            confettiEnabled = true;
        }
    });

    $('#hide-btn').click(function() {

        if (hidden) {
            // $('.confetti-container').animate({ opacity: 0 });
            // $('#cenfetti-btn').removeClass('btn-danger');
            $('.birthday-card').removeClass('birthday-card-hidden');
            $('.birthday-card').animate({ opacity: 1 });
            $('.floating-btns').removeClass('floating-btns-hidden');
            $('#birthday-card-img').fadeIn('slow');
            $('#birthday-card-body').fadeIn('slow');
            $('#birthday-card-from').fadeIn('slow');
            $('#hide-mode-btn-icon').removeClass('ci-arrow-up-circle');
            $('#hide-mode-btn-icon').addClass('ci-arrow-down-circle');
            $('.blur').animate({ opacity: 1 });
            hidden = false;
        } else {
            // $('.confetti-container').animate({ opacity: 1 });
            // $('#cenfetti-btn').removeClass('btn-success');
            // $('#cenfetti-btn').addClass('btn-danger');
            $('.birthday-card').addClass('birthday-card-hidden');
            $('.birthday-card').animate({ opacity: 0.96 });
            $('.floating-btns').addClass('floating-btns-hidden');
            $('#birthday-card-img').fadeOut();
            $('#birthday-card-body').fadeOut();
            $('#birthday-card-from').fadeOut();
            $('.blur').animate({ opacity: 0 });
            $('#hide-mode-btn-icon').addClass('ci-arrow-up-circle');
            $('#hide-mode-btn-icon').removeClass('ci-arrow-down-circle');
            hidden = true;
        }
    });
    loadbirthdaysimg();
    masonryGrid();
    $('.lazy').lazy();

    $('.banner').css({ "background-image": "url(images/loader.gif)", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center" });


    updateGrid();



    $('#sign-up-btn').click(function() {
        $('#container').addClass("sign-up-mode");
    });
    $('#sign-in-btn').click(function() {
        $('#container').removeClass("sign-up-mode");
    });
    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });

    // setTimeout(loadingAnimation, 5000);

    $('.promo-gift-wrapper').on('click', loadingAnimation);

});

function masonryGrid() {
    var e, t = document.querySelectorAll(".masonry-grid");
    if (null !== t)
        for (var r = 0; r < t.length; r++) {
            e = new Shuffle(t[r], { speed: 490, isCentered: false, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', itemSelector: ".masonry-grid-item", sizer: ".masonry-grid-item" }), imagesLoaded(t[r]).on("progress", function() { e.layout() });
            masonryGrids[r] = e;
        }
}



function loadingAnimation() {
    // window.alert("aknjkdn");
    // $('.loader').fadeOut(1000, fuction() {

    // });
    $(".loader").fadeOut(450, function() {
        $('.main-content').removeClass("main-content-hide");
        $('.main-content').animate({ opacity: 1 }, 1000, function() {
            masonryGrid()
        });
    });

}

function loadbirthdaysimg() {
    // $(".gridd").append("<div class='row  masonry-grid' data-columns='6'>");
    var ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
    for (var i = 0; i < 20; i++) {

        if (firstLoad && i < 15) {
            $(".gridd").append("<div class='masonry-grid-item'>" +
                "<img class='lazy " + getImgShadowColor() + " rounded' src='images/" + ranNums[i] + ".jpg' alt='Nadi's Pic'></div>");

        } else {

            $(".gridd").append("<div class='masonry-grid-item'>" +
                "<img class='lazy " + getImgShadowColor() + " rounded ' src='images/loader.gif' data-src='images/" + ranNums[i] + ".jpg' alt='Nadi's Pic'></div>");
        }
    }
    firstLoad = false;
    // $(".gridd").append("<div>")
    masonryGrid();
    // updateGrid();
    $('.lazy').lazy();


}

function getImgShadowColor() {
    if (isdarkMode) {
        return "img-shadow-dark";
    } else {
        return "img-shadow";
    }
}

function darkMode() {
    isdarkMode = true;
    $('body').addClass('bg-dark-mode');
    $('#birthday-card-img').attr("src", "images/birthdaycarddark.svg");


    $('#birthday-card-heading').addClass('text-white');
    $('#birthday-card-body').addClass('text-white');
    $('#birthday-card-from').addClass('text-white');
    $('.birthday-card').addClass('bg-dark-mode');
    $('.blur').addClass('blur-dark');
    $('.blur').removeClass('blur-light');

    $('#dark-mode-btn').addClass('btn-warning');
    $('#dark-mode-btn').removeClass('btn-dark');
    $('#dark-mode-btn-icon').removeClass('ci-moon');
    $('#dark-mode-btn-icon').addClass('ci-sun');
    $('.loader').addClass('bg-dark-mode');
    $('.bottom-trasnparent').addClass('bottom-trasnparent-dark');
}

function lightMode() {
    isdarkMode = false;
    $('body').removeClass('bg-dark-mode');
    $('#birthday-card-img').attr("src", "images/birthdaycardlight.svg");
    $('#birthday-card-heading').removeClass('text-white');
    $('#birthday-card-body').removeClass('text-white');
    $('#birthday-card-from').removeClass('text-white');

    $('.birthday-card').removeClass('bg-dark-mode');

    $('#dark-mode-btn').removeClass('btn-warning');
    $('#dark-mode-btn').addClass('btn-dark');
    $('.blur').addClass('blur-light');
    $('.blur').removeClass('blur-dark');
    $('#dark-mode-btn-icon').addClass('ci-moon');
    $('#dark-mode-btn-icon').removeClass('ci-sun');
    $('.loader').removeClass('bg-dark-mode');
    $('.bottom-trasnparent').removeClass('bottom-trasnparent-dark');
}

// function randomNumber() {
//     do {
//         var createdRandoNumber = (Math.floor(Math.random() * piccount) + 1);
//         console.log(createdRandoNumber)
//     } while (prevRandomNumber == createdRandoNumber);
//     prevRandomNumber = createdRandoNumber;
//     return createdRandoNumber;
// }

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        loadbirthdaysimg();
    }

});

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function updateGrid() {
    // console.log("updating")
    // masonryGrid();
    masonryGrids.forEach(element => {
        element.layout();
    });
    setTimeout(updateGrid, 5000);
}

function toggleDarkMode() {

}