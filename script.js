const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Sky blue

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(10, 10, 20);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);

// Ground
const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.MeshPhongMaterial({color: 0x228B22});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Buildings
function createBuilding(x, z, color, name) {
  const geometry = new THREE.BoxGeometry(4, 6, 4);
  const material = new THREE.MeshPhongMaterial({color});
  const building = new THREE.Mesh(geometry, material);
  building.position.set(x, 3, z);
  scene.add(building);
}

createBuilding(-10, 0, 0x8B0000, "Home");
createBuilding(0, 0, 0x4682B4, "Office");
createBuilding(10, 0, 0xDAA520, "Theater");

// Truman Stick Figure (simplified with a box head and body)
function createTruman(x, z) {
  const group = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.4, 0.4, 2),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  body.position.y = 1;

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.5),
    new THREE.MeshPhongMaterial({color: 0xffcc99})
  );
  head.position.y = 2.4;

  group.add(body);
  group.add(head);
  group.position.set(x, 0, z);

  scene.add(group);
  return group;
}

const truman = createTruman(-10, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

animate();
