const poems = {
    "tu-mera-ghar": {
        title: "Tu Mera Ghar Hai",
        content: "Tu mera ghar hai, tu hi mera sheher hai..."
    },
    "ocean-whispers": {
        title: "Ocean Whispers",
        content: "The waves speak in whispers, calling my name..."
    }
};

function showPoem(poemId) {
    document.getElementById('poem-title').innerText = poems[poemId].title;
    document.getElementById('poem-content').innerText = poems[poemId].content;
    document.getElementById('poem-display').style.display = 'block';
}

function closePoem() {
    document.getElementById('poem-display').style.display = 'none';
}
