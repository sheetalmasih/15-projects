document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const button = question.querySelector('.toggle-btn');

            if (answer.style.display === 'block'){
                answer.style.display = 'none';
                button.textContent = '+';
            } else {
                answer.style.display = 'block';
                button.textContent = '-';
            }
        });
    });
});
