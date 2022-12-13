const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);

const renderer1 = new THREE.WebGLRenderer({
  canvas: document.getElementById("c1"),
});

renderer1.setSize(500, 500);

//this will add background image to the scene
const background1 = new THREE.TextureLoader().load(
  "assets/Tom_Johansson_vastness_of_space_galaxies_stars_golden_ratio_tex_5ba5569c-c92f-4c9e-aa6d-55074d747765.png"
);
scene1.background = background1;

//this will add pointLightHelper to the scene
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene1.add(pointLight);
const ambientLight = new THREE.AmbientLight(0x404040);
scene1.add(ambientLight);

const sphereSize = 2;
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
scene1.add(pointLightHelper);
//object
//this code will get the video element from the html
//and then create a texture from that video
//and then create a material from that texture
//and then create a geometry from that material
//and then create a mesh from that geometry
//and then add that mesh to the scene
//and then set the camera position
//and then create a function that will animate the mesh
//and add light to the scene
//and then call that function

const video = document.getElementById("video");
const texture1 = new THREE.VideoTexture(video);
const material1 = new THREE.MeshStandardMaterial({ map: texture1 });
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const cube1 = new THREE.Mesh(geometry1, material1);
scene1.add(cube1);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene1.add(star);
}
camera1.position.z = 3;
const animate1 = function () {
  requestAnimationFrame(animate1);
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  renderer1.render(scene1, camera1);
};

Array(200).fill().forEach(addStar);
animate1();
