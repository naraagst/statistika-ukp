const getNavLinkClass = (path) => {
  return this.location.pathname.substr(9) === path ? " active" : "";
};

document.querySelector(".sidebar").innerHTML = `
	<ul>
		<li><a href="kuisa.html" class="${getNavLinkClass("kuisa.html")}">1. Kuis A</a></li>
		<li><a href="kuisb.html" class="${getNavLinkClass("kuisb.html")}">2. Kuis B</a></li>
		<li><a href="kuisc.html" class="${getNavLinkClass("kuisc.html")}">3. Kuis C</a></li>
		<li><a href="latihan.html" class="${getNavLinkClass("latihan.html")}">4. Latihan</a></li>
	</ul>
`
function sidebar() {
  let content = document.querySelector(".content");
  content.classList.toggle("opa");
  document.getElementById("sidebar").classList.toggle("show");
}