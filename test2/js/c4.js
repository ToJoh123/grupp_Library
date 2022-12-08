var scene4 = new THREE.Scene();
var camera4 = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
var renderer4 = new THREE.WebGLRenderer({
  canvas: document.getElementById("c4"),
});
renderer4.setSize(600, 600);
var texture4 = new THREE.TextureLoader().load("assets/texture1.jpg");
var geometry4 = new THREE.BoxGeometry(1, 1, 1);
var material4 = new THREE.MeshBasicMaterial({ map: texture4 });
var cube4 = new THREE.Mesh(geometry4, material4);
scene4.add(cube4);
camera4.position.z = 5;
var animate4 = function () {
  requestAnimationFrame(animate4);
  cube4.rotation.x += 0.01;
  cube4.rotation.y += 0.01;
  renderer4.render(scene4, camera4);
};
animate4();
