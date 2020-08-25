const materi1 = document.querySelector("#materi1");
const kuisa = document.querySelector("#kuisa");

const materi2 = document.querySelector("#materi2");
const mean = document.querySelector("#mean");
const median = document.querySelector("#median");
const modus = document.querySelector("#modus");
const kuisb = document.querySelector("#kuisb");

const materi3 = document.querySelector("#materi3");
const jangkauan = document.querySelector("#jangkauan");
const kuartil = document.querySelector("#kuartil");
const interkuartil = document.querySelector("#interkuartil");
const simpangan = document.querySelector("#simpangan");
const kuisc = document.querySelector("#kuisc");

const latihan = document.querySelector("#latihan");
const unduh = document.querySelector("#unduh");


let getPage = (idName, localName) => {
  const getLocal = localStorage.getItem(localName);
  if (getLocal != null) {
      idName.classList.remove("disabled");
  }
};

getPage(materi1, "materi1");
getPage(kuisa, "ana4");

getPage(materi2, "materi2");
getPage(mean, "mean1");
getPage(median, "mean4");
getPage(modus, "median4");
getPage(kuisb, "modus3");

getPage(materi3, "materi3");
getPage(jangkauan, "jangkauan1");
getPage(kuartil, "jangkauan2");
getPage(interkuartil, "kuartil2");
getPage(simpangan, "inter1");
getPage(kuisc, "inter3");

getPage(latihan, "latihanakhir");
getPage(unduh, "unduh");

const kemajuan = localStorage.getItem("progress")
const tampilProgress = kemajuan * (100/27)
const convert = Math.ceil(tampilProgress)
const kemajuanBar = document.querySelector(".progAtas")

kemajuanBar.style.width = `${convert}%`
kemajuanBar.innerHTML = `${convert}%`

// ___________________________________________________________________________________________

const mean1 = document.querySelector("#mean1");
const mean2 = document.querySelector("#mean2");
const mean3 = document.querySelector("#mean3");
const mean4 = document.querySelector("#mean4");
const mean5 = document.querySelector("#mean5");
const median1 = document.querySelector("#median1");
const median2 = document.querySelector("#median2");
const median3 = document.querySelector("#median3");
const median4 = document.querySelector("#median4");
const modus1 = document.querySelector("#modus1");
const modus2 = document.querySelector("#modus2");
const modus3 = document.querySelector("#modus3");
const analisis1 = document.querySelector("#analisis1");
const analisis2 = document.querySelector("#analisis2");
const analisis3 = document.querySelector("#analisis3");
const analisis4 = document.querySelector("#analisis4");
const jangkauan1 = document.querySelector("#jangkauan1");
const jangkauan2 = document.querySelector("#jangkauan2");
const kuartil1 = document.querySelector("#kuartil1");
const kuartil2 = document.querySelector("#kuartil2");
const inter1 = document.querySelector("#inter1");
const inter2 = document.querySelector("#inter2");
const inter3 = document.querySelector("#inter3");

let getPage2 = (idName, localName) => {
  const getLocal = localStorage.getItem(localName);
 
  if (getLocal != null) {
      idName.classList.remove("disabledhal");
  }
};

if(key === "mea"){
	getPage2(mean1, "mean1");
	getPage2(mean2, "mean1");
	getPage2(mean3, "mean2");
	getPage2(mean4, "mean3");
	getPage2(mean5, "mean4");
} else if (key === "med"){
	getPage2(median1, "mean4");
	getPage2(median2, "median1");
	getPage2(median3, "median2");
	getPage2(median4, "median3");
} else if (key === "mod"){
	getPage2(modus1, "median4");
	getPage2(modus2, "modus1");
	getPage2(modus3, "modus2");
} else if (key === "ana"){
	getPage2(analisis1, "materi1");
	getPage2(analisis2, "materi1");
	getPage2(analisis3, "ana2");
	getPage2(analisis4, "ana3");
} else if (key === "jan"){
	getPage2(jangkauan1, "jangkauan1");
	getPage2(jangkauan2, "jangkauan1");
} else if (key === "kua"){
	getPage2(kuartil1, "jangkauan2");
	getPage2(kuartil2, "kuartil1");
} else if (key === "int"){
	getPage2(inter1, "jangkauan2");
	getPage2(inter2, "inter1");
	getPage2(inter3, "inter2");
} else{}

// // _______________________________________________________________________________________________________
// const medianL=document.querySelector("#median")
// const modusL=document.querySelector("#modus")
// const kuisbL=document.querySelector("#kuisb")
// if (this.location.pathname.substr(17) === "mean4.html" && kemajuan === 3){
// 	medianL.classList.add('lanjut')
// } else{
// 	medianL.classList.remove('lanjut')
// }
// if (this.location.pathname.substr(17) === "median4.html" && kemajuan === 7){
// 	modusL.classList.add('lanjut')
// } else{
// 	modusL.classList.remove('lanjut')
// }
// if (this.location.pathname.substr(17) === "modus3.html" && kemajuan === 10){
// 	kuisbL.classList.add('lanjut')
// } else{
// 	kuisbL.classList.remove('lanjut')
// }