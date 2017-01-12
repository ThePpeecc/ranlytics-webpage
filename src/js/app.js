! function() {
    /**
     * Listen to scroll to change header opacity class
     */
    function checkScroll() {
        var startY = $('.navbar').height()/2; //The point where the navbar changes in px

        if ($(window).scrollTop() > startY) {
            $('.navbar').addClass("scrolled");
            $('.navbar').removeClass("unscrolled");
        } else {
            $('.navbar').removeClass("scrolled");
            $('.navbar').addClass("unscrolled");
        }
    }

    if ($('.navbar').length > 0) {
        $(window).on("scroll load resize", function() {
            checkScroll();
        })
    }
    /**
     * Adds the particles on the front page
     * */
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 25,
                "density": {
                    "enable": true,
                    "value_area": 641.362896154328
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 224.4770136540148,
                "color": "#ffffff",
                "opacity": 0.400851810096455,
                "width": 0.80170362019291
            },
            "move": {
                "enable": true,
                "speed": 0.25,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 207.0803197563761,
                    "line_linked": {
                        "opacity": 0.4853470437017995
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 5,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 40.6039842659561,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }, function() {
        console.log('callback - particles.js config loaded');
    });
}()
