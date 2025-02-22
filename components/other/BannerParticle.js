import React from 'react';
import Particles from 'react-tsparticles';

function BannerParticle() {
    return (
        <>
            <div id="particles-js">
                <Particles
                    params={
                        {
                            "particles": {
                                "number": {
                                    "value": 15,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#fff"
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
                                        "src": "images/img1.jpg",
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 0.4,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 10,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 2,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "distance": 150,
                                    "color": "#fff",
                                    "opacity": 0.1,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 2,
                                    "direction": "top",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "bubble"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 200
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true,
                            "config_demo": {
                                "hide_card": false,
                                "background_color": "#b61924",
                                "background_image": "",
                                "background_position": "50% 50%",
                                "background_repeat": "no-repeat",
                                "background_size": "cover"
                            }
                        }
                    }
                />
            </div>
        </>
    );
}

export default BannerParticle;
