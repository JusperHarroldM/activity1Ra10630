function toggleParagraphs() {
    const paragraphs = document.querySelectorAll('.container p');
    paragraphs.forEach(paragraph => {
        paragraph.classList.toggle('hidden');
    });
}
