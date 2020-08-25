let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let nameUser = sessionStorage.getItem("nama")
let classUser = sessionStorage.getItem("kelas")
let questionLength = sessionStorage.getItem("questionLength")
let nextt = document.querySelector("#next")
let kett = document.querySelector("#ket")
let ulangi = document.querySelector("#ulangi")

let quizResults = {}
quizResults.results = []

let result = {}

let note
let score = (parseInt(correctAnswer) / parseInt(questionLength)) * 100
if(score >= 60) {
    note = "Lulus"
    kett.style.color='green'
    kett.innerHTML = 'Selamat! Anda Telah Menyelesaikan Seluruh Materi pada Bab Statistika.'
    localStorage.setItem("unduh","unduh");
} else {
    note = "Tidak Lulus"
    kett.style.color='red'
    kett.innerHTML = 'Sayang Sekali Skor Anda Belum Memenuhi Kriteria Ketuntasan Minimal'
}
score = score < 100 ? score.toFixed(2) : score

result.nameUser = nameUser
result.classUser = classUser
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('latihan')) {
    quizResults = JSON.parse(localStorage.getItem('latihan'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('latihan', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('latihan', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('latihan', JSON.stringify(quizResults))
    clearResults()
}

function clearResults() {
    sessionStorage.setItem("correct", "")
    sessionStorage.setItem("wrong", "")
    sessionStorage.setItem("nama", "")
    sessionStorage.setItem("kelas", "")
}

function newResults(nameUser, classUser, numCorrect, numWrong, score) {

    let namaSiswa = document.querySelector("#namaSiswa")
    let kelasSiswa = document.querySelector("#kelasSiswa")
    let jawabanBenar = document.querySelector("#jawabanBenar")
    let jawabanSalah = document.querySelector("#jawabanSalah")
    let nilaiSiswa = document.querySelector("#nilaiSiswa")

    namaSiswa.innerHTML = `${nameUser}`
    kelasSiswa.innerHTML = `${classUser}`
    jawabanBenar.innerHTML = `${numCorrect}`
    jawabanSalah.innerHTML = `${numWrong}`
    nilaiSiswa.innerHTML = `${score}`
}

document.addEventListener("DOMContentLoaded", function(){
    let latihan = quizResults["results"].length
    let testNumber = 1

    if(result.nameUser != ""){
        newResults(quizResults["results"][latihan-1].nameUser, quizResults["results"][latihan-1].classUser, quizResults["results"][latihan-1].correctAnswer, quizResults["results"][latihan-1].wrongAnswer, quizResults["results"][latihan-1].scoreUser)
    }

    let tryAgain = document.querySelector("#try-again")
    tryAgain.addEventListener("click", function(){
        location.href = './index.html'
    })
})

