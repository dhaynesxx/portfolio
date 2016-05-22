var app = app || {};

app.isMobile = false;

app.pages = ['home', 'about', 'skills', 'portfolio', 'contact'];

app.currentScreen = 0;

app.lastMove = '';

app.moved = false;

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
        app.isMobile = true;
}

app.aboutMe = ['summary', 'licensee', 'consulting', 'insurance', 'ga-student'];

app.projects = {
    ticTacToe: {
        id: 'ticTacToe',
        name: 'Tic Tac Toe',
        description: 'This was the first project in WDI, The task was to build a working version of tic tac toe. Key features added was the ability to select different characters and adding some animations.',
        code: 'https://github.com/dhaynesxx/tictactoe/tree/master/tictactoe2',
        site: 'http://dhaynesxx.github.io/tictactoe/tictactoe2/',
        image: 'assets/tictactoe-shot.png'
    },
    stacker: {
        id: 'stacker',
        name: 'Stacker',
        description: 'This was an extension to project 0, I created my own game based on the old arcade game stacker, the goal is to stack all the blocks on top of each other to get to the top',
        code: 'https://github.com/dhaynesxx/tictactoe/tree/master/stacker',
        site: 'http://dhaynesxx.github.io/tictactoe/stacker/',
        image: 'assets/stacker-shot.png'
    },
    candyShop: {
        id: 'candyShop',
        name: 'Candy Shop',
        description: 'WDI project 1, task was to create a rails application with at least 3 models. I created an e-commerce website, including vast back-end functionality (eg stock control) ',
        code: 'https://github.com/dhaynesxx/project_one',
        site: 'https://thecandyshop.herokuapp.com/',
        image: 'assets/candy-shop-shot.png'
    },
    burningAirlines: {
        id: 'burningAirlines',
        name: 'Burning Airlines',
        description: 'First group project where we create an airline booking website using backbone.js, creates the abiltiy to add planes, flights and make bookings, tests for live booking changes ',
        code: 'https://github.com/donalmond/BurningAirlines',
        site: 'http://burningheirlines.herokuapp.com',
        image: 'assets/burning-airlines-shot.png'
    },
    coffeeRun: {
        id: 'coffeeRun',
        name: 'Coffee Run',
        description: 'Second group project, we wanted to utilise geocoder and google maps api so we created a coffee delivery app, the app is made in backbone and works live for the 3 types of users',
        site: 'http://coffffeerun.herokuapp.com/',
        image: 'assets/coffee-run-shot.png'
    },
    mazr: {
        id: 'mazr',
        name: 'Mazr',
        description: 'Final project, This utilises Three.js & Cannon.js to create an interactive maze that you can roll a ball through to get to the next side, also uses accellerometer function on phone',
        code: 'https://github.com/dhaynesxx/mazr_cannon',
        site: 'http://dhaynesxx.github.io/mazr_cannon/',
        image: 'assets/mazr-shot.png'
    }
};

app.projects.list = _.keys( app.projects );

app.scrollPositions = {};


app.circleHeight = function() {
    var width = $('.about-me-job').width();
    if (app.isMobile) {
        width = $('#about').width();
    }
    $('.about-me-job').height( width );
    $('.job-head').css('font-size', 0.11 * width + 'px' );
    $('.job-head').css('line-height', 0.3 * width + 'px' );
};

app.adjustMobileCSS = function() {
    $('.home-h1').addClass('mobile-home-h1');
    $('.home-h1').removeClass('home-h1');
    $('#burger').addClass('mobile-burger-display');
    $('#burger').removeClass('burger-display');
    $('.menu').addClass('mobile-menu');
    $('.menu').removeClass('menu');
    $('.about-text').addClass('mobile-about-text');
    $('.about-text').removeClass('about-text');
    $('.summary-breaks').removeClass('hide');
    $('.about-me').addClass('mobile-about-me');
    var height = $('#home').height();
    $('.skills-li').css('height', 0.23 * height + 'px');
    $('.skills-logo').addClass('mobile-skills-logo');
    $('.skills-logo').removeClass('skills-logo');
    $('.project-heading').addClass('mobile-project-heading');
    $('.project-heading').removeClass('project-heading');
    $('.portfolio-list').addClass('mobile-portfolio-list');
    $('.portfolio-list').removeClass('portfolio-list');
    $('.project-link').addClass('mobile-project-link');
    $('.project-link').removeClass('project-link');
    $('.project-element').addClass('mobile-project-element');
    $('.project-element').removeClass('project-element');
    $('.project-heading').addClass('mobile-project-heading');
    $('.project-heading').removeClass('project-heading');
    $('.contact-li').addClass('mobile-contact-li');
    $('.contact-li').removeClass('contact-li');
    $('.page-heading').addClass('mobile-page-heading');
    $('.page-heading').removeClass('page-heading');
};

app.mobileArrowsVertical = function() {
    switch (app.currentScreen) {
        case 0:  /// home screen
            $('#up-arrow, #left-arrow, #right-arrow').addClass('hide');
            $('#down-arrow').removeClass('hide');
            break;
        case 1:  /// about me
            $('#left-arrow, #right-arrow').addClass('hide');
            $('#up-arrow, #down-arrow').removeClass('hide');
            break;
        case 2:  /// my skills
            $('#left-arrow, #right-arrow').addClass('hide');
            $('#up-arrow, #down-arrow').removeClass('hide');
            break;
        case 3: /// my portfolio
            $('#left-arrow, #right-arrow').addClass('hide');
            $('#up-arrow, #down-arrow, #right-arrow').removeClass('hide');
            break;
        case 4: /// contact me
            $('#down-arrow, #left-arrow, #right-arrow').addClass('hide');
            $('#up-arrow').removeClass('hide');
            break;
    }
};

app.mobileArrowsHorizontal = function(screen) {
    var counter = 1;
    var max, current;
    if (screen === 'about') {
        max = app.aboutMe.length - 1;
        current = app.aboutMe.indexOf( app.aboutMe.current );
    }
    else if (screen === 'portfolio') {
        max = app.projects.list.length - 1;
        current = app.projects.list.indexOf( app.projects.current );
    }

    if (current === 0) {
        $('#left-arrow').addClass('hide');
        $('#right-arrow').removeClass('hide');
    } else if (current === max) {
        $('#right-arrow').addClass('hide');
        $('#left-arrow').removeClass('hide');
    } else {
        $('#left-arrow, #right-arrow').removeClass('hide');
    }
    console.log(counter);
    counter++;
};

app.moveUp = _.debounce( function(time) {
    if (app.currentScreen === 0) {
        return;
    }
    app.lastMove = 'moveUp';
    $('#' + app.pages[app.currentScreen]).addClass('hide');
    $('#' + app.pages[app.currentScreen - 1]).removeClass('hide');
    app.currentScreen -= 1;
    if (app.currentScreen === 1) {
        app.circleHeight();
    }
}, 800, true);

app.moveDown = _.debounce( function(time) {
    if (app.currentScreen === app.pages.length - 1) {
        return;
    }
    app.lastMove = 'moveDown';
    $('#' + app.pages[app.currentScreen]).addClass('hide');
    $('#' + app.pages[app.currentScreen + 1]).removeClass('hide');
    app.currentScreen += 1;
    if (app.currentScreen === 1) {
        app.circleHeight();
        // app.mobileArrowsHorizontal('about');
    }
}, 800, true);

//////// key functionality ////////////////////////
app.keyControls = function() {
$(window).keydown(function(e){
    if ( e.keyCode === 38 ) {
        e.preventDefault();
        //up
        app.moveUp();
    }
    else if ( e.keyCode === 40) {
        e.preventDefault();
        //down
        app.moveDown();
    }
    else if (e.keyCode === 27) {
        e.preventDefault();
        /// esc
        if (!$('#modal-container').hasClass('hide')) {
            $('#modal-container').addClass('hide');
        }
    }
});
};

//////// mouse functionality ///////////////////////////////

app.mouseControls = function() {
    $(window).on({
        'mousewheel': function(e){
            if (app.moved === true) {
                return;
            } else if (e.originalEvent.deltaY <= -1) {
                app.moved = true;
                setTimeout(function(){
                    app.moved = false;
                }, 900);
                app.moveUp();
            } else if (e.originalEvent.deltaY >= 1) {
                app.moved = true;
                setTimeout(function(){
                    app.moved = false;
                }, 900);
                app.moveDown();
            } else {
                if (app.lastMove) {
                    app[app.lastMove]();
                }
            }
        }
    });

};

///// Swipe Functionality //////////////////
app.swipeControls = function(){
    //// left right portfolio swipe controls////////
    $('#portfolio').swipe( {
        swipeLeft: function() {
            var currentIndex = app.projects.list.indexOf( app.projects.current );
            if (currentIndex === app.projects.list.length - 1) {
                return;
            }
            $('#' + app.projects.list[currentIndex]).addClass('hide');
            $('#' + app.projects.list[currentIndex + 1]).removeClass('hide');
            app.projects.current = app.projects.list[currentIndex + 1];
            app.mobileArrowsHorizontal('portfolio');
        },
        swipeRight: function(){
            var currentIndex = app.projects.list.indexOf( app.projects.current );
            if ( currentIndex === 0 ) {
                return;
            }
            $('#' + app.projects.list[currentIndex]).addClass('hide');
            $('#' + app.projects.list[currentIndex - 1]).removeClass('hide');
            app.projects.current = app.projects.list[currentIndex - 1];
            app.mobileArrowsHorizontal('portfolio');
        }
    });
    ////// left right about me swipe controls
    $('#about').swipe( {
        swipeLeft: function() {
            var aboutMeIndex = app.aboutMe.indexOf( app.aboutMe.current );
            if (aboutMeIndex === app.aboutMe.length - 1) {
                return;
            }
            $('#' + app.aboutMe[aboutMeIndex]).addClass('hide');
            $('#' + app.aboutMe[aboutMeIndex + 1]).removeClass('hide');
            $('#' + app.aboutMe[aboutMeIndex + 1]).parent().removeClass('hide');
            if (aboutMeIndex > 0) {
                $('#' + app.aboutMe[aboutMeIndex]).parent().addClass('hide');
            }
            app.circleHeight();
            app.aboutMe.current = app.aboutMe[aboutMeIndex + 1];
            app.mobileArrowsHorizontal('about');
        },
        swipeRight: function(){
            var aboutMeIndex = app.aboutMe.indexOf( app.aboutMe.current );
            if ( aboutMeIndex === 0 ) {
                return;
            }
            $('#' + app.aboutMe[aboutMeIndex]).addClass('hide');
            $('#' + app.aboutMe[aboutMeIndex - 1]).removeClass(' hide');
            $('#' + app.aboutMe[aboutMeIndex - 1]).parent().removeClass('hide');
            if (aboutMeIndex > 0) {
                $('#' + app.aboutMe[aboutMeIndex]).parent().addClass('hide');
            }

            app.circleHeight();
            app.aboutMe.current = app.aboutMe[aboutMeIndex - 1];
            app.mobileArrowsHorizontal('about');
        }
    });
    //// up and down functionality
    $('body').swipe( {
        swipeUp: function() {
            app.moveDown();
            app.mobileArrowsVertical();
        },
        swipeDown: function() {
            app.moveUp();
            app.mobileArrowsVertical();
        },
        threshold: 10
    });
    $('.menu-link').swipe({
        tap: function() {
            $('#' + app.pages[ app.currentScreen ]).addClass('hide');
            $('#' + $(this).text().toLowerCase()).removeClass('hide');
            app.currentScreen = app.pages.indexOf($(this).text().toLowerCase());
        }
    });
};

app.addProjects = function() {
    for (var k = 0; k < app.projects.list.length; k++) {
        var thisProject = app.projects[ app.projects.list[k] ];
        var $projectLi = '<li id="' + thisProject.id + '" class="portfolio-li col-md-4 col-sm-12"></li>';
        var $projectDiv = '<div id="inner-' + thisProject.id + '" class="project"></div>';
        var $heading = '<h7 class="project-element col-xs-12 project-heading">' + thisProject.name + '</h7>';
        var $image = '<img src="' + thisProject.image + '" alt="' + thisProject.name + '" class="project-element portfolio-img col-xs-12">';
        $('#portfolio-list').append($projectLi);
        $('#' + thisProject.id).append($projectDiv);
        $('#inner-' + thisProject.id).append($heading, $image);
        if (app.isMobile) {
            $code = '<a class="project-link col-xs-12 mobile-link" href="' + thisProject.code +'" target="_blank">Code</a>';
            $site = '<a class="project-link col-xs-12 mobile-link" href="' + thisProject.site +'" target="_blank">Site</a>';
            $('#inner-' + thisProject.id).append($code, $site);
        }
    }
};

$(document).ready(function(){

    ////// Set height of body/////////////////////

    $('body').height(window.innerHeight);

    app.addProjects();

    app.moveUp();

    if (app.isMobile) {
        //adjust some css properties
        app.adjustMobileCSS();
        /// portfolio view change for mobile
        app.projects.current = app.projects.list[0];
        for (var i = 1; i < app.projects.list.length; i++) {
            $('#' + app.projects.list[i]).addClass('hide');
        }
        /// about me change for mobile
        app.aboutMe.current = app.aboutMe[0];
        for (var j = 1; j < app.aboutMe.length; j++) {
            $('#' + app.aboutMe[j]).addClass('hide');
            $('#' + app.aboutMe[j]).parent().addClass('hide');
        }
        app.swipeControls();
        app.mobileArrowsVertical();
    } else {
        app.keyControls();
        app.mouseControls();
    }

    //////// nav click event //////////////////////////////////

    $('#nav-div').on('click', function() {
        if ( $('.expand-menu').hasClass('hide') ) {
            $('.expand-menu').removeClass('hide');
        } else {
            $('.expand-menu').addClass('hide');
        }
    });

    $('.menu-link').on('click', function(){
            $('#' + app.pages[ app.currentScreen ]).addClass('hide');
            $('#' + $(this).text().toLowerCase()).removeClass('hide');
            app.currentScreen = app.pages.indexOf($(this).text().toLowerCase());
    });

    //////// portfolio click event ///////////////////////////

    $('.portfolio-li').on('click', function() {
        if( app.isMobile ) {
            return;
        }
        $('#modal-container').removeClass('hide');
        var project = app.projects[ $(this).attr('id') ];
        $('#project-modal-heading').text(project.name);
        $('#project-modal-image').attr('src', project.image);
        $('#project-modal-description').text(project.description);
        $('#project-modal-code').attr('href', project.code);
        $('#project-modal-site').attr('href', project.site);
    });

    ////////// close portfolio click event ///////////////////

    $('#modal-container').on('click', function() {
        console.log( this );
        $('#modal-container').addClass('hide');
    });
});
