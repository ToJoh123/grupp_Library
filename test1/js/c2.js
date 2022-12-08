var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
var renderer2 = new THREE.WebGLRenderer({
  canvas: document.getElementById("c2"),
});
renderer2.setSize(400, 400);
var texture2 = new THREE.TextureLoader().load("assets/texture2.jpg");
var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material2 = new THREE.MeshBasicMaterial({ map: texture2 });
var cube2 = new THREE.Mesh(geometry2, material2);
scene2.add(cube2);
camera2.position.z = 5;
var animate2 = function () {
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  renderer2.render(scene2, camera2);
};
animate2();
