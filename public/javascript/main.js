window.onload = function () {
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

    let sources = [
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-1.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-2.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-3.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-4.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-5.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-6.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-7.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-8.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-9.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-10.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-11.jpeg',
        'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/Spot-12.jpeg'
    ];
    let levels = [{ size: 4096 / 4 }, { size: 2048 / 2 }];
    let geometry = new Marzipano.EquirectGeometry(levels);
    let view = new Marzipano.RectilinearView(
        { yaw: 0, pitch: 0, roll: 0, fov: Math.PI / 2 },
        limiter,
    );
    var scenes = [];
    sources.forEach(source => {
        let scene = viewer.createScene({
            source: Marzipano.ImageUrlSource.fromString(source),
            geometry: geometry,
            view: view,
            pinFirstLevel: true,
        });
        scenes.push(scene);
    });

    let currentIndex = 0;
    let leftArrow = document.getElementById('buttonArrowLeft');
    let rightArrow = document.getElementById('buttonArrowRight');
    leftArrow.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            scenes[currentIndex].switchTo();
        }
    });
    rightArrow.addEventListener('click', function () {
        if (currentIndex < scenes.length - 1) {
            currentIndex++;
            scenes[currentIndex].switchTo();
        }
    });

    // // Create swtich hotspot
    // let imgHotspot = document.createElement('img');
    // imgHotspot.src =
    //   'https://raw.githubusercontent.com/google/marzipano/master/demos/sample-tour/img/play.png';
    // imgHotspot.classList.add('hotspot');
    // imgHotspot.addEventListener('click', function() {
    //   scene1.switchTo();
    // });
    // let position = { yaw: Math.PI / 4, pitch: Math.PI / 8, roll: Math.PI / 4 };
    // // Add hotstop to the first scene's container
    // scene.hotspotContainer().createHotspot(imgHotspot, position);

    // Show first scene by default
    scenes[currentIndex].switchTo();
};

function sidebar_open() {
    // open sidebar.
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = 'block';

    // hide arrow.
    this.style.display = 'none';
}

function sidebar_close() {
    // open sidebar.
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = 'none';

    // hide arrow.
    var navIcon = document.getElementById("sidebarNavIcon");
    navIcon.child
}