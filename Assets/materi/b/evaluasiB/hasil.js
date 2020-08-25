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
    nextt.style.display='inline-block'
    ulangi.style.display='none'
    kett.style.color='green'
    kett.innerHTML = 'Selamat! Anda bisa melanjutkan ke materi selanjutnya.'
} else {
    note = "Tidak Lulus"
    nextt.style.display='none'
    ulangi.style.display='inline-block'
    kett.style.color='red'
    kett.innerHTML = 'Sayang sekali skor anda belum memenuhi untuk dapat lanjut ke materi selanjutnya'
}
// score = score < 100 ? score.toFixed(2) : score

result.nameUser = nameUser
result.classUser = classUser
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('quizB')) {
    quizResults = JSON.parse(localStorage.getItem('quizB'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizB', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('quizB', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizB', JSON.stringify(quizResults))
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
    let quizB = quizResults["results"].length
    let testNumber = 1

    if(result.nameUser != ""){
        newResults(quizResults["results"][quizB-1].nameUser, quizResults["results"][quizB-1].classUser, quizResults["results"][quizB-1].correctAnswer, quizResults["results"][quizB-1].wrongAnswer, quizResults["results"][quizB-1].scoreUser)
    }

    let tryAgain = document.querySelector("#try-again")
    tryAgain.addEventListener("click", function(){
        location.href = './index.html'
    })
    
    nextt.addEventListener("click", function(e){
        e.preventDefault();

        localStorage.setItem("jangkauan1","jangkauan1");
        localStorage.setItem("materi3","materi3");
        
        if(localStorage.getItem("progress") <=18){
            localStorage.setItem("progress",18)
        }
        location.href = '../../C/jangkauan1.html'
        clearResults()
    })

    ulangi.addEventListener("click", function(){
        location.href = '../mean1.html'
        clearResults()
    })
})

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyC6Dn5I1wbg-HofQyaXaXz0Rj-Rc34S3k4",
authDomain: "kuis-ukp.firebaseapp.com",
databaseURL: "https://kuis-ukp.firebaseio.com",
projectId: "kuis-ukp",
storageBucket: "kuis-ukp.appspot.com",
messagingSenderId: "818597757705",
appId: "1:818597757705:web:773829ed2936c5c78609d8",
measurementId: "G-ZQHG4B2GJV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let data = {
    nama : nameUser,
    nilai : score
}

const database = firebase.database();
database.ref("nilai-siswa").push(data);