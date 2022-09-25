const dropdown = document.querySelector('.dropdown');

dropdown.onclick = function() {
    dropdown.classList.toggle('active');
}

function showSelectedOption(selectedOption) {
    document.querySelector('.text02').value = selectedOption;

}