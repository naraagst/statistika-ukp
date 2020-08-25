let key = this.location.pathname.substr(17,3);
const getNavLinkClass = (path) => {
  return this.location.pathname === path ? " active" : "";
};

const getChapClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " active" : "";
};

const getShowClass = (path) => {
  return this.location.pathname.substr(15, 1) === path ? " show" : "";
};


document.querySelector(".sidebar").innerHTML = `
			<ul>
				<li><a href="../../../index.html"><i class="fas fa-home" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i>Beranda</a></li>
				<li class="dropdown1${getChapClass("a")}">
					<a href=javascript:void(0) class="dropbtn" id="materi1" onclick="dropdown6()" style="height:50px;">
						<div class="teksmenu">A. Menganalisis Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("a")}" id="myDropdown6">
					  <a href="../A/analisis1.html" class="${getNavLinkClass("/Assets/materi/A/analisis1.html")}">Materi</a>
				      <a href="../A/evaluasiA" class="${getChapClass("a")}" id="kuisa">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("b")}">
					<a href=javascript:void(0) class="dropbtn" id="materi2" onclick="dropdown()" style="height:70px;">
						<div class="teksmenu">B. Ukuran Pemusatan Data </div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("b")}" id="myDropdown">
				      <a href="../B/mean1.html" class="${getNavLinkClass("/Assets/materi/B/mean1.html")}" id="mean">1.  Mean</a>
				      <a href="../B/median1.html" class="${getNavLinkClass("/Assets/materi/B/median1.html")}" id="median">2.  Median</a>
				      <a href="../B/modus1.html" class="${getNavLinkClass("/Assets/materi/B/modus1.html")}" id="modus">3.  Modus</a>
				      <a href="../B/evaluasiB" class="${getChapClass("b")}" id="kuisb">Kuis</a>
				    </div>
				</li>
				<li class="dropdown1 ${getChapClass("c")}">
					<a href=javascript:void(0) class="dropbtn" id="materi3" onclick="dropdown2()" style="height:70px;">
						<div class="teksmenu">C. Ukuran Penyebaran Data</div>
						<div class="icon"><i class="fas fa-angle-down" style="font-size:25px;color:white;margin-right:10px;margin-top: -14px;"></i></div>
					</a>
					<div class="dropdown ${getShowClass("c")}" id="myDropdown2">
				      <a href="../C/jangkauan1.html" class="${getNavLinkClass("/Assets/materi/C/jangkauan1.html")}" id="jangkauan">1. Jangkauan</a>
				      <a href="../C/kuartil1.html" class="${getNavLinkClass("/Assets/materi/C/kuartil1.html")}" id="kuartil">2. Kuartil</a>
				      <a href="../C/interkuartil1.html" class="${getNavLinkClass("/Assets/materi/C/interkuartil1.html")}" id="interkuartil">3. Jangkauan Interkuartil</a>
				      <a href="../C/simpangan1.html" class="${getNavLinkClass("/Assets/materi/C/simpangan1.html")}" id="simpangan">4. Simpangan Kuartil</a>
				      <a href="../C/evaluasiC" class="${getChapClass("c")}" id="kuisc">Kuis</a>
				    </div>
				</li>
				<li><a href="../Latihan" class="${getChapClass("l")}" id="latihan" style="border-bottom:3px solid rgb(0,156,255);"><i class="fas fa-edit" style="font-size:21px;color:white;margin-right:10px;margin-top: -14px;"></i>Latihan</a>
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