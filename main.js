window.onload = function() {
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
  
    // Scene 1
    let levels = [{ size: 8192/4 }, { size: 4096/2 }];
    let geometry = new Marzipano.EquirectGeometry(levels);
    let source = Marzipano.ImageUrlSource.fromString(
      'https://raw.githubusercontent.com/zshin1996/test-marzipano/master/assets/lilienstein.jpg',
    );
    let view = new Marzipano.RectilinearView(
      { yaw: 0, pitch: 0, roll: 0, fov: Math.PI / 2 },
      limiter,
    );
    let scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true,
    });
  
    // Scene 2
    let levels1 = [{ size: 1500 }, { size: 1500 }];
    let geometry1 = new Marzipano.EquirectGeometry(levels1);
    let source1 = Marzipano.ImageUrlSource.fromString(
      'https://raw.githubusercontent.com/mistic100/Photo-Sphere-Viewer/dev/example/Bryce-Canyon-By-Jess-Beauchemin.jpg',
    );
    let view1 = new Marzipano.RectilinearView(
      { yaw: 0, pitch: 0, roll: 0, fov: Math.PI / 2 },
      limiter,
    );
    let scene1 = viewer.createScene({
      source: source1,
      geometry: geometry1,
      view: view1,
      pinFirstLevel: true,
    });
  
    // Create swtich hotspot
    let imgHotspot = document.createElement('img');
    imgHotspot.src =
      'https://raw.githubusercontent.com/google/marzipano/master/demos/sample-tour/img/play.png';
    imgHotspot.classList.add('hotspot');
    imgHotspot.addEventListener('click', function() {
      scene1.switchTo();
    });
    let position = { yaw: Math.PI / 4, pitch: Math.PI / 8, roll: Math.PI / 4 };
    // Add hotstop to the first scene's container
    scene.hotspotContainer().createHotspot(imgHotspot, position);
  
    // Show first scene by default
    scene.switchTo();
  };