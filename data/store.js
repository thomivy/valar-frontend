import React from 'react'
import {RiBuilding4Line, RiHotelBedLine, RiPlaneLine, RiReplyLine} from 'react-icons/ri';
import {GiChickenOven, GiHouse, GiPineTree, GiPositionMarker, GiWineGlass} from 'react-icons/gi';
import {
    BsBookmark,
    BsBriefcase,
    BsCalendarEvent,
    BsCheckCircle, BsEye,
    BsGear,
    BsHouseDoor,
    BsListCheck,
    BsMap,
    BsMusicNoteBeamed,
    BsPencil,
    BsPeople
} from 'react-icons/bs';
import {MdClose, MdFitnessCenter, MdStar, MdStarBorder, MdStarHalf} from 'react-icons/md';
import img1 from "../public/images/img1.jpg"; // 263*175
import img2 from "../public/images/img7.jpg"; // 362*242

import authorimg from "../public/images/small-team1.jpg"; // 67*60
import symble1 from "../public/images/symble1.png";
import symble2 from "../public/images/symble2.png";
import symble3 from "../public/images/symble3.png";
import symble4 from "../public/images/symble4.png";
import {TiArrowUnsorted, TiBrush, TiPlane} from "react-icons/ti";
import {
    IoIosCheckmarkCircle,
    IoIosFitness, IoIosRocket, IoMdCut,
    IoMdFitness,
    IoMdMusicalNotes, IoMdPaperPlane,
    IoMdStar,
    IoMdStarHalf
} from "react-icons/io";
import {
    FiBookOpen,
    FiCheck,
    FiCheckCircle, FiExternalLink,
    FiFilter,
    FiHeadphones, FiHeart,
    FiMail,
    FiMap,
    FiMusic,
    FiPlus,
    FiShoppingCart, FiThumbsUp, FiUsers
} from "react-icons/fi";
import {AiOutlineCar, AiOutlineEllipsis, AiOutlineHome, AiOutlineQuestionCircle, AiOutlineUser} from "react-icons/ai";
import team1 from "../public/images/team2.jpg"; // 111*100
import team2 from "../public/images/testi-img1.jpg"; // 106*95
import team3 from "../public/images/testi-img2.jpg"; // 95*85
import team4 from "../public/images/testi-img3.jpg"; // 83*75
import team6 from "../public/images/testi-img4.jpg"; // 78*70
import {GoFile} from "react-icons/go";
import cta2mobileimg from "../public/images/mobile.png";
import logo1 from "../public/images/client-logo.png";
import darklogo from "../public/images/logo2.png";
import {
    FaBehance, FaCampground, FaCogs,
    FaDribbble,
    FaFacebookF, FaInstagram,
    FaLinkedinIn, FaMinus, FaPlus, FaQuoteRight, FaRegComment, FaRegEdit,
    FaRegEnvelope, FaRegHeart, FaRegHospital, FaRegMap,
    FaRegMoneyBillAlt, FaRegTrashAlt, FaSearchDollar, FaSearchPlus, FaSort, FaStethoscope,
    FaTwitter, FaYoutube
} from "react-icons/fa";
import destinationimg1 from "../public/images/img5.jpg";
import flag1 from "../public/images/flag14.png";
import flag2 from "../public/images/flag1.jpg";
import flag3 from "../public/images/flag2.jpg";
import flag4 from "../public/images/flag13.jpg";
import flag5 from "../public/images/flag18.jpg";
import destinationimg6 from "../public/images/img7.jpg";
import flag6 from "../public/images/flag3.jpg";
import flag7 from "../public/images/flag7.jpg";
import flag8 from "../public/images/flag5.png";
import flag9 from "../public/images/flag19.png";
import hiw3videoimg from "../public/images/video-img2.jpg";
import {FcLineChart} from "react-icons/fc";
import dreamimg from "../public/images/img6.jpg"; // 263*165
import hiw5videoimg from "../public/images/video-img3.jpg";
import flag10 from "../public/images/flag10.png";
import flag11 from "../public/images/flag11.png";
import flag12 from "../public/images/flag12.jpg";
import flag13 from "../public/images/flag13.jpg";
import flag14 from "../public/images/flag14.png";
import flag15 from "../public/images/flag15.jpg";
import flag16 from "../public/images/flag16.jpg";
import flag17 from "../public/images/flag17.jpg";
import flag18 from "../public/images/flag18.jpg";
import flag19 from "../public/images/flag19.png";
import flag20 from "../public/images/flag20.png";
import listingdetailsvideoimg from "../public/images/img4.jpg";
import similarimg from "../public/images/img8.jpg"; // 90*90
import breadcrumbimg from "../public/images/bread-bg.jpg"; //1920*838
import userimage from "../public/images/team1.jpg"; // 368*331
import imgboximg from "../public/images/img10.jpg"; // 570*345
import about2img from "../public/images/img2.jpg"; //389*259
import mainimage from "../public/images/video-img.jpg"; // 750*500



const sectiondata = {
    headermenu: [
        {
            title: 'Places',
            path: '/listing-grid',
            dropdown: [
                {
                    title: 'listing grid',
                    path: '/listing-grid'
                },
                {
                    title: 'map view',
                    path: '/list-map-view'
                },
                {
                    title: 'map view 2',
                    path: '/list-map-view2'
                },
                {
                    title: 'listing list',
                    path: '/listing-list'
                },
                {
                    title: 'left sidebar',
                    path: '/list-left-sidebar'
                },
                {
                    title: 'right sidebar',
                    path: '/list-right-sidebar'
                },
                {
                    title: 'listing details',
                    path: '/listing-details'
                },
                {
                    title: 'add listing',
                    path: '/add-listing/new'
                }
            ]
        },
        {
            title: 'categories',
            path: '/all-categories',
            dropdown: [
                {
                    title: 'all categories',
                    path: '/all-categories'
                },
                {
                    title: 'all locations',
                    path: '/all-locations'
                },
                {
                    title: 'top places',
                    path: '/top-place'
                }
            ]
        },
        {
            title: 'communities',
            path: '/communities',
            dropdown: null,
        }

    ],
    herobanners: {
        banner1: {
            titlePrefix: 'Travel using crypto, earn ',
            titleSuffix: ' by listing your space, and connect with your network like never before.',
            titleHighlight: [
                {
                    active: true,
                    text: 'BTC'
                },
                {
                    active: false,
                    text: 'USDC'
                },
                {
                    active: false,
                    text: 'ETH'
                },

            ],
            content: 'See how it works.',
            bgimage: null
        },
        banner2: {
            title: 'Find The Best Place in your city',
            content: 'Dirto helps you find out whats happening in your city, Let\'s explore.',
            categories: [
                {
                    path: '',
                    text: 'Stays',
                    icon: <GiHouse />
                },
                {
                    path: '',
                    text: 'Co-Work',
                    icon: <BsBriefcase />
                },
                {
                    path: '',
                    text: 'Retreats',
                    icon: <FaCampground />
                },
                {
                    path: '',
                    text: 'Communities',
                    icon: <BsPeople />
                },
                {
                    path: '',
                    text: 'Events',
                    icon: <BsCalendarEvent />
                },
                /*
                {
                    path: '',
                    text: 'Events',
                    icon: <BsMusicNoteBeamed />
                },
                {
                    path: '',
                    text: 'Fitness',
                    icon: <IoMdFitness />
                },
                {
                    path: '',
                    text: 'Hotels',
                    icon: <RiHotelBedLine />
                }
                */
            ],
            bgimage: null
        },
        banner3: {
            title: 'What\'s Your Plan Today?',
            content: 'All the top locations – from restaurants and clubs, to galleries, famous places and more...',
            bgimage: null
        },
        banner4: {
            sectitle: 'Find The Best Places To Be',
            seccontent: 'See how it works.',

        },
    },
    categories: {
        featuredcategories: {
            connector: '',
            title: 'Categories',
            items: [
                {
                    path: "#",
                    displaytitle: "🏡  Stays",
                    name: "stays",
                },
                {
                    path: "#",
                    displaytitle: "🗄️  Co-Work",
                    name: "cowork",
                },
                {
                    path: "#",
                    displaytitle: "🏕️  Retreats",
                    name:"retreats",
                },
                {
                    path: "#",
                    displaytitle: "👨‍👩‍👧‍👦  Networks",
                    name: "networks",
                },
                {
                    path: "#",
                    displaytitle: "🎪  Events",
                    name:"events",
                },
                /*
                {
                    path: "#",
                    title: "Events",
                    icon: <BsMusicNoteBeamed />
                },
                {
                    path: "#",
                    title: "Fitness",
                    icon: <MdFitnessCenter />
                },
                {
                    path: "#",
                    title: "Hotels",
                    icon: <RiHotelBedLine />
                }
                */
            ]
        },
        browsecategories: {
            sectitle: 'What do you need to find?',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    id: 1,
                    icon: <GiChickenOven />,
                    title: 'restaurants',
                    listingsNum: 42,
                    cardLink: ''
                },
                {
                    id: 2,
                    icon: <RiHotelBedLine />,
                    title: 'hotels',
                    listingsNum: 22,
                    cardLink: ''
                },
                {
                    id: 3,
                    icon: <FiShoppingCart />,
                    title: 'shopping',
                    listingsNum: 7,
                    cardLink: ''
                },
                /*
                {
                    id: 4,
                    icon: <IoMdCut />,
                    title: 'beauty & Spa',
                    listingsNum: 31,
                    cardLink: ''
                },
                {
                    id: 5,
                    icon: <FaRegHospital />,
                    title: 'Hospital',
                    listingsNum: 33,
                    cardLink: ''
                },
                {
                    id: 6,
                    icon: <BsGear />,
                    title: 'Services',
                    listingsNum: 33,
                    cardLink: ''
                },
                {
                    id: 7,
                    icon: <TiBrush />,
                    title: 'Arts & Design',
                    listingsNum: 31,
                    cardLink: ''
                },
                {
                    id: 8,
                    icon: <BsHouseDoor />,
                    title: 'Real State',
                    listingsNum: 36,
                    cardLink: ''
                },
                {
                    id: 9,
                    icon: <FaStethoscope />,
                    title: 'Health',
                    listingsNum: 22,
                    cardLink: ''
                },
                {
                    id: 10,
                    icon: <FaSearchDollar />,
                    title: 'Jobs',
                    listingsNum: 40,
                    cardLink: ''
                },
                {
                    id: 11,
                    icon: <TiPlane />,
                    title: 'Travels',
                    listingsNum: 13,
                    cardLink: ''
                },
                {
                    id: 12,
                    icon: <FiMusic />,
                    title: 'Events',
                    listingsNum: 10,
                    cardLink: ''
                }
                */
            ]
        },
        browsecategories2: {
            sectitle: 'Categories',
            seccontent: '',
            categories: [
                {
                    img: img1,
                    icon: <GiHouse />,
                    title: 'Stays',
                    cardLink: ''
                },
                {
                    img: img1,
                    icon: <BsBriefcase />,
                    title: 'Co-Work',
                    cardLink: ''
                },
                {
                    img: img1,
                    icon: <FaCampground />,
                    title: 'Retreats',
                    cardLink: ''
                },
                /*
                {
                    img: img1,
                    icon: <FiMusic />,
                    title: 'Events',
                    cardLink: ''
                },
                {
                    img: img1,
                    icon: <FiShoppingCart />,
                    title: 'Shops',
                    cardLink: ''
                },
                {
                    img: img1,
                    icon: <IoIosFitness />,
                    title: 'Fitness',
                    cardLink: ''
                },
                {
                    img: img1,
                    icon: <GiWineGlass />,
                    title: 'Food & Drink',
                    cardLink: ''
                },
                {
                    img: img1,
                    icon: <TiBrush />,
                    title: 'Art & Design',
                    cardLink: ''
                },
                {
                    img: img1,
                    icon: <TiBrush />,
                    title: 'Salons',
                    cardLink: ''
                },

                {
                    img: img1,
                    icon: <BsBriefcase />,
                    title: 'Co-Work',
                    cardLink: ''
                },
                */
            ]
        },
        popularcategories: {
            title: 'Categories',
            lists: [
                {
                    url: '',
                    title: 'Stays'
                },
                {
                    url: '',
                    title: 'Retreats'
                },
                {
                    url: '',
                    title: 'Co-work'
                },
                /* Not using these right now.
                {
                    url: '',
                    title: 'Salon'
                },
                {
                    url: '',
                    title: 'Cleaning'
                }
                */
            ]
        }
    },
    popularcategories: {
        sectitle: 'Categories',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        categories: [
            {
                icon: <GiHouse />,
                title: 'Stays',
                stitle: '',
                url: '',
                img: img1
            },
            {
                icon: <BsBriefcase />,
                title: 'Co-Work',
                stitle: '',
                url: '',
                img: img1
            },
            {
                icon: <FaCampground/>,
                title: 'Retreats',
                stitle: '',
                url: '',
                img: img1
            },
        ],
        morecats: [
            /*
            {
                icon: <TiBrush />,
                title: 'outdo0rs',
                stitle: '20 Listings',
                url: '',
                img: img1
            },
            {
                icon: <TiBrush />,
                title: 'nightlife',
                stitle: '20 Listings',
                url: '',
                img: img1
            },
            {
                icon: <FaRegHospital />,
                title: 'hospitals',
                stitle: '20 Listings',
                url: '',
                img: img1
            },
            {
                icon: <GiPineTree />,
                title: 'adventure',
                stitle: '23 Listings',
                url: '',
                img: img1
            },
            {
                icon: <FiBookOpen />,
                title: 'educations',
                stitle: '40 Listings',
                url: '',
                img: img1
            },
            {
                icon: <AiOutlineCar />,
                title: 'cars',
                stitle: '33 Listings',
                url: '',
                img: img1
            },
            {
                icon: <BsBriefcase />,
                title: 'jobs',
                stitle: '20 Listings',
                url: '',
                img: img1
            },
            {
                icon: <FaRegMoneyBillAlt />,
                title: 'business',
                stitle: '20 Listings',
                url: '',
                img: img1
            }
            */
        ]
    },
    populardestination: {
        sectitle: 'Discover Popular Destination',
        seccontent: 'Explore most popular destination and places, Morbi convallis bibendum urna ut viverra. Maecenas,',
        destinations: [
            {
                img: destinationimg1,
                cityFlag: flag1,
                cityName: 'AUS',
                listingTxt: '12 listings',
                boxCol: '4',
                cardUrl: ''
            },
            {
                img: img1,
                cityFlag: flag2,
                cityName: 'NYC',
                listingTxt: '22 listings',
                boxCol: '4',
                cardUrl: ''
            },
            {
                img: img1,
                cityFlag: flag3,
                cityName: 'LA',
                listingTxt: '32 listings',
                boxCol: '4',
                cardUrl: ''
            },
            {
                img: img1,
                cityFlag: flag4,
                cityName: 'CDMX',
                listingTxt: '44 listings',
                boxCol: '3',
                cardUrl: ''
            },
            /*
            {
                img: img1,
                cityFlag: flag5,
                cityName: 'Costa Rica',
                listingTxt: '48 listings',
                boxCol: '3',
                cardUrl: ''
            },
            {
                img: destinationimg6,
                cityFlag: flag6,
                cityName: 'Australia',
                listingTxt: '50 listings',
                boxCol: '3',
                cardUrl: ''
            },
            {
                img: destinationimg6,
                cityFlag: flag7,
                cityName: 'New Zealand ',
                listingTxt: '14 listings',
                boxCol: '3',
                cardUrl: ''
            },
            {
                img: destinationimg6,
                cityFlag: flag8,
                cityName: 'France',
                listingTxt: '20 listings',
                boxCol: '6',
                cardUrl: ''
            },
            {
                img: destinationimg6,
                cityFlag: flag9,
                cityName: 'Italy',
                listingTxt: '14 listings',
                boxCol: '6',
                cardUrl: ''
            }
            */
        ],
        viewmorebtn: 'View All Destinations',
        viewmorebtnurl: '/all-locations'
    },
    locations: [
        {
            img: flag1,
            title: 'United states (2)',
            titleUrl: ''
        },
        {
            img: flag2,
            title: 'London (4)',
            titleUrl: ''
        },
        {
            img: flag3,
            title: 'Australia (7)',
            titleUrl: ''
        },
        {
            img: flag4,
            title: 'Japan (9)',
            titleUrl: ''
        },
        {
            img: flag5,
            title: 'France (12)',
            titleUrl: ''
        },
        {
            img: flag6,
            title: 'Russia (14)',
            titleUrl: ''
        },
        {
            img: flag7,
            title: 'New Zealand (17)',
            titleUrl: ''
        },
        {
            img: flag8,
            title: 'India (19)',
            titleUrl: ''
        },
        {
            img: flag9,
            title: 'Netherlands (15)',
            titleUrl: ''
        },
        {
            img: flag10,
            title: 'Sweden (17)',
            titleUrl: ''
        },
        {
            img: flag11,
            title: 'Saudi Arabia (29)',
            titleUrl: ''
        },
        {
            img: flag12,
            title: 'Scotland (10)',
            titleUrl: ''
        },
        {
            img: flag13,
            title: 'Canada (43)',
            titleUrl: ''
        },
        {
            img: flag14,
            title: 'Mexico (45)',
            titleUrl: ''
        },
        {
            img: flag15,
            title: 'Bangladesh (50)',
            titleUrl: ''
        },
        {
            img: flag16,
            title: 'South Africa (60)',
            titleUrl: ''
        },
        {
            img: flag17,
            title: 'Pakistan (48)',
            titleUrl: ''
        },
        {
            img: flag18,
            title: 'Costa Rica (33)',
            titleUrl: ''
        },
        {
            img: flag19,
            title: 'Italy (44)',
            titleUrl: ''
        },
        {
            img: flag20,
            title: 'Thailand (55)',
            titleUrl: ''
        }
    ],
/*     howitworks: {
        hiw1: {
            sectitle: 'Plan The Vacation of Your Dreams',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    id: 1,
                    icon: <FiMap />,
                    title: 'Find Interesting Place',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                },
                {
                    id: 2,
                    icon: <FiMail />,
                    title: 'Contact a Few authors',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                },
                {
                    id: 3,
                    icon: <AiOutlineUser />,
                    title: 'Make a Reservation',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                }
            ],
        },
        hiw2: {
            sectitle: 'What We Offer',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    active: false,
                    icon: <BsMap />,
                    title: 'Great Places',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                },
                {
                    active: false,
                    icon: <GiChickenOven />,
                    title: 'Great Restaurants',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                },
                {
                    active: false,
                    icon: <RiHotelBedLine />,
                    title: 'Great Hotels',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                },
                {
                    active: true,
                    icon: <AiOutlineEllipsis />,
                    title: 'And More...',
                    description: 'There are many variations of passages of Lorem Ipsum available.'
                }
            ]
        },
        hiw3: {
            sectitle: 'How Can I Earn Money with Dirto?',
            seccontent: 'Dirto provides the various ways that help you can earn money from your site. Morbi convallis bibendum urna ut viverra.',

            items: [
                {
                    id: 1,
                    icon: <FaRegMoneyBillAlt />,
                    title: 'Paid Listings',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                },
                {
                    id: 2,
                    icon: <FcLineChart />,
                    title: 'Promoted Listings',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                },
                {
                    id: 3,
                    icon: <FaRegHeart />,
                    title: 'Paid Claim Listings',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.'
                }
            ]
        },
        hiw4: {
            sectitle: 'Why Choose Us',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    icon: <FiCheck />,
                    title: 'We Are Professional',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
                },
                {
                    icon: <FiCheck />,
                    title: 'Best Service Guarantee',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
                },
                {
                    icon: <FiCheck />,
                    title: 'We Are Trusted and Secured',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
                },
                {
                    icon: <FiCheck />,
                    title: 'Online Support 24/7 ',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
                }
            ]
        },
        hiw5: {
            sectitle: 'Get Started With Dirto!',
            seccontent: 'Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.',
            items: [
                {
                    id: 1,
                    icon: <BsPencil />,
                    title: 'Pick a Keyword',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                },
                {
                    id: 2,
                    icon: <GiPositionMarker />,
                    title: 'Select Location',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                },
                {
                    id: 3,
                    icon: <TiArrowUnsorted />,
                    title: 'Select Category',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                },
                {
                    id: 4,
                    icon: <FiCheck />,
                    title: 'View Results',
                    desc: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam',
                }
            ],

        },
        hiw6: {
            sectitle: 'How Dirto Works',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    id: 1,
                    icon: <FaSearchPlus />,
                    title: 'Find a Place',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                },
                {
                    id: 2,
                    icon: <FaRegMap />,
                    title: 'Select a location',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                },
                {
                    id: 3,
                    icon: <FaSort />,
                    title: 'Select a Category',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                },
                {
                    id: 4,
                    icon: <FiCheckCircle />,
                    title: 'See Result',
                    description: 'Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam'
                }
            ]
        },
        hiw7: {
            sectitle: 'Why Choose Us',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            items: [
                {
                    icon: <FiHeadphones />,
                    title: '24/7 Hours Support',
                    desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
                },
                {
                    icon: <FaCogs />,
                    title: 'Admin Panel',
                    desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
                },
                {
                    icon: <FiThumbsUp />,
                    title: 'Mobile friendly',
                    desc: 'There are many variations of passages of Lorem Ipsum available. Aenean a quam luctus, finibus tellus'
                }
            ]
        }
    }, */
    placesgrid: [
        {
            bedge: 'New Open',
            title: 'Elegant House',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG4.jpeg',
            categories: 'stays',
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5',
            usdPrice:'700'
        },
        {
            bedge: 'Closed',
            title: 'Beach House',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG3.jpeg',
            categories: 'stays',
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'1000'
        },
        {
            bedge: 'New Open',
            title: 'Cozy House',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG2.jpeg',
            categories: 'stays',
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'2000'
        },
        {
            bedge: 'New Open',
            title: 'Cafe Office',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG4.jpeg',
            categories: 'cowork',
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5',
            usdPrice:'5000'
        },
        {
            bedge: 'Closed',
            title: 'Tower Office',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG6.jpeg',
            categories: 'cowork',
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'200'
        },
        {
            bedge: 'New Open',
            title: 'Hacker Office',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG9.jpeg',
            categories: 'cowork',
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'100'
        },
        {
            bedge: 'New Open',
            title: 'Camp Davidt',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG8.jpeg',
            categories: 'retreats',
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5',
            usdPrice:'1500'
        },
        {
            bedge: 'Closed',
            title: 'Camp Maroon',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG7.jpeg',
            categories: 'retreats',
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'2000'
        },
        {
            bedge: 'New Open',
            title: 'Camp Govendor',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG6.jpeg',
            categories: 'retreats',
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'3500'
        },
        {
            bedge: 'New Open',
            title: 'Camp Mabry',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG5.jpeg',
            categories: 'retreats',
            cardType: 'Restaurant',
            cardTypeIcon: <GiChickenOven />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '204',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.5',
            usdPrice:'4000'
        },
        {
            bedge: 'Closed',
            title: 'Lovely House',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG4.jpeg',
            categories: 'stays',
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'275'
        },
        {
            bedge: 'New Open',
            title: 'Office Space',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG3.jpeg',
            categories: 'cowork',
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'650'
        },
        {
            bedge: 'Closed',
            title: 'Camp Plaza',
            titleIcon: '',
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG2.jpeg',
            categories: 'retreats',
            cardType: 'Travel',
            cardTypeIcon: <RiPlaneLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'1400'
        },
        {
            bedge: 'New Open',
            title: 'Cabin Home',
            titleIcon: <IoIosCheckmarkCircle />,
            titleUrl: '/listing-details',
            stitle: 'Bishop Avenue, New York',
            image: '/images/placeImages/PLIMG5.jpeg',
            categories: 'stays',
            cardType: 'Hotel',
            cardTypeIcon: <RiHotelBedLine />,
            author: authorimg,
            authorUrl: '',
            number: '(492) 492-4828',
            website: 'www.mysitelink.com',
            date: 'Posted 1 month ago',
            view: '248',
            ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
            ],
            ratingNum: '4.6',
            usdPrice:'1239'
        },
    ],
    listing: {
        sidebar: {
            widgetFilterCategory: {
                title: 'Filter by Category',
                items: [
                    {
                        id: 1,
                        cat: 'Travel',
                        catNum: 11
                    },
                    {
                        id: 2,
                        cat: 'Arts',
                        catNum: 22
                    },
                    {
                        id: 3,
                        cat: 'Technology',
                        catNum: 9
                    },
                    {
                        id: 4,
                        cat: 'Fashion',
                        catNum: 11
                    },
                    {
                        id: 5,
                        cat: 'Technology',
                        catNum: 12
                    },
                    {
                        id: 6,
                        cat: 'Lifestyle',
                        catNum: 48
                    },
                    {
                        id: 7,
                        cat: 'Design',
                        catNum: 23
                    },
                    {
                        id: 8,
                        cat: 'Computer',
                        catNum: 28
                    },
                    {
                        id: 9,
                        cat: 'Jobs',
                        catNum: 24
                    },
                    {
                        id: 10,
                        cat: 'Real Estates',
                        catNum: 40
                    },
                    {
                        id: 11,
                        cat: 'Clothing',
                        catNum: 23
                    },
                    {
                        id: 12,
                        cat: 'Beauty & Spa',
                        catNum: 18
                    },
                    {
                        id: 13,
                        cat: 'Event',
                        catNum: 65
                    },
                    {
                        id: 14,
                        cat: 'Health & Fitness',
                        catNum: 34
                    },
                    {
                        id: 15,
                        cat: 'Restaurants',
                        catNum: 20
                    }
                ]
            },
            widgetFilterTags: {
                title: 'Filter by Tags',
                tags: [
                    {
                        path: '',
                        title: 'technology'
                    },
                    {
                        path: '',
                        title: 'fashion'
                    },
                    {
                        path: '',
                        title: 'art'
                    },
                    {
                        path: '',
                        title: 'design'
                    },
                    {
                        path: '',
                        title: 'food'
                    },
                    {
                        path: '',
                        title: 'development'
                    },
                    {
                        path: '',
                        title: 'marketing'
                    },
                    {
                        path: '',
                        title: 'video'
                    },
                    {
                        path: '',
                        title: 'music'
                    },
                    {
                        path: '',
                        title: 'lifestyle'
                    },
                    {
                        path: '',
                        title: 'adventure'
                    }
                ]
            },
            widgetFilterFeatures: {
                title: 'Filter by Features',
                features: [
                    {
                        id: 1,
                        text: 'Elevator in building'
                    },
                    {
                        id: 2,
                        text: 'Friendly Workspace'
                    },
                    {
                        id: 3,
                        text: 'Instant Book'
                    },
                    {
                        id: 4,
                        text: 'Wireless Internet'
                    },
                    {
                        id: 5,
                        text: 'Free Parking On Premises'
                    },
                    {
                        id: 6,
                        text: 'Free Parking On Street'
                    },
                    {
                        id: 7,
                        text: 'Smoking Allowed'
                    },
                    {
                        id: 8,
                        text: 'Events'
                    },
                    {
                        id: 9,
                        text: 'Wheelchair Accessible'
                    },
                    {
                        id: 10,
                        text: 'Alarm System'
                    },
                    {
                        id: 11,
                        text: 'Electricity'
                    },
                    {
                        id: 12,
                        text: 'Attached Garage'
                    },
                    {
                        id: 13,
                        text: 'Security Cameras'
                    },
                ]
            },
            widgetSortby: {
                title: 'Sort by',
                items: [
                    {
                        id: 1,
                        title: 'Best sellers'
                    },
                    {
                        id: 2,
                        title: 'Newest'
                    },
                    {
                        id: 3,
                        title: 'Best Rated'
                    },
                    {
                        id: 4,
                        title: 'Oldest'
                    }
                ]
            },
            widgetPostedby: {
                title: 'Posted by',
                items: [
                    {
                        title: 'Dealer'
                    },
                    {
                        title: 'individual'
                    },
                    {
                        title: 'Reseller'
                    }
                ]
            },
        },
        listinglists: [
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Travel',
                cardTypeIcon: <RiPlaneLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Travel',
                cardTypeIcon: <RiPlaneLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
        ]
    },
    listingDetails: {
        title: 'Tasty Hand-Pulled Noodles',
        description: 'Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        descriptiontitle: 'Description',
        featurestitle: 'Features',
        featureslists: [
            {
                icon: <BsCheckCircle />,
                title: 'Instant Noodles'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Smoking Allowed'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Bike Parking'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Wireless Internet'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Street Parking'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Accepts Credit Cards'
            }
        ],
        contactinfos: {
            title: 'Contact Information',
            address: '101 East Parkview Road, New York',
            email: 'example@gmail.com',
            number: '+7(111)123456789',
            website: 'www.techydevs.com',
            websiteUrl: 'https://techydevs.com',
            socials: [
                {
                    icon: <FaFacebookF />,
                    title: 'facebook',
                    url: 'https://facebook.com'
                },
                {
                    icon: <FaTwitter />,
                    title: 'twitter',
                    url: 'https://twitter.com'
                },
                {
                    icon: <FaInstagram />,
                    title: 'instagram',
                    url: 'https://instagram.com'
                },
                {
                    icon: <FaLinkedinIn />,
                    title: 'linkedinIn',
                    url: 'https://linkedin.com'
                },
                {
                    icon: <FaYoutube />,
                    title: 'youtube',
                    url: 'https://youtube.com'
                }
            ]
        },
        comments: [
            {
                img: team1,
                name: 'Adam Smith',
                date: 'Reviewed 2 Days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ],
                replyBtn: 'Reply',
                replyBtnIcon: <RiReplyLine />,
                replyComments: [
                    {
                        img: team1,
                        name: 'Julian Smith',
                        date: 'Reviewed 3 Days ago',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                        stars: [
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStar />,
                            <MdStarHalf />,
                        ],
                        replyBtn: 'Reply',
                        replyBtnIcon: <RiReplyLine />,
                    }
                ]
            },
            {
                img: team1,
                name: 'Matt Derry',
                date: 'Reviewed 4 Days ago',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                ],
                replyBtn: 'Reply',
                replyBtnIcon: <RiReplyLine />,
                replyComments: []
            }
        ],
        sidebar: {
            widgetAuthor: {
                authorImg: team2,
                authorName: 'Mark Williamson',
                date: 'Posted 3 Days ago',
                address: '101 Parkview, New York',
                email: 'example@gmail.com',
                number: '+7(111)123456789',
                website: 'www.techydevs.com',
                websiteUrl: 'https://techydevs.com',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaDribbble />,
                        url: 'https://dribbble.com'
                    },
                    {
                        icon: <FaBehance />,
                        url: 'https://behance.be'
                    }
                ]
            },
            widgetStaticsInfo: {
                title: 'Statics info',
                lists: [
                    {
                        icon: <BsListCheck />,
                        text: '12 Listings'
                    },
                    {
                        icon: <MdStarBorder />,
                        text: '4.4 Ratings'
                    },
                    {
                        icon: <BsBookmark />,
                        text: '24 Bookmark'
                    },
                    {
                        icon: <BsEye />,
                        text: '745 Views'
                    },
                    {
                        icon: <FiExternalLink />,
                        text: '120 Share'
                    },
                    {
                        icon: <FaRegComment />,
                        text: '20 Comments'
                    },
                    {
                        icon: <FiHeart />,
                        text: '120 Likes'
                    }
                ]
            },
            widgetOpenHours: {
                title: 'Opening Hours',
                stitle: 'now open',
                items: [
                    {
                        day: 'Monday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Tuesday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Wednesday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Thursday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Friday',
                        time: '9am - 5pm',
                        close: false,
                    },
                    {
                        day: 'Sat-Sun',
                        time: 'Closed',
                        close: true,
                    }
                ]
            },
            widgetCategories: {
                title: 'Categories',
                lists: [
                    {
                        cat: 'Restaurant',
                        catNum: 11,
                        url: ''
                    },
                    {
                        cat: 'Shop',
                        catNum: 32,
                        url: ''
                    },
                    {
                        cat: 'Fitness',
                        catNum: 21,
                        url: ''
                    },
                    {
                        cat: 'Event',
                        catNum: 24,
                        url: ''
                    },
                    {
                        cat: 'Bar',
                        catNum: 14,
                        url: ''
                    },
                    {
                        cat: 'Salon',
                        catNum: 11,
                        url: ''
                    },
                    {
                        cat: 'Beauty',
                        catNum: 10,
                        url: ''
                    },
                ]
            },
            widgetTags: {
                title: 'Tags Cloud',
                lists: [
                    {
                        text: 'Travel',
                        url: ''
                    },
                    {
                        text: 'Restaurant',
                        url: ''
                    },
                    {
                        text: 'Gym',
                        url: ''
                    },
                    {
                        text: 'Food',
                        url: ''
                    },
                    {
                        text: 'Office',
                        url: ''
                    },
                    {
                        text: 'Bar',
                        url: ''
                    },
                    {
                        text: 'Health',
                        url: ''
                    },
                    {
                        text: 'Car Parking',
                        url: ''
                    },
                    {
                        text: 'Nightlife',
                        url: ''
                    },
                    {
                        text: 'Doctor',
                        url: ''
                    },
                    {
                        text: 'Bike Parking',
                        url: ''
                    },
                ]
            },
            widgetFollowConnect: {
                title: 'Follow & Connect',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaDribbble />,
                        url: 'https://dribbble.com'
                    },
                    {
                        icon: <FaBehance />,
                        url: 'https://behance.be'
                    },
                ]
            }
        }
    },
    userprofile: {
        sidebar: {
            img: team2,
            name: 'Mark Williamson',
            date: 'Joined 4 years ago',
            address: '101 Parkview, New York',
            number: '+7(111)123456789',
            email: 'example@gmail.com',
            website: 'www.techydevs.com',
            websiteUrl: 'https://techydevs.com',
            socials: [
                {
                    icon: <FaFacebookF />,
                    url: 'https://facebook.com'
                },
                {
                    icon: <FaTwitter />,
                    url: 'https://twitter.com'
                },
                {
                    icon: <FaInstagram />,
                    url: 'https://instagram.com'
                },
                {
                    icon: <FaDribbble />,
                    url: 'https://dribbble.com'
                },
                {
                    icon: <FaBehance />,
                    url: 'https://behance.be'
                }
            ]
        }
    },
    dashboard: {
        breadcrumbimg: breadcrumbimg,
        cards: [
            {
                img: img2,
                title: 'Favorite Place Food Bank',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Beach Blue Boardwalk',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Hotel Govendor',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Favorite Place Food Bank',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Beach Blue Boardwalk',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: img2,
                title: 'Hotel Govendor',
                subtitle: 'Bishop Avenue, New York',
                editTxt: 'Edit',
                editIcon: <FaRegEdit />,
                deleteTxt: 'Delete',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            }
        ],
        userImg: userimage,
        userName: 'Mark Williamson',
        userbio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
        address: '101 Parkview, New York',
        phoneNum: '+7(111)123456789',
        website: 'www.techydevs.com',
    },
    teamdata: {
        sectitle: 'Our Expert Team Members',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        teams: [
            {
                img: userimage,
                title: 'Kamal Ahmed',
                titleUrl: '',
                stitle: 'Business Consultant',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
            {
                img: userimage,
                title: 'Kamran Ahmed',
                titleUrl: '',
                stitle: 'Photographer',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
            {
                img: userimage,
                title: 'Tanbir Ahmed',
                titleUrl: '',
                stitle: 'Co-manager associated',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
            {
                img: userimage,
                title: 'Juhen Ahmed',
                titleUrl: '',
                stitle: 'Director',
                socials: [
                    {
                        icon: <FaFacebookF />,
                        url: 'https://facebook.com'
                    },
                    {
                        icon: <FaTwitter />,
                        url: 'https://twitter.com'
                    },
                    {
                        icon: <FaInstagram />,
                        url: 'https://instagram.com'
                    },
                    {
                        icon: <FaLinkedinIn />,
                        url: 'https://linkedin.com'
                    }
                ]
            },
        ]
    },
    pricingplan: [
        {
            icon: <IoMdPaperPlane />,
            title: 'Basic Plan',
            price: '49',
            currency: '$',
            mo: 'Per Month',
            features: [
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'One Listing',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: '90 Days Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Non-Featured',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Limited Support',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Average Price Range',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Business Hours',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Lifetime Availability',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Featured In Search Results',
                }
            ],
            buttonTxt: 'Continue',
            buttonUrl: '',
            active: false
        },
        {
            icon: <RiPlaneLine />,
            title: 'Advanced Plan',
            price: '99',
            currency: '$',
            mo: 'Per Month',
            features: [
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'One Listing',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: '90 Days Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Non-Featured',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Limited Support',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Average Price Range',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Business Hours',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Lifetime Availability',
                },
                {
                    icon: <MdClose />,
                    iconClr: 'text-danger',
                    title: 'Featured In Search Results',
                }
            ],
            buttonTxt: 'Continue',
            buttonUrl: '',
            active: true
        },
        {
            icon: <IoIosRocket />,
            title: 'Enterprise Plan',
            price: '149',
            currency: '$',
            mo: 'Per Month',
            features: [
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'One Listing',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: '90 Days Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Non-Featured',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Limited Support',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Average Price Range',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Business Hours',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Lifetime Availability',
                },
                {
                    icon: <FiCheck />,
                    iconClr: 'text-success',
                    title: 'Featured In Search Results',
                }
            ],
            buttonTxt: 'Continue',
            buttonUrl: '',
            active: false
        }
    ],
    aboutdata: {
        imagebox: [
            {
                img: imgboximg,
                title: 'Careers',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo',
                cardLink: ''
            },
            {
                img: imgboximg,
                title: 'Newsroom',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo',
                cardLink: ''
            },
            {
                img: imgboximg,
                title: 'Investor Relations',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo',
                cardLink: ''
            }
        ],
        aboutst2: {
            title: 'Welcome to the Dirto Business Directory Service and a Public Company',
            content1: 'Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend.',
            content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.',
            items: [
                {
                    img: about2img,
                    boxClass: 'mt-4'
                },
                {
                    img: about2img,
                    boxClass: ''
                },
                {
                    img: about2img,
                    boxClass: 'mt-4'
                },
                {
                    img: about2img,
                    boxClass: ''
                }
            ]
        }
    },
    mostvisitedplaces: {
        sectitle: 'Most Visited Places',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        places: [
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img1,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                websiteUrl: 'https://example.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Travel',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'sticky band party',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Event',
                cardTypeIcon: <IoMdMusicalNotes />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.4'
            },
            {
                bedge: 'Closed',
                title: 'Sena Clothing Shopping Mall',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Shop',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: img2,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            }
        ]
    },
    recommendedplaces: {
        sectitle: 'Places We Recommend You Visit',
        seccontent: 'Handpicked places by our team,Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,',
        items: [
            {
                bedge: 'New Open',
                title: 'Favorite Place Food Bank',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: destinationimg6,
                cardType: 'Restaurant',
                cardTypeIcon: <GiChickenOven />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'Closed',
                title: 'beach blue boardwalk',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: destinationimg6,
                cardType: 'Travel',
                cardTypeIcon: <RiPlaneLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'New Open',
                title: 'Hotel Govendor',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'Bishop Avenue, New York',
                image: destinationimg6,
                cardType: 'Hotel',
                cardTypeIcon: <RiHotelBedLine />,
                author: authorimg,
                authorUrl: '',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'Posted 1 month ago',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
        ]
    },
    dreamplaces: {
        sectitle: 'Explore Your Dream Places',
        seccontent: 'Explore most popular destination and places, Morbi convallis bibendum urna ut viverra. Maecenas,',
        places: [
            {
                img: dreamimg,
                country: 'united states',
                badge: 'Explore',
                placeNum: 5,
                listingNum: 250,
                cardColumn: 6,
                cardLink: ''
            },
            {
                img: dreamimg,
                country: 'united kingdom',
                badge: 'Explore',
                placeNum: 7,
                listingNum: 220,
                cardColumn: 6,
                cardLink: ''
            },
            {
                img: dreamimg,
                country: 'Australia',
                badge: 'Explore',
                placeNum: 8,
                listingNum: 80,
                cardColumn: 4,
                cardLink: ''
            },
            {
                img: dreamimg,
                country: 'New zealand',
                badge: 'Explore',
                placeNum: 9,
                listingNum: 190,
                cardColumn: 4,
                cardLink: ''
            },
            {
                img: dreamimg,
                country: 'Russia',
                badge: 'Explore',
                placeNum: 11,
                listingNum: 110,
                cardColumn: 4,
                cardLink: ''
            }
        ],
        loadmoretext: 'Load More'
    },
    funfacts: {
        funfact1: {
            sectitle: 'Numbers Say Everything',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            counteritems: [
                {
                    id: '1',
                    start: 0,
                    end: 150,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Projects Completed'
                },
                {
                    id: '2',
                    start: 0,
                    end: 3040,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Happy Clients'
                },
                {
                    id: '3',
                    start: 0,
                    end: 2020,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Cup of Coffee'
                },
                {
                    id: '4',
                    start: 0,
                    end: 350,
                    duration: '8',
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+',
                    title: 'Awards Winning'
                }
            ]
        },
        funfact2: {
            sectitle: 'Numbers Say Everything',
            seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            counteritems: [
                {
                    id: '1',
                    title: 'Projects Completed',
                    buttonTxt: 'join now',
                    buttonUrl: '',
                    start: 0,
                    end: 1150,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                },
                {
                    id: '2',
                    title: 'Happy Clients',
                    buttonTxt: 'join now',
                    buttonUrl: '',
                    start: 0,
                    end: 3040,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                },
                {
                    id: '3',
                    title: 'Cup of Coffee',
                    buttonTxt: 'join now',
                    buttonUrl: '',
                    start: 0,
                    end: 2020,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                },
                {
                    id: '4',
                    title: 'Awards Winning',
                    buttonTxt: 'join now',
                    buttonUrl: '',
                    start: 0,
                    end: 350,
                    duration: 8,
                    separator: '',
                    decimal: ',',
                    prefix: ' ',
                    suffix: '+'
                }
            ]
        },
        funfact3: [
            {
                id: 1,
                title: 'New Visitors Every Week',
                start: 0,
                end: 250,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: 2,
                title: 'Happy customers every year',
                start: 0,
                end: 3040,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: 3,
                title: 'Awards Won',
                start: 0,
                end: 172,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: ''
            },
            {
                id: 4,
                title: 'New Listing Every Week',
                start: 0,
                end: 150,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            }
        ]
    },
    accordions: {
        sectitle: 'Listing faqs',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        items: [
            {
                title: 'What is a novel coronavirus?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Can I create a free listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'How much time does it take to get approval?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Do I have to commit to a yearly subscription?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Is my listing secure?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'How can i Delete listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'What is listing site?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Why people chose this listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: ''
            },
        ]
    },
    iconboxes: {
        iconlist1: [
            {
                id: 1,
                icon: <FiUsers />,
                title: 'Ask Community',
                subtitle: 'Get help from 1M+ Revolut users'
            },
            {
                id: 2,
                icon: <FiBookOpen />,
                title: 'Read our blog',
                subtitle: 'Follow the latest news and stories'
            },
            {
                id: 3,
                icon: <AiOutlineQuestionCircle />,
                title: 'Get help in the app',
                subtitle: 'Just head to Help in the app'
            },
        ]
    },
    calltoactions: {
        cta1: {
            title: 'Dirto is the best way to find & discover great local businesses',
            content: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero',
            btntext: 'Create Account',
            btnurl: '/SignUp',
            shapes: [
                {
                    img: symble1
                },
                {
                    img: symble2
                },
                {
                    img: symble3
                },
                {
                    img: symble4
                }
            ]
        },
        cta2: {
            title: 'Dirto Android and IOS App is Available!',
            content: 'Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet Lorem ipsum dolor sit amet.',
            img: cta2mobileimg,
            featurelists: [
                {
                    icon: <GoFile />,
                    text: 'Real Time Listing'
                },
                {
                    icon: <FiFilter />,
                    text: 'Budget Filter For Budget'
                },
                {
                    icon: <AiOutlineQuestionCircle />,
                    text: 'Notification Price Reduction'
                }
            ],
            shapes: [
                {
                    img: symble1
                },
                {
                    img: symble2
                },
                {
                    img: symble3
                },
                {
                    img: symble4
                }
            ]
        },
        cta3: {
            title: 'Dirto is the best way to find & discover great local businesses',
            content: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero',
            btntext: 'Create Account',
            btnurl: '/SignUp'
        },
        cta4: {
            title: 'Want to Join with us?',
            content: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
            btntext: 'Join Now',
            btnurl: ''
        },
        newsletters: {
            title: 'Subscribe to Newsletter!',
            content: 'Subscribe to get latest updates and information.',
            btntext: 'Subscribe',
            inputplaceholder: 'Enter your email'
        }
    },
    contactdata: {
        title: 'Our Office',
        img: destinationimg1,
        desc: 'Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Praesent eros turpis, commodo vel justo at',
        address: 'USA 27TH Brooklyn NY',
        phoneNum: '+7(111)123456789',
        email: 'contact@dirto.com',
        opendays: 'Monday To Friday',
        opendaytime: '9am - 7pm',
        closeday: 'Saturday To Sunday',
        mapoverlay: {
            address: 'Melbourne, Australia, 105 South',
            city: 'Park Avenue',
            number: '2800 256 508',
            number2: '666 777 888',
            email1: 'needhelp@dirto.com',
            email2: 'inquiry@dirto.com'
        }
    },
    testimonialdata: {
        sectitle: 'What Our Users Said',
        seccontent: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors.',
        sliders: [
            {
                id: 1,
                img: team1,
                title: 'Richard Doe',
                designation: 'united states',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: 2,
                img: team1,
                title: 'Denwen Evil',
                designation: 'united kingdom',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: 3,
                img: team1,
                title: 'Collis Pong',
                designation: 'melbourne, australia',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            }
        ],
        tmimage: [
            {
                tmimg: team1
            },
            {
                tmimg: team2
            },
            {
                tmimg: team3
            },
            {
                tmimg: team4
            },
            {
                tmimg: team1
            },
            {
                tmimg: team6
            }
        ]
    },
 
    authors: {
        sectitle: 'Meet Top Authors',
        seccontent: 'Top 700+ famous authors on the Dirto. consectetur adipisicing elit Adipisci culpa possimus quis voluptatibus!',
        sliders: [
            {
                authorImg: team2,
                authorName: 'Steven Harvey',
                city: 'Australia',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '120',
                followers: '49',
                following: '49',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Alex Smith',
                city: 'United States',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Sirazz Khan',
                city: 'United Kingdom',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Daniel Wave',
                city: 'Italy',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Juhen Villa',
                city: 'Bangladesh',
                authorStatus: 'Elite Author',
                powerauthor: false,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Daniel Villa',
                city: 'Costa Rica',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            },
            {
                authorImg: team2,
                authorName: 'Jhon Doe',
                city: 'France',
                authorStatus: 'Power Author',
                powerauthor: true,
                listingNum: '130',
                followers: '55',
                following: '24',
                buttonTxt: 'Follow',
                buttonIcon: <FiPlus />
            }
        ],
    },
    clientlogos: [
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
    ],
    Footerdata: {
        Footerlogo: darklogo,
        Footerdesc: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros',
        sociallinks: [
            {
                icon: <FaFacebookF />,
                url: 'https://facebook.com'
            },
            {
                icon: <FaTwitter />,
                url: 'https://twitter.com'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://linkedin.com'
            },
            {
                icon: <FaDribbble />,
                url: 'https://dribbble.com'
            },
            {
                icon: <FaBehance />,
                url: 'https://behance.com'
            },
        ],
        Footerquicklinks: {
            title: 'Quick Links',
            links: [
                {
                    path: '/about',
                    text: 'about us'
                },
                {
                    path: '/SignUp',
                    text: 'sign up'
                },
                {
                    path: '/login',
                    text: 'log in'
                },
                {
                    path: '/add-listing/new',
                    text: 'add listing'
                },
                {
                    path: '/contact',
                    text: 'contact us'
                },
                {
                    path: '/pricing',
                    text: 'pricing'
                }
            ]
        },
        Footercategories: {
            title: 'Categories',
            links: [
                {
                    path: '',
                    text: 'Shops'
                },
                {
                    path: '',
                    text: 'Hotels'
                },
                {
                    path: '',
                    text: 'Restaurants'
                },
                {
                    path: '',
                    text: 'Bars'
                },
                {
                    path: '',
                    text: 'Events'
                },
                {
                    path: '',
                    text: 'Fitness'
                }
            ]
        },
        Footercontact: {
            title: 'Contact With Us',
            lists: [
                {
                    icon: <AiOutlineHome />,
                    text: '12345 Little Baker St, Melbourne'
                },
                {
                    icon: <FiHeadphones />,
                    text: '+ 61 23 8093 3400'
                },
                {
                    icon: <FaRegEnvelope />,
                    text: 'dirto@gmail.com'
                }
            ]
        },
        copyright: {
            menus: [
                {
                    path: '',
                    title: 'Terms & Conditions'
                },
                {
                    path: '',
                    title: 'Privacy Policy'
                },
                {
                    path: '',
                    title: 'Help Center'
                }
            ],
            languages: [
                'English',
                'Bangladesh',
                'Nepal',
                'America',
                'Arabic',
                'England',
            ],
            currency: [
                'BTC',
                'ETH',
                'USDC'
            ]
        }
    }

}
export default sectiondata
