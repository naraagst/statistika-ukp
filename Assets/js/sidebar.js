
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
  return this.location.pathname.substr(25, 1) === path ? " disabledhal" : "";
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

const getUnlockClassMean1 = (path) => {
  return this.location.pathname.substr(17,5) === path ? " lanjut" : "";
};

const getPagesClassAnalisis1 = (path) => {
  return this.location.pathname.substr(17,9) === path ? " active" : "";
};

const getUnlockClassAnalisis1 = (path) => {
  return this.location.pathname.substr(17,9) === path ? " lanjut" : "";
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
				      <a href="../a/evaluasiA" class="${getNavLinkClass("/Assets/materi/a/evaluasiA/index.html")} ${getUnlockClass("analisis5.html")} disabled" id="kuisa">Kuis</a>
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
				      <a href="../c/jangkauan1.html" class="${getNavLinkClasses("jan")} disabled" id="jangkauan">1. Jangkauan</a>
				      <a href="../c/kuartil1.html" class="${getNavLinkClasses("kua")} ${getUnlockClass("jangkauan2.html")} disabled" id="kuartil">2. Kuartil</a>
				      <a href="../c/interkuartil1.html" class="${getPagesClass("interkuartil1.html")} ${getPagesClass("interkuartil3.html")} ${getUnlockClass("kuartil2.html")} disabled" id="interkuartil">3. Jangkauan Interkuartil</a>
				      <a href="../c/interkuartil2.html" class="${getPagesClass("interkuartil2.html")} ${getPagesClass("interkuartil3.html")} ${getUnlockClass("interkuartil1.html")} disabled" id="simpangan">4. Simpangan Kuartil</a>
				      <a href="../c/evaluasiC" class="${getNavLinkClass("/Assets/materi/c/evaluasiC/index.html")} disabled" id="kuisc">Kuis</a>
				    </div>
				</li>
				<li class="disabled"  id="latihan"><a href="../latihan" class="${getNavLinkClass("/Assets/materi/Latihan/index.html")}"><i class="fas fa-edit" style="font-size:21px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
				</li>
				<li class="disabled" id="unduh"><a target="_blank" rel="noopener noreferrer" href="https://shorturl.at/zF357"><i class="fas fa-download" style="font-size:22px;color:white;margin-right:10px;margin-top: -14px;"></i>Unduh Materi</a>
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

	if (kurang==0){ prevMateri = "../a/analisis5.html" } 
	else {prevMateri = "mean"+kurang+".html";}

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="${prevMateri}"><< Sebelumnya</a>
					<a href="mean1.html" class="${getPagesClassMean1("mean1")} disabledhal" id="mean1">1</a>
					<a href="mean2.html" class="${getPagesClass("mean2.html")} ${getUnlockClassMean1("mean1")} disabledhal" id="mean2">2</a>
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

	if (kurang==0){ prevMateri = "mean4.html" } 
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

	if (kurang==0){ prevMateri = "median4.html" } 
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
} else if (key === "ana"){
	tambah = Number(this.location.pathname.substr(25, 1))+1;
	kurang = Number(this.location.pathname.substr(25, 1))-1;

	if (tambah==4){ nextMateri = "evaluasiA" } 
	else {nextMateri = "analisis"+tambah+".html";}

	if (kurang==0){ prevMateri = "#" } 
	else {prevMateri = "analisis"+kurang+".html";}

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="${prevMateri}"  class="${getDisabledClass("1")}"><< Sebelumnya</a>
					<a href="analisis1.html" class="${getPagesClassAnalisis1("analisis1")} disabledhal" id="analisis1">1</a>
					<a href="analisis2.html" class="${getPagesClass("analisis2.html")} ${getUnlockClassAnalisis1("analisis1")} disabledhal" id="analisis2">2</a>
					<a href="analisis4.html" class="${getPagesClass("analisis4.html")} ${getUnlockClass("analisis2.html")} disabledhal" id="analisis3">3</a>
					<a href="analisis5.html" class="${getPagesClass("analisis5.html")} ${getUnlockClass("analisis4.html")} disabledhal" id="analisis4">4</a>
					<a href="${nextMateri}" class="lanjut">Selanjutnya >></a>
				</div>
`
} else if (key === "jan"){
	tambah = Number(this.location.pathname.substr(26, 1))+1;
	kurang = Number(this.location.pathname.substr(26, 1))-1;

	if (tambah==2){ nextMateri = "kuartil1.html" } 
	else {nextMateri = "jangkauan"+tambah+".html";}

	if (kurang==0){ prevMateri = "../b/modus3.html" } 
	else {prevMateri = "jangkauan"+kurang+".html";}

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="${prevMateri}"><< Sebelumnya</a>
					<a href="jangkauan1.html" class="${getPagesClass("jangkauan1.html")} disabledhal" id="jangkauan1">1</a>
					<a href="jangkauan2.html" class="${getPagesClass("jangkauan2.html")} ${getUnlockClass("jangkauan1.html")} disabledhal" id="jangkauan2">2</a>
					<a href="${nextMateri}" class="lanjut">Selanjutnya >></a>
				</div>
`
} else if (key === "kua"){
	tambah = Number(this.location.pathname.substr(24, 1))+1;
	kurang = Number(this.location.pathname.substr(24, 1))-1;

	if (tambah==2){ nextMateri = "interkuartil1.html" } 
	else {nextMateri = "kuartil"+tambah+".html";}

	if (kurang==0){ prevMateri = "jangkauan2.html" } 
	else {prevMateri = "kuartil"+kurang+".html";}

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="${prevMateri}"><< Sebelumnya</a>
					<a href="kuartil1.html" class="${getPagesClass("kuartil1.html")} disabledhal" id="kuartil1">1</a>
					<a href="kuartil2.html" class="${getPagesClass("kuartil2.html")} ${getUnlockClass("kuartil1.html")} disabledhal" id="kuartil2">2</a>
					<a href="${nextMateri}" class="lanjut">Selanjutnya >></a>
				</div>
`
} else if (key === "int"){
	tambah = Number(this.location.pathname.substr(29, 1))+1;
	kurang = Number(this.location.pathname.substr(29, 1))-1;

	if (tambah==2){ nextMateri = "evaluasiC" } 
	else {nextMateri = "interkuartil"+tambah+".html";}

	if (kurang==0){ prevMateri = "jangkauan2.html" } 
	else {prevMateri = "interkuartil"+kurang+".html";}

	document.querySelector(".halaman").innerHTML=`
				<div class="btn-group">
					<a href="${prevMateri}"><< Sebelumnya</a>
					<a href="interkuartil1.html" class="${getPagesClass("interkuartil1.html")} disabledhal" id="inter1">1</a>
					<a href="interkuartil2.html" class="${getPagesClass("interkuartil2.html")} ${getUnlockClass("interkuartil1.html")} disabledhal" id="inter2">2</a>
					<a href="interkuartil3.html" class="${getPagesClass("interkuartil3.html")} ${getUnlockClass("interkuartil2.html")} disabledhal" id="inter3">3</a>
					<a href="${nextMateri}" class="lanjut">Selanjutnya >></a>
				</div>
`
}

