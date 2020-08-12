const materi1 = document.querySelector("#materi1");
const materi2 = document.querySelector("#materi2");
const materi3 = document.querySelector("#materi3");
const latihan = document.querySelector("#latihan");

let getPage = (idName, localName) => {
  const getLocal = localStorage.getItem(localName);
  // console.log(idName);
  if (getLocal != null) {
      idName.classList.remove("disabled");
  }
};

getPage(materi2, "materi2");
getPage(mean, "mean1");
getPage(median, "mean4");
getPage(modus, "median4");
getPage(kuisb, "modus3");
getPage(unduh, "unduh");

const kemajuan = localStorage.getItem("progress")
const tampilProgress = kemajuan * (100/13)
const convert = Math.ceil(tampilProgress)
console.log(convert)
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

let getPage2 = (idName, localName) => {
  const getLocal = localStorage.getItem(localName);
  // console.log(idName);
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
}

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