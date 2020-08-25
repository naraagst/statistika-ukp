let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let nameUser = sessionStorage.getItem("name")
let questionLength = sessionStorage.getItem("questionLength")
let nextt = document.querySelector("#next")
let kett = document.querySelector("#ket")
let ulangi = document.querySelector("#ulangi")

let quizResults = {}
quizResults.results = []

let result = {}

let note
let score = (parseInt(correctAnswer) / parseInt(questionLength)) * 100
if(score >= 65) {
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
score = score < 100 ? score.toFixed(2) : score

result.nameUser = nameUser
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('quizA')) {
    quizResults = JSON.parse(localStorage.getItem('quizA'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizA', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('quizA', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizA', JSON.stringify(quizResults))
    clearResults()
}

function clearResults() {
    sessionStorage.setItem("correct", "")
    sessionStorage.setItem("wrong", "")
    sessionStorage.setItem("name", "")
}

function resultsHistory(testNumber, nameUser, correctAnswer, wrongAnswer, scoreUser, noteUser) {
    let resultsContainer = document.querySelector(".resultsContainer")

    let tr = document.createElement('tr')
    let html = `
        <td>${testNumber}</td>
        <td>${nameUser}</td>
        <td>${correctAnswer}</td>
        <td>${wrongAnswer}</td>
        <td>${scoreUser}</td>
        <td>${noteUser}</td>
    `
    tr.innerHTML = html
    resultsContainer.appendChild(tr)
}

function newResults(numCorrect, numWrong, score) {

    let newScore = document.querySelector("#new-score")
    let wrongCorrect = document.querySelector("#wrong-correct")

    newScore.innerHTML = `Skor yang anda peroleh<br/>${score}`
    wrongCorrect.innerHTML =`Jawaban Benar: <b>${numCorrect}</b>, Jawaban Salah: <b>${numWrong}</b><hr>`
}

document.addEventListener("DOMContentLoaded", function(){
    let quizA = quizResults["results"].length
    let testNumber = 1

    for(let i=0; i<quizA; i++) {
        if(quizResults["results"][i].correctAnswer != "" && quizResults["results"][i].wrongAnswer != "") {
            resultsHistory(testNumber, quizResults["results"][i].nameUser, quizResults["results"][i].correctAnswer, quizResults["results"][i].wrongAnswer, quizResults["results"][i].scoreUser, quizResults["results"][i].noteUser)
        }
        testNumber++
    }

    if(result.nameUser != ""){
        newResults(quizResults["results"][quizA-1].correctAnswer, quizResults["results"][quizA-1].wrongAnswer, quizResults["results"][quizA-1].scoreUser)
    }

    let tryAgain = document.querySelector("#try-again")
    tryAgain.addEventListener("click", function(){
        location.href = './index.html'
    })
    
    nextt.addEventListener("click", function(e){
        e.preventDefault();

        localStorage.setItem("mean1","mean1");
        localStorage.setItem("materi2","materi2");
        
        if(localStorage.getItem("progress") <=5){
            localStorage.setItem("progress",5)
        }
        location.href = 'Assets/Materi/b/mean1.html'
        clearResults()
    })

    ulangi.addEventListener("click", function(){
        location.href = '../analisis1.html'
        clearResults()
    })
})

