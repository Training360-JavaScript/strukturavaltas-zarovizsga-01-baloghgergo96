function manipulateDom() {
    const classquote = document.querySelectorAll('.quote')
    classquote.forEach(item => item.style.fontStyle = 'italic')
    classquote.forEach(item => item.style.borderColor = 'blue')
    classquote.forEach(item => item.style.backgroundColor = 'lightblue')
};

export { manipulateDom };