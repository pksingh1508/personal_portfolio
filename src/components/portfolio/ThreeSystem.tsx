const initScript = String.raw`
(function bootPortfolioThree() {
  var container = document.getElementById("portfolio-three-system");
  if (!container || container.dataset.ready === "true") return;

  function drawFallback() {
    if (container.dataset.ready === "true") return;
    container.dataset.ready = "true";
    var canvas = document.createElement("canvas");
    canvas.setAttribute("aria-label", "Animated wireframe system node fallback");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);
    var context = canvas.getContext("2d");
    if (!context) return;
    var rotation = 0;

    function resize() {
      var rect = container.getBoundingClientRect();
      var ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function render() {
      var width = container.clientWidth || 1;
      var height = container.clientHeight || 1;
      var cx = width / 2;
      var cy = height / 2;
      var radius = Math.min(width, height) * 0.26;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(56,189,248,0.55)";
      for (var i = 0; i < 100; i += 1) {
        context.fillRect((i * 83) % width, (i * 47) % height, 1.4, 1.4);
      }
      context.strokeStyle = "rgba(34,211,238,0.7)";
      context.lineWidth = 1;
      for (var ring = 0; ring < 3; ring += 1) {
        context.beginPath();
        for (var point = 0; point <= 18; point += 1) {
          var angle = Math.PI * 2 * point / 18 + rotation * (ring + 1) * 0.4;
          var wobble = Math.sin(point * 1.8 + rotation + ring) * 12;
          var x = cx + Math.cos(angle) * (radius + wobble);
          var y = cy + Math.sin(angle) * (radius * (0.78 + ring * 0.08) + wobble);
          if (point === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }
      context.strokeStyle = "rgba(139,92,246,0.55)";
      context.beginPath();
      context.moveTo(cx, cy - radius * 0.42);
      context.lineTo(cx + radius * 0.34, cy);
      context.lineTo(cx, cy + radius * 0.42);
      context.lineTo(cx - radius * 0.34, cy);
      context.closePath();
      context.stroke();
      rotation += 0.012;
      requestAnimationFrame(render);
    }

    resize();
    window.addEventListener("resize", resize);
    render();
  }

  var attempts = 0;
  function init() {
    attempts += 1;
    if (!window.THREE) {
      if (attempts > 120) drawFallback();
      else requestAnimationFrame(init);
      return;
    }

    container.dataset.ready = "true";
    var THREE = window.THREE;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    var geometry = new THREE.IcosahedronGeometry(2, 2);
    var wireframe = new THREE.WireframeGeometry(geometry);
    var material = new THREE.LineBasicMaterial({
      color: 0x22D3EE,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    var sphere = new THREE.LineSegments(wireframe, material);
    scene.add(sphere);

    var coreGeometry = new THREE.OctahedronGeometry(0.5, 0);
    var coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    var core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    var particlesGeometry = new THREE.BufferGeometry();
    var particlesCount = 200;
    var positions = new Float32Array(particlesCount * 3);
    for (var i = 0; i < particlesCount * 3; i += 1) {
      positions[i] = (Math.random() - 0.5) * 8;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    var particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.8
    });
    var particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    function resize() {
      var width = container.clientWidth || 1;
      var height = container.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function animate() {
      sphere.rotation.y += 0.005;
      sphere.rotation.x += 0.002;
      core.rotation.y -= 0.01;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    animate();
  }

  init();
})();`;

const iframeDocument = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * { box-sizing: border-box; }
      html, body, #portfolio-three-system {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
        background: transparent;
      }
      body { display: block; }
    </style>
  </head>
  <body>
    <div id="portfolio-three-system"></div>
    <script defer src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js"></script>
    <script>${initScript.replace("</script>", "<\\/script>")}</script>
  </body>
</html>`;

export default function ThreeSystem() {
  return (
    <iframe
      className="absolute inset-0 h-full w-full border-0 bg-transparent"
      sandbox="allow-scripts"
      srcDoc={iframeDocument}
      title="Animated Three.js wireframe system node"
    />
  );
}
