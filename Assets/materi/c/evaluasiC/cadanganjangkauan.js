document.addEventListener("DOMContentLoaded", function () {
  let content1 = document.querySelector("#content1");
  let nextSoal = document.querySelectorAll(".nextSoal");
  let progress = document.querySelector(".progress-bar");
  let tabContent = document.querySelectorAll(".tabcontent");
  let currentTab = 1;
  content1.style.display = "block";

  for (let f = 0; f < nextSoal.length; f++) {
    nextSoal[f].addEventListener("click", nextSlide);
  }

  function nextSlide() {
    tabContent[currentTab - 1].style.display = "none";
    currentTab++;
    let tab = document.querySelector("#content" + currentTab);
    tab.style.display = "block";
  }

  // Soal 1
  let tampilSoalSatu = document.querySelector("#soal");
  let tampilGbrSatu = document.querySelector("#gbr");
  let answerSatu = document.querySelector("#jwbsiswa");
  let cekSatu = document.querySelector("#cekjwb");
  // let ulangSatu = document.querySelector("#ulang-1");
  let benarSatu = document.querySelector("#hasilbenar");
  // let hintSatu = document.querySelector("#hint-1");
  let elmMatrik = "";
  // let showHintSatu = "";

  // hintSatu.style.display = "none";
  // ulangSatu.classList.add("disabled");
  function loadSoalSatu() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalSatu = JSON.parse(this.responseText);
        let rand = Math.floor(Math.random() * soalSatu.soal_jangkauan.length);

        tampilSoalSatu.innerHTML = soalSatu.soal_jangkauan[rand].soal;
        tampilGbrSatu.innerHTML = soalSatu.soal_jangkauan[rand].gbr;
        elmMatrik = soalSatu.soal_jangkauan[rand].jwb;
        // showHintSatu = soalSatu.soal_satu[rand].hint;
      }
    };
    xhttp.open("GET", "soal.json", true);
    xhttp.send();
  } 

  loadSoalSatu();

  // ulangSatu.addEventListener("click", ulangSoalSatu);

  answerSatu.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekSatu.click();
    }
  });

  cekSatu.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerSatu.length; i++) {
    //   if (answerSatu[i].value != elmMatrik[i]) {
    //     answerSatu[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerSatu[i].setAttribute("disabled", "");
    // }

    if (answerSatu.value != elmMatrik) {
      answerSatu.style.border = "2px solid red"
      benarSatu.style = "color:red;font-weight:bold"
      benarSatu.innerHTML = `
        ${
          answerSatu.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerSatu.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      // hintSatu.style.display = "";
      // ulangSatu.classList.remove("disabled");
      // hintSatu.addEventListener("click", function () {
      //   answerSatu[0].value = showHintSatu;
      //   answerSatu[0].style.border = "2px solid Orange";
      //   cekSatu.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerSatu.length; i++) {
      //   answerSatu[i].style.border = "2px solid green";
      //   answerSatu[i].setAttribute("disabled", "");
      // }
      benarSatu.style = "color:red;font-weight:bold"
      benarSatu.innerHTML = `
          Benar! Jawabannya adalah <strong>${elmMatrik}</strong>.
      `;
      progress.style.width = "20%";
      nextSoal[0].removeAttribute("disabled", "");
    }
  });

  // function ulangSoalSatu() {
  //   for (let i = 0; i < answerSatu.length; i++) {
  //     answerSatu[i].value = "";
  //     answerSatu[i].style.border = "1px solid grey";
  //     answerSatu[i].removeAttribute("disabled", "");
  //     cekSatu.classList.remove("disabled");
  //   }
  //   benarSatu.innerHTML = "";
  //   hintSatu.style.display = "none";
  // }

  // Soal 2
  let tampilSoalDua = document.querySelector("#soal2");
  let tampilGbrDua = document.querySelector("#gbr2");
  let answerDua = document.querySelector("#jwbsiswa2");
  let cekDua = document.querySelector("#cekjwb2");
  // let ulangDua = document.querySelector("#ulang-1");
  let benarDua = document.querySelector("#hasilbenar2");
  // let hintDua = document.querySelector("#hint-1");
  let elmMatrikDua = "";
  // let showHintDua = "";

  // hintDua.style.display = "none";
  // ulangDua.classList.add("disabled");
  function loadSoalDua() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalDua = JSON.parse(this.responseText);
        let rand = Math.floor(Math.random() * soalDua.soal_jangkauan.length);

        tampilSoalDua.innerHTML = soalDua.soal_jangkauan[rand].soal;
        tampilGbrDua.innerHTML = soalDua.soal_jangkauan[rand].gbr;
        elmMatrikDua = soalDua.soal_jangkauan[rand].jwb;
        // showHintDua = soalDua.soal_Dua[rand].hint;
      }
    };
    xhttp.open("GET", "soal.json", true);
    xhttp.send();
  } 

  loadSoalDua();

  // ulangDua.addEventListener("click", ulangSoalDua);

  answerDua.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekDua.click();
    }
  });

  cekDua.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerDua.length; i++) {
    //   if (answerDua[i].value != elmMatrik[i]) {
    //     answerDua[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerDua[i].setAttribute("disabled", "");
    // }

    if (answerDua.value != elmMatrik) {
      answerDua.style.border = "2px solid red"
      benarDua.style = "color:red;font-weight:bold"
      benarDua.innerHTML = `
        ${
          answerDua.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerDua.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      // hintDua.style.display = "";
      // ulangDua.classList.remove("disabled");
      // hintDua.addEventListener("click", function () {
      //   answerDua[0].value = showHintDua;
      //   answerDua[0].style.border = "2px solid Orange";
      //   cekDua.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerDua.length; i++) {
      //   answerDua[i].style.border = "2px solid green";
      //   answerDua[i].setAttribute("disabled", "");
      // }
      benarDua.style = "color:red;font-weight:bold"
      benarDua.innerHTML = `
          Benar! Jawabannya adalah <strong>${elmMatrikDua}</strong>.
      `;
      progress.style.width = "40%";
      nextSoal[1].removeAttribute("disabled", "");
    }
  });

  // function ulangSoalDua() {
  //   for (let i = 0; i < answerDua.length; i++) {
  //     answerDua[i].value = "";
  //     answerDua[i].style.border = "1px solid grey";
  //     answerDua[i].removeAttribute("disabled", "");
  //     cekDua.classList.remove("disabled");
  //   }
  //   benarDua.innerHTML = "";
  //   hintDua.style.display = "none";
  // }

  //Soal 3
  let tampilSoalTiga = document.querySelector("#soal3");
  let tampilGbrTiga = document.querySelector("#gbr3");
  let answerTiga = document.querySelector("#jwbsiswa3");
  let cekTiga = document.querySelector("#cekjwb3");
  // let ulangTiga = document.querySelector("#ulang-1");
  let benarTiga = document.querySelector("#hasilbenar3");
  // let hintTiga = document.querySelector("#hint-1");
  let elmMatrikTiga = "";
  // let showHintTiga = "";

  // hintTiga.style.display = "none";
  // ulangTiga.classList.add("disabled");
  function loadSoalTiga() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalTiga = JSON.parse(this.responseText);
        let rand = Math.floor(Math.random() * soalTiga.soal_jangkauan.length);

        tampilSoalTiga.innerHTML = soalTiga.soal_jangkauan[rand].soal;
        tampilGbrTiga.innerHTML = soalTiga.soal_jangkauan[rand].gbr;
        elmMatrikTiga = soalTiga.soal_jangkauan[rand].jwb;
        // showHintTiga = soalTiga.soal_Tiga[rand].hint;
      }
    };
    xhttp.open("GET", "soal.json", true);
    xhttp.send();
  } 

  loadSoalTiga();

  // ulangTiga.addEventListener("click", ulangSoalTiga);

  answerTiga.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekTiga.click();
    }
  });

  cekTiga.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerTiga.length; i++) {
    //   if (answerTiga[i].value != elmMatrik[i]) {
    //     answerTiga[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerTiga[i].setAttribute("disabled", "");
    // }

    if (answerTiga.value != elmMatrik) {
      answerTiga.style.border = "2px solid red"
      benarTiga.style = "color:red;font-weight:bold"
      benarTiga.innerHTML = `
        ${
          answerTiga.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerTiga.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      // hintTiga.style.display = "";
      // ulangTiga.classList.remove("disabled");
      // hintTiga.addEventListener("click", function () {
      //   answerTiga[0].value = showHintTiga;
      //   answerTiga[0].style.border = "2px solid Orange";
      //   cekTiga.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerTiga.length; i++) {
      //   answerTiga[i].style.border = "2px solid green";
      //   answerTiga[i].setAttribute("disabled", "");
      // }
      benarTiga.style = "color:red;font-weight:bold"
      benarTiga.innerHTML = `
          Benar! Jawabannya adalah <strong>${elmMatrikTiga}</strong>.
      `;
      progress.style.width = "40%";
      nextSoal[1].removeAttribute("disabled", "");
    }
  });

  // function ulangSoalTiga() {
  //   for (let i = 0; i < answerTiga.length; i++) {
  //     answerTiga[i].value = "";
  //     answerTiga[i].style.border = "1px solid grey";
  //     answerTiga[i].removeAttribute("disabled", "");
  //     cekTiga.classList.remove("disabled");
  //   }
  //   benarTiga.innerHTML = "";
  //   hintTiga.style.display = "none";
  // }

  //Soal Empat
  let tampilSoalEmpat = document.querySelector("#soal4");
  let tampilGbrEmpat = document.querySelector("#gbr4");
  let answerEmpat = document.querySelector("#jwbsiswa4");
  let cekEmpat = document.querySelector("#cekjwb4");
  // let ulangEmpat = document.querySelector("#ulang-1");
  let benarEmpat = document.querySelector("#hasilbenar4");
  // let hintEmpat = document.querySelector("#hint-1");
  let elmMatrikEmpat = "";
  // let showHintEmpat = "";

  // hintEmpat.style.display = "none";
  // ulangEmpat.classList.add("disabled");
  function loadSoalEmpat() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalEmpat = JSON.parse(this.responseText);
        let rand = Math.floor(Math.random() * soalEmpat.soal_jangkauan.length);

        tampilSoalEmpat.innerHTML = soalEmpat.soal_jangkauan[rand].soal;
        tampilGbrEmpat.innerHTML = soalEmpat.soal_jangkauan[rand].gbr;
        elmMatrikEmpat = soalEmpat.soal_jangkauan[rand].jwb;
        // showHintEmpat = soalEmpat.soal_Empat[rand].hint;
      }
    };
    xhttp.open("GET", "soal.json", true);
    xhttp.send();
  } 

  loadSoalEmpat();

  // ulangEmpat.addEventListener("click", ulangSoalEmpat);

  answerEmpat.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekEmpat.click();
    }
  });

  cekEmpat.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerEmpat.length; i++) {
    //   if (answerEmpat[i].value != elmMatrik[i]) {
    //     answerEmpat[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerEmpat[i].setAttribute("disabled", "");
    // }

    if (answerEmpat.value != elmMatrik) {
      answerEmpat.style.border = "2px solid red"
      benarEmpat.style = "color:red;font-weight:bold"
      benarEmpat.innerHTML = `
        ${
          answerEmpat.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerEmpat.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      // hintEmpat.style.display = "";
      // ulangEmpat.classList.remove("disabled");
      // hintEmpat.addEventListener("click", function () {
      //   answerEmpat[0].value = showHintEmpat;
      //   answerEmpat[0].style.border = "2px solid Orange";
      //   cekEmpat.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerEmpat.length; i++) {
      //   answerEmpat[i].style.border = "2px solid green";
      //   answerEmpat[i].setAttribute("disabled", "");
      // }
      benarEmpat.style = "color:red;font-weight:bold"
      benarEmpat.innerHTML = `
          Benar! Jawabannya adalah <strong>${elmMatrikEmpat}</strong>.
      `;
      progress.style.width = "40%";
      nextSoal[1].removeAttribute("disabled", "");
    }
  });

  // function ulangSoalEmpat() {
  //   for (let i = 0; i < answerEmpat.length; i++) {
  //     answerEmpat[i].value = "";
  //     answerEmpat[i].style.border = "1px solid grey";
  //     answerEmpat[i].removeAttribute("disabled", "");
  //     cekEmpat.classList.remove("disabled");
  //   }
  //   benarEmpat.innerHTML = "";
  //   hintEmpat.style.display = "none";
  // }

  //Soal Lima
  let tampilSoalLima = document.querySelector("#soal5");
  let tampilGbrLima = document.querySelector("#gbr5");
  let answerLima = document.querySelector("#jwbsiswa5");
  let cekLima = document.querySelector("#cekjwb5");
  // let ulangLima = document.querySelector("#ulang-1");
  let benarLima = document.querySelector("#hasilbenar5");
  // let hintLima = document.querySelector("#hint-1");
  let elmMatrikLima = "";
  // let showHintLima = "";

  // hintLima.style.display = "none";
  // ulangLima.classList.add("disabled");
  function loadSoalLima() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let soalLima = JSON.parse(this.responseText);
        let rand = Math.floor(Math.random() * soalLima.soal_jangkauan.length);

        tampilSoalLima.innerHTML = soalLima.soal_jangkauan[rand].soal;
        tampilGbrLima.innerHTML = soalLima.soal_jangkauan[rand].gbr;
        elmMatrikLima = soalLima.soal_jangkauan[rand].jwb;
        // showHintLima = soalLima.soal_Lima[rand].hint;
      }
    };
    xhttp.open("GET", "soal.json", true);
    xhttp.send();
  } 

  loadSoalLima();

  // ulangLima.addEventListener("click", ulangSoalLima);

  answerLima.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      cekLima.click();
    }
  });

  cekLima.addEventListener("click", function () {
    // let salah = 0;
    // for (let i = 0; i < answerLima.length; i++) {
    //   if (answerLima[i].value != elmMatrik[i]) {
    //     answerLima[i].style.border = "2px solid red";
    //     salah++;
    //   }
    //   answerLima[i].setAttribute("disabled", "");
    // }

    if (answerLima.value != elmMatrik) {
      answerLima.style.border = "2px solid red"
      benarLima.style = "color:red;font-weight:bold"
      benarLima.innerHTML = `
        ${
          answerLima.value !== ""
            ? `Kurang Tepat! Jawabannya bukan <strong>${answerLima.value}</strong>.`
            : "Tidak Boleh Kosong"
        }
        `;
      // hintLima.style.display = "";
      // ulangLima.classList.remove("disabled");
      // hintLima.addEventListener("click", function () {
      //   answerLima[0].value = showHintLima;
      //   answerLima[0].style.border = "2px solid Orange";
      //   cekLima.classList.add("disabled");
      // });
    } else {
      // for (let i = 0; i < answerLima.length; i++) {
      //   answerLima[i].style.border = "2px solid green";
      //   answerLima[i].setAttribute("disabled", "");
      // }
      benarLima.style = "color:red;font-weight:bold"
      benarLima.innerHTML = `
          Benar! Jawabannya adalah <strong>${elmMatrikLima}</strong>.
      `;
      progress.style.width = "40%";
      nextSoal[1].removeAttribute("disabled", "");
    }
  });

  // function ulangSoalLima() {
  //   for (let i = 0; i < answerLima.length; i++) {
  //     answerLima[i].value = "";
  //     answerLima[i].style.border = "1px solid grey";
  //     answerLima[i].removeAttribute("disabled", "");
  //     cekLima.classList.remove("disabled");
  //   }
  //   benarLima.innerHTML = "";
  //   hintLima.style.display = "none";
  // }
});
