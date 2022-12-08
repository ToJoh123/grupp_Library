var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
var renderer3 = new THREE.WebGLRenderer({
  canvas: document.getElementById("c3"),
});
renderer3.setSize(500, 500);
var texture3 = new THREE.TextureLoader().load("assets/texture3.jpg");
var geometry3 = new THREE.BoxGeometry(1, 1, 1);
var material3 = new THREE.MeshBasicMaterial({ map: texture3 });
var cube3 = new THREE.Mesh(geometry3, material3);
scene3.add(cube3);
camera3.position.z = 8;
var animate3 = function () {
  requestAnimationFrame(animate3);
  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;
  renderer3.render(scene3, camera3);
};
animate3();
