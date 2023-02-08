const style1 = 'styles1.css';
const style2 = 'styles2.css';

window.onload = () => {
    // load stylesheet
    let saved_style = localStorage.getItem('css');
    if (saved_style === null) saved_style = style1_path;
    document.getElementById('currentCSS').setAttribute('href', saved_style);
}

const switchStyle = () => {
    const elem = document.getElementById('currentCSS');
    if (elem.getAttribute('href') === style1) {
        elem.setAttribute('href', style2);
        localStorage.setItem('css', style2);
    }
    else {
        elem.setAttribute('href', style1);
        localStorage.setItem('css', style1);
    }
}