// function to display the 'JavaScript logo'.
const showJS = () => {

    document.getElementById('JSpic').style.display = 'block';
    document.getElementById('PYpic').style.display = 'none';
    document.getElementById('JAVApic').style.display = 'none';
}

// function to display the 'Python logo'.
const showPY = () => {

    document.getElementById('JSpic').style.display = 'none';
    document.getElementById('PYpic').style.display = 'block';
    document.getElementById('JAVApic').style.display = 'none';
}

// function to display the 'Java logo'.
const showJAVA = () => {

    document.getElementById('JSpic').style.display = 'none';
    document.getElementById('PYpic').style.display = 'none';
    document.getElementById('JAVApic').style.display = 'block';
}