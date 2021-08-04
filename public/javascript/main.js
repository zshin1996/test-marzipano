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

// Set up viewer
const Marzipano = window.Marzipano;
let panoElement = document.getElementById('pano');
let options = {
    controls: {
        mouseViewMode: 'drag',
    },
};
let viewer = new Marzipano.Viewer(panoElement, options);

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

var scenes = [];

window.onload = function () {
    // generate scenes.
    sources.forEach(source => {
        let url = source.source;
        let scene = viewer.createScene({
            source: Marzipano.ImageUrlSource.fromString(url),
            geometry: geometry,
            view: view,
            pinFirstLevel: true,
        });
        scenes.push({
            key: url,
            value: scene
        });
    });

    var quickScene = $('#quickScene');
    // create quick scene.
    let flags = [], output = [], l = sources.length, i;
    for (i = 0; i < l; i++) {
        if (flags[sources[i].parent]) continue;
        flags[sources[i].parent] = true;
        output.push(sources[i].parent);
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
        let source = sources.find(source => source.source == scene.key);
        let name = source.name;
        let parentId = source.parent.replace(/\s/g, "-").toLowerCase() + '-collapse';
        $('#' + parentId + ' ul').append(
            '<li><a href="#" class="link-dark rounded" onclick="ChangeScene(' + scenes.indexOf(scene) + ')"> ' + name + ' </a></li>'
        );

    });

    // Create swtich hotspot
    sources.forEach(source => {
        let url = source.source;
        let scene = scenes.find(scene => scene.key == url).value;
        source.hotspot.forEach(hotspot => {
            let imgHotspot = document.createElement('a');
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

            scene.hotspotContainer().createHotspot(imgHotspot, hotspot.position);
        });
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    // Show first scene by default
    ChangeScene(1);
};

const ChangeScene = function (i) {
    scenes[i].value.switchTo();
};

const OpenSidebar = function() {
    $('#mySidebar').css('display', 'block');
}

const HideSidebar = function() {
    $('#mySidebar').css('display', 'none');
}