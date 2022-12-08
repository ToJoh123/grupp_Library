var scene1 = new THREE.Scene();
var camera1 = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
var renderer1 = new THREE.WebGLRenderer({
  canvas: document.getElementById("c1"),
});
renderer1.setSize(500, 500);
var texture1 = new THREE.TextureLoader().load("assets/texture4.jpg");
var geometry1 = new THREE.BoxGeometry(1, 1, 1);
var material1 = new THREE.MeshBasicMaterial({ map: texture1 });
var cube1 = new THREE.Mesh(geometry1, material1);
scene1.add(cube1);
camera1.position.z = 3;
var animate1 = function () {
  requestAnimationFrame(animate1);
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  renderer1.render(scene1, camera1);
};
animate1();
