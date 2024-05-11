const form = document.querySelector('.quiz-submit');
const result = document.querySelector('.result');
const correctAnswers = ['A', 'B', 'A', 'B'];
//calculate the score
const score = result.querySelector('span')

form.addEventListener('submit', e => {
    e.preventDefault()
    const userAnswers = [
        form.q1.value, 
        form.q2.value, 
        form.q3.value, 
        form.q4.value
    ]

    let scoreCorrectAnswers = 0;
    let finalScore = 0;

    // find correct anwsers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            scoreCorrectAnswers ++;
        }
    })

    // display result
    result.style.display = 'block';

    //calculate the score
    const score = result.querySelector('span')

    // scroll page top,left corner
    scrollTo(0,0)

    // score in procents
    if (scoreCorrectAnswers > 0){
        finalScore = scoreCorrectAnswers / 4 * 100
        const timer = setInterval(() => {
            scoreCorrectAnswers++;
            score.textContent = `${scoreCorrectAnswers}%`
            if (scoreCorrectAnswers == finalScore){
                clearInterval(timer);
            }
        }, 10)
    } else {
        score.textContent = `${scoreCorrectAnswers}%`
    }
})