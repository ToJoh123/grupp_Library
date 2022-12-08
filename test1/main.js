import THREE from "./three";

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

var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
var renderer3 = new THREE.WebGLRenderer({
  canvas: document.getElementById("c3"),
});
renderer3.setSize(300, 300);
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

var scene4 = new THREE.Scene();
var camera4 = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
var renderer4 = new THREE.WebGLRenderer({
  canvas: document.getElementById("c4"),
});
renderer4.setSize(200, 200);
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
