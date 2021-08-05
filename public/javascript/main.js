const MainHallData = [
    {
        id: 'mainhall-1',
        name: 'MainHall 1',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Spot-1.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: -50 * Math.PI / 180, pitch: 15 * Math.PI / 180 },
                title: '',
                description: '',
                link: '#',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-4',
            },
            {
                position: { yaw: 35 * Math.PI / 180, pitch: 10 * Math.PI / 180 },
                title: '',
                description: '',
                link: '#',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-3',
            },
            {
                position: { yaw: -2 * Math.PI / 180, pitch: 8 * Math.PI / 180 },
                title: '',
                description: '',
                link: '#',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            }
        ]
    },
    {
        id: 'mainhall-2',
        name: 'MainHall 2',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Spot-2.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: 170 * Math.PI / 180, pitch: 7 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-1',
            },
            {
                position: { yaw: 130 * Math.PI / 180, pitch: 14 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-3',
            },
            {
                position: { yaw: -160 * Math.PI / 180, pitch: 12 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-4',
            },
            {
                position: { yaw: -30 * Math.PI / 180, pitch: 10 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-5',
            },
            {
                position: { yaw: 10 * Math.PI / 180, pitch: 6 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-2',
            },
            {
                position: { yaw: -10 * Math.PI / 180, pitch: 4 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-3',
            }
        ]
    },
    {
        id: 'mainhall-3',
        name: 'MainHall 3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Spot-3.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: -90 * Math.PI / 180, pitch: 5 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            },
            {
                position: { yaw: -120 * Math.PI / 180, pitch: 15 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-2',
            },
            {
                position: { yaw: -60 * Math.PI / 180, pitch: 10 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-5',
            },
            {
                position: { yaw: 10 * Math.PI / 180, pitch: 20 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-6',
            },
            {
                position: { yaw: 90 * Math.PI / 180, pitch: 8 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-4',
            },
            {
                position: { yaw: 130 * Math.PI / 180, pitch: 8 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-1',
            },
            {
                position: { yaw: 65 * Math.PI / 180, pitch: 8 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-7',
            },
        ]
    },
    {
        id: 'mainhall-4',
        name: 'MainHall 4',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Spot-4.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: 100 * Math.PI / 180, pitch: 12 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-1',
            },
            {
                position: { yaw: -125 * Math.PI / 180, pitch: 18 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: false,
                moveTo: 'mainhall-booth-7',
            },
            {
                position: { yaw: 170 * Math.PI / 180, pitch: 7 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-3',
            },
            {
                position: { yaw: -20 * Math.PI / 180, pitch: 20 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-1',
            }
        ]
    },
    {
        id: 'mainhall-booth-1',
        name: 'MainHall Booth 1',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Booth-1.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-4',
            },
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-4',
            },
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-4',
            },
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-4',
            },
        ]
    },
    {
        id: 'mainhall-booth-2',
        name: 'MainHall Booth 2',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Booth-2.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16, roll: Math.PI / 100 },
                title: "",
                description: 'A smart integrated unmanned self-diagnosis wellness kiosk that provides healthcare services. Anytime. Anywhere.',
                link: 'https://www.epod.life/',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            }
        ]
    },
    {
        id: 'mainhall-booth-3',
        name: 'MainHall Booth 3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Booth-3.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16, roll: Math.PI / 100 },
                title: "POD Vital",
                description: 'A smart integrated unmanned self-diagnosis wellness kiosk that provides healthcare services. Anytime. Anywhere.',
                link: 'https://www.epod.life/',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            }
        ]
    },
    {
        id: 'mainhall-booth-4',
        name: 'MainHall Booth 4',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Booth-4.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16, roll: Math.PI / 100 },
                title: "POD Vital",
                description: 'A smart integrated unmanned self-diagnosis wellness kiosk that provides healthcare services. Anytime. Anywhere.',
                link: 'https://www.epod.life/',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            }
        ]
    },
    {
        id: 'mainhall-booth-5',
        name: 'MainHall Booth 5',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Booth-5.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16, roll: Math.PI / 100 },
                title: "POD Vital",
                description: 'A smart integrated unmanned self-diagnosis wellness kiosk that provides healthcare services. Anytime. Anywhere.',
                link: 'https://www.epod.life/',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            }
        ]
    },
    {
        id: 'mainhall-booth-6',
        name: 'MainHall Booth 6',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Booth-6.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16, roll: Math.PI / 100 },
                title: "POD Vital",
                description: 'A smart integrated unmanned self-diagnosis wellness kiosk that provides healthcare services. Anytime. Anywhere.',
                link: 'https://www.epod.life/',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            }
        ]
    },
    {
        id: 'mainhall-booth-7',
        name: 'MainHall Booth 7',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/MainHall-Booth-7.jpeg',
        parent: 'MainHall',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16, roll: Math.PI / 100 },
                title: "POD Vital",
                description: 'A smart integrated unmanned self-diagnosis wellness kiosk that provides healthcare services. Anytime. Anywhere.',
                link: 'https://www.epod.life/',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-2',
            }
        ]
    },
]

const AltaBoothData = [
    {
        id: 'alta-booth-1',
        name: 'Alta Booth 1',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Alta-Spot-1.jpeg',
        parent: 'Alta Booth',
        hotspot: [
            {
                position: { yaw: -150 * Math.PI / 180, pitch: 20 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-4',
            },
            {
                position: { yaw: -10 * Math.PI / 180, pitch: 15 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-2',
            },
            {
                position: { yaw: 130 * Math.PI / 180, pitch: 16 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-6',
            },
        ]
    },
    {
        id: 'alta-booth-2',
        name: 'Alta Booth 2',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Alta-Spot-2.jpeg',
        parent: 'Alta Booth',
        hotspot: [
            {
                position: { yaw: -150 * Math.PI / 180, pitch: 10 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-1',
            },
            {
                position: { yaw: 100 * Math.PI / 180, pitch: 15 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-3',
            },
        ]
    },
    {
        id: 'alta-booth-3',
        name: 'Alta Booth 3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Alta-Spot-3.jpeg',
        parent: 'Alta Booth',
        hotspot: [
            {
                position: { yaw: -85 * Math.PI / 180, pitch: 15 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-2',
            },
            {
                position: { yaw: 180 * Math.PI / 180, pitch: 7 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-4',
            },
        ]
    },
    {
        id: 'alta-booth-4',
        name: 'Alta Booth 4',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Alta-Spot-4.jpeg',
        parent: 'Alta Booth',
        hotspot: [
            {
                position: { yaw: -2 * Math.PI / 180, pitch: 7 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-3',
            },
            {
                position: { yaw: -115 * Math.PI / 180, pitch: 13 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-5',
            },
        ]
    },
    {
        id: 'alta-booth-5',
        name: 'Alta Booth 5',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Alta-Spot-5.jpeg',
        parent: 'Alta Booth',
        hotspot: [
            {
                position: { yaw: 65 * Math.PI / 180, pitch: 12 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-4',
            },
            {
                position: { yaw: -55 * Math.PI / 180, pitch: 10 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-6',
            },
        ]
    },
    {
        id: 'alta-booth-6',
        name: 'Alta Booth 6',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Alta-Spot-6.jpeg',
        parent: 'Alta Booth',
        hotspot: [
            {
                position: { yaw: -140 * Math.PI / 180, pitch: 13 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-4',
            },
            {
                position: { yaw: -95 * Math.PI / 180, pitch: 15 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'alta-booth-1',
            },
        ]
    },
]

const Booth1Data = [
    {
        id: 'booth-1-1',
        name: 'Booth 1-1',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-1-Spot-1.jpeg',
        parent: 'Booth 1',
        hotspot: [
            {
                position: { yaw: -80 * Math.PI / 180, pitch: 20 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-booth-1',
            },
            {
                position: { yaw: 180 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-2',
            },
        ]
    },
    {
        id: 'booth-1-2',
        name: 'Booth 1-2',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-1-Spot-2.jpeg',
        parent: 'Booth 1',
        hotspot: [
            {
                position: { yaw: Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-1',
            },
            {
                position: { yaw: -105 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-3',
            }
        ]
    },
    {
        id: 'booth-1-3',
        name: 'Booth 1-3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-1-Spot-3.jpeg',
        parent: 'Booth 1',
        hotspot: [
            {
                position: { yaw: 85 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-2',
            }
        ]
    },
]

const Booth2Data = [
    {
        id: 'booth-2-1',
        name: 'Booth 2-1',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-2-Spot-1.jpeg',
        parent: 'Booth 2',
        hotspot: [
            {
                position: { yaw: -80 * Math.PI / 180, pitch: 20 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'mainhall-booth-1',
            },
            {
                position: { yaw: 180 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-2',
            },
        ]
    },
    {
        id: 'booth-2-2',
        name: 'Booth 2-2',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-2-Spot-2.jpeg',
        parent: 'Booth 2',
        hotspot: [
            {
                position: { yaw: Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-1',
            },
            {
                position: { yaw: -105 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-3',
            }
        ]
    },
    {
        id: 'booth-1-3',
        name: 'Booth 1-3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-2-Spot-3.jpeg',
        parent: 'Booth 1',
        hotspot: [
            {
                position: { yaw: 85 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-2',
            }
        ]
    },
    {
        id: 'booth-1-3',
        name: 'Booth 1-3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-2-Spot-4.jpeg',
        parent: 'Booth 1',
        hotspot: [
            {
                position: { yaw: 85 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-2',
            }
        ]
    },
    {
        id: 'booth-1-3',
        name: 'Booth 1-3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-2-Spot-5.jpeg',
        parent: 'Booth 1',
        hotspot: [
            {
                position: { yaw: 85 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-2',
            }
        ]
    },
    {
        id: 'booth-1-3',
        name: 'Booth 1-3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Booth-2-Spot-6.jpeg',
        parent: 'Booth 1',
        hotspot: [
            {
                position: { yaw: 85 * Math.PI / 180, pitch: 30 * Math.PI / 180 },
                title: "",
                description: '',
                link: '',
                type: 'travel',
                canMove: true,
                moveTo: 'booth-1-2',
            }
        ]
    }
]

const sources = [
    {
        name: 'Spot 1',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-1.jpeg',
        parent: 'Alta',
        hotspot: [
            {
                position: { yaw: Math.PI / 4, pitch: Math.PI / 16, roll: Math.PI / 100 },
                title: "POD Vital",
                description: 'A smart integrated unmanned self-diagnosis wellness kiosk that provides healthcare services. Anytime. Anywhere.',
                link: 'https://www.epod.life/'
            }
        ]
    },
    {
        name: 'Spot 2',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-2.jpeg',
        parent: 'Alta',
        hotspot: [
            {
                position: { yaw: Math.PI / -16, pitch: Math.PI / 20, roll: Math.PI / 20 },
                title: "POD Refresh",
                description: 'A smart eco-friendly refilling kiosk that auto-mixes and dispenses surface disinfectant liquid, encouraging "Recycle & Refill" using used plastic bottles.',
                link: 'https://www.epod.life/podrefresh'
            },
            {
                position: { yaw: Math.PI / 6, pitch: Math.PI / 10 },
                title: "POD Hi Pro",
                description: 'POD Hi pro is an automatic device to connect with an access control system to perform facial recognition, temperature measurement, hand wash, and automatic door opening. Built-in software allows companies to build databases of employees’ faces and keep records of time, date, and temperature readings, and export data if needed.',
                link: 'https://altasoftware.vn/pod-hi-pro-giu-khong-gian-an-toan-cho-nhan-vien-va-khach-hang/'
            },
            {
                position: { yaw: Math.PI / -6, pitch: Math.PI / 10 },
                title: "Fire Fighting Robot",
                description: '“Warrior” versatile fire fighting. With the ability to cross narrow, steep terrain up to 300, the heat resistance up to 3000­­C helps the robot reach deep into the fire. The robot has a modern sensor and camera system that detects the terrain and fire point. It can spray water in the stream or disperse to create water mist with a flow rate of 40 liters/sec and a range up to 60 meters. Especially effective in dealing with fires and helping to limit the damage caused by fire.',
                link: 'https://altasoftware.vn/pod-hi-pro-giu-khong-gian-an-toan-cho-nhan-vien-va-khach-hang/'
            }
        ]

    },
    {
        name: 'Spot 3',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-3.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 4',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-4.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 5',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-5.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 6',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-6.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 7',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-7.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 8',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-8.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 9',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-9.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 10',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-10.jpeg',
        parent: 'Booth',
        hotspot: []
    },
    {
        name: 'Spot 11',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-11.jpeg',
        parent: 'Main hall',
        hotspot: []
    },
    {
        name: 'Spot 12',
        source: 'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-12.jpeg',
        parent: 'Main hall',
        hotspot: []
    },
];


var allScenes = [];


window.onload = async function () {
    // Set up viewer
    const Marzipano = window.Marzipano;
    let panoElement = document.getElementById('pano');
    let options = {
        controls: {
            mouseViewMode: 'drag',
        },
    };
    let viewer = new Marzipano.Viewer(panoElement, options);

    allScenes = allScenes.concat(await GenerateScene(MainHallData, viewer, true, true));
    allScenes = allScenes.concat(await GenerateScene(AltaBoothData, viewer, true, true));
    // allScenes = allScenes.concat(await GenerateScene(Booth1Data, viewer, true, true));
    // allScenes = allScenes.concat(await GenerateScene(Booth2Data, viewer, true, true));
    // create quick scene.
    // var quickScene = $('#quickScene');
    // let flags = [], output = [], l = sources.length, i;
    // for (i = 0; i < l; i++) {
    //     if (flags[sources[i].parent]) continue;
    //     flags[sources[i].parent] = true;
    //     output.push(sources[i].parent);
    // }

    // output.forEach(parent => {
    //     let parentId = parent.replace(/\s/g, "-").toLowerCase();
    //     quickScene.append(
    //         '<li class="mb-1">' +
    //         '<button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"' +
    //         'data-bs-target="#' + parentId + '-collapse" aria-expanded="true">' +
    //         parent +
    //         '</button>' +
    //         '<div class="collapse show" id="' + parentId + '-collapse" style="">' +
    //         '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">' +
    //         '</ul>' +
    //         '</div>' +
    //         '</li>'
    //     );
    // });

    // scenes.forEach(scene => {
    //     let source = sources.find(source => source.source == scene.key);
    //     let name = source.name;
    //     let parentId = source.parent.replace(/\s/g, "-").toLowerCase() + '-collapse';
    //     $('#' + parentId + ' ul').append(
    //         '<li><a href="#" class="link-dark rounded" onclick="ChangeScene(' + scenes.indexOf(scene) + ')"> ' + name + ' </a></li>'
    //     );

    // });

    // Create swtich hotspot


    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


    // Show first scene by default
    // ChangeScene(1);
    ChangeScene(allScenes, 'mainhall-4');
    // mainhall[0].value.scene.switchTo();
};

const GenerateScene = function (data, viewer, generateHotspot, generateQuickTravel) {
    let scenes = [];

    // Set up zoom limiter
    let limiter = Marzipano.util.compose(
        Marzipano.RectilinearView.limit.vfov(0.698131111111111, 2.09439333333333),
        Marzipano.RectilinearView.limit.hfov(0.698131111111111, 2.09439333333333),
        Marzipano.RectilinearView.limit.pitch(-Math.PI / 2, Math.PI / 2),
    );

    let levels = [{ size: 4096 / 4 }, { size: 2048 / 2 }];
    let geometry = new Marzipano.EquirectGeometry(levels);
    let view = new Marzipano.RectilinearView(
        { yaw: 0, pitch: 0, roll: 0, fov: Math.PI / 2 },
        limiter,
    );

    // generate scenes
    data.forEach(each => {
        let scene = viewer.createScene({
            source: Marzipano.ImageUrlSource.fromString(each.source),
            geometry: geometry,
            view: view,
            pinFirstLevel: true,
        });

        scenes.push({
            key: each.id,
            value: {
                data: each,
                scene: scene
            }
        });
    });

    // generate hotspot
    if (generateHotspot) {
        scenes.forEach(each => {
            each.value.data.hotspot.forEach(hotspot => {
                if (!hotspot.canMove)
                    return;

                let imgHotspot = null;
                if (hotspot.type === 'travel') {
                    imgHotspot = document.createElement('img');
                    imgHotspot.classList.add('hotspot');
                    imgHotspot.src = 'https://icon-library.com/images/walk-icon/walk-icon-9.jpg';
                    imgHotspot.setAttribute('style', "width: 45px; height: 45px;");
                    imgHotspot.addEventListener('click', function () {
                        ChangeScene(allScenes, hotspot.moveTo);
                    });
                }
                else if (hotspot.type === 'info') {
                    imgHotspot = document.createElement('a');
                    imgHotspot.setAttribute('href', hotspot.link)
                    imgHotspot.setAttribute('target', '_blank');
                    imgHotspot.setAttribute('tabindex', '0');
                    imgHotspot.setAttribute('title', hotspot.title);
                    imgHotspot.setAttribute('data-bs-toggle', 'popover');
                    imgHotspot.setAttribute('data-bs-trigger', 'hover focus');
                    imgHotspot.setAttribute('data-bs-content', hotspot.description);

                    let span = document.createElement('span');
                    span.setAttribute('style', 'font-size:38px');
                    imgHotspot.append(span);

                    let i = document.createElement('i');
                    i.classList.add('fas');
                    i.classList.add('fa-info-circle');
                    span.append(i);
                }

                if (imgHotspot != null)
                    each.value.scene.hotspotContainer().createHotspot(imgHotspot, hotspot.position);
            });
        });
    }

    if (generateQuickTravel) {
        // create quick scene.
        var quickScene = $('#quickScene');
        let flags = [], output = [], l = scenes.length, i;
        console.log(scenes);
        for (i = 0; i < l; i++) {
            if (flags[scenes[i].value.data.parent]) continue;
            flags[scenes[i].value.data.parent] = true;
            output.push(scenes[i].value.data.parent);
        }

        output.forEach(parent => {
            let parentId = parent.replace(/\s/g, "-").toLowerCase();
            quickScene.append(
                '<li class="mb-1">' +
                '<button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"' +
                'data-bs-target="#' + parentId + '-collapse" aria-expanded="true">' +
                parent +
                '</button>' +
                '<div class="collapse show" id="' + parentId + '-collapse" style="">' +
                '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">' +
                '</ul>' +
                '</div>' +
                '</li>'
            );
        });

        scenes.forEach(scene => {
            console.log()
            let ul = $('#' + scene.value.data.parent.replace(/\s/g, "-").toLowerCase() + '-collapse ul');
            let name = scene.value.data.name;
            let li = ul.append(
                '<li><a href="#" id="' + scene.key + '" class="link-dark rounded">' + name + ' </a></li>'
            );
            $('#' + scene.key).on('click', () => {
                ChangeScene(allScenes, scene.key);
            })

        });
    }

    return scenes;
};

const ChangeScene = function (scenes, sceneId) {
    let scene = scenes.find(k => k.key === sceneId);
    scene.value.scene.switchTo();
};

const OpenSidebar = function () {
    $('#mySidebar').css('display', 'block');
}

const HideSidebar = function () {
    $('#mySidebar').css('display', 'none');
}