/** @format */

if (top != self) {
  window.parent.location.replace(window.location.href);
  console.log("check pass");
} else {
  console.log("check not pass");
}
