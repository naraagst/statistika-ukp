
let key = this.location.pathname.substr(17,3);
let tambah;
let kurang;
let meanTambah="";

const getNavLinkClass = (path) => {
  return this.location.pathname === path ? " active" : "";
};

const getNavLinkClasses = (path) => {
  return this.location.pathname.substr(17,3) === path ? " active" : "";
};

const getChapClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " active" : "";
};

const getShowClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " show" : "";
};

const getDisabledClass = (path) => {
  return this.location.pathname.substr(21, 1) === path ? " disabledhal" : "";
};

const getDisableClass = (path) => {
  return this.location.pathname.substr(22, 1) === path ? " disabledhal" : "lanjut";
};

const getGoToMedianLink = (path) => {
  return this.location.pathname.substr(21, 1) === path ? "median1.html" : "";
};

const getPagesClass = (path) => {
  return this.location.pathname.substr(17) === path ? " active" : "";
};

const getPagesClassMean1 = (path) => {
  return this.location.pathname.substr(17,5) === path ? " active" : "";
};

const getUnlockClass = (path) => {
  return this.location.pathname.substr(17) === path ? " lanjut" : "";
};

document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1${getChapClass("a")} disabled" id="materi1">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown6()" style="height:30px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("a")}" id="myDropdown6">
					  <a href="../a/analisis1.html" class="${getNavLinkClasses("ana")}">Materi</a>
				      <a href="../a/evaluasiA" class="${getNavLinkClass("/Assets/materi/a/evaluasiA/index.html")}">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("b")} disabled" id="materi2">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown()" style="height:50px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("b")}" id="myDropdown">
				      <a href="../b/mean1.html" class="${getNavLinkClasses("mea")} disabled" id="mean">1.  Mean</a>
				      <a href="../b/median1.html" class="${getNavLinkClasses("med")} ${getUnlockClass("mean4.html")} disabled" id="median">2.  Median</a>
				      <a href="../b/modus1.html" class="${getNavLinkClasses("mod")} ${getUnlockClass("median4.html")} disabled" id="modus">3.  Modus</a>
				      <a href="../b/evaluasiB" class="${getNavLinkClass("/Assets/materi/b/evaluasiB/index.html")} ${getUnlockClass("modus3.html")} disabled" id="kuisb">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("c")} disabled" id="materi3">
					<a href=javascript:void(0) class="dropbtn" onclick="dropdown2()" style="height:50px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("c")}" id="myDropdown2">
				      <a href="../c/jangkauan1.html" class="${getNavLinkClasses("jan")}">1. Jangkauan</a>
				      <a href="../c/kuartil1.html" class="${getNavLinkClasses("kua")}">2. Kuartil</a>
				      <a href="../c/interkuartil1.html" class="${getNavLinkClasses("int")}">3. Jangkauan Interkuartil</a>
				      <a href="../c/simpangan1.html" class="${getNavLinkClasses("sim")}">4. Simpangan Kuartil</a>
				      <a href="../c/evaluasiC" class="${getNavLinkClass("/Assets/materi/c/evaluasiC/index.html")}">Kuis</a>
				    </div>
				</li>
				<li class="disabled"  id="latihan"><a href="../latihan" class="${getNavLinkClass("/Assets/materi/Latihan/index.html")}"><i class="fas fa-edit" style="font-size:21px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
				<li class="disabled" id="unduh"><a target="_blank" rel="noopener noreferrer" href="https://shorturl.at/hjJLM"><i class="fas fa-download" style="font-size:22px;color:white;margin-right:10px;margin-top: -14px;"></i>Unduh Materi</a>
				</li>
			</ul>
`;

document.querySelector(".progressbar").innerHTML = `
	<div class="progteks">Progress : </div>
	<div class="kemajuan">
		<div id="kemajuan-bar" class="progAtas" style="width:0%">
			0%
		</div>
	</div>
`;


if (key === "mea"){
	tambah = Number(this.location.pathname.substr(21, 1))+1;
	kurang = Number(this.location.pathname.substr(21, 1))-1;

	if (tambah==4){ nextMateri = "median1.html" } 
	else {nextMateri = "mean"+tambah+".html";}

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="mean${kurang}.html" class="${getDisabledClass("1")}"><< Sebelumnya</a>
					<a href="mean1.html" class="${getPagesClassMean1("mean1")} disabledhal" id="mean1">1</a>
					<a href="mean2.html" class="${getPagesClass("mean2.html")} ${getUnlockClass("mean1.html")} disabledhal" id="mean2">2</a>
					<a href="mean3.html" class="${getPagesClass("mean3.html")} ${getUnlockClass("mean2.html")} disabledhal" id="mean3">3</a>
					<a href="mean4.html" class="${getPagesClass("mean4.html")} ${getUnlockClass("mean3.html")} disabledhal" id="mean4">4</a>
					<a href="mean5.html" class="${getPagesClass("mean5.html")} ${getUnlockClass("mean4.html")} disabledhal" id="mean5">5</a>
					<a href="${meanTambah}" class="lanjut">Selanjutnya >></a>
				</div>
`
} else if (key === "med"){
	tambah = Number(this.location.pathname.substr(23, 1))+1;
	kurang = Number(this.location.pathname.substr(23, 1))-1;

	if (tambah==4){ nextMateri = "modus1.html" } 
	else {nextMateri = "median"+tambah+".html";}

	if (kurang==1){ prevMateri = "mean4.html" } 
	else {prevMateri = "median"+kurang+".html";}	

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="${prevMateri}"><< Sebelumnya</a>
					<a href="median1.html" class="${getPagesClass("median1.html")} disabledhal" id="median1">1</a>
					<a href="median2.html" class="${getPagesClass("median2.html")} ${getUnlockClass("median1.html")} disabledhal" id="median2">2</a>
					<a href="median3.html" class="${getPagesClass("median3.html")} ${getUnlockClass("median2.html")} disabledhal" id="median3">3</a>
					<a href="median4.html" class="${getPagesClass("median4.html")} ${getUnlockClass("median3.html")} disabledhal" id="median4">4</a>
					<a href="${nextMateri}" class="lanjut">Selanjutnya >></a>
				</div>
`
} else if (key === "mod"){
	tambah = Number(this.location.pathname.substr(22, 1))+1;
	kurang = Number(this.location.pathname.substr(22, 1))-1;

	if (tambah==3){ nextMateri = "evaluasiB" } 
	else {nextMateri = "modus"+tambah+".html";}

	if (kurang==1){ prevMateri = "median4.html" } 
	else {prevMateri = "modus"+kurang+".html";}

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="${prevMateri}"><< Sebelumnya</a>
					<a href="modus1.html" class="${getPagesClass("modus1.html")} disabledhal" id="modus1">1</a>
					<a href="modus2.html" class="${getPagesClass("modus2.html")} ${getUnlockClass("modus1.html")} disabledhal" id="modus2">2</a>
					<a href="modus3.html" class="${getPagesClass("modus3.html")} ${getUnlockClass("modus2.html")} disabledhal" id="modus3">3</a>
					<a href="${nextMateri}" class="lanjut">Selanjutnya >></a>
				</div>
`
}
