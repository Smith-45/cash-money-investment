const PIN_ADMIN = "2026";
let walletAddresses = { bep20: "0xfd3a795b11951cb62c28af99c09ad0d05bb80289", trc20: "TMWz63LfZEkKJKR6fhbAZ4nwNQRR7k3oim" };

// Authentification
function toggleAuth(mode) {
    document.getElementById('login-form').style.display = mode === 'reg' ? 'none' : 'block';
    document.getElementById('register-form').style.display = mode === 'reg' ? 'block' : 'none';
}

function handleAuth() {
    document.getElementById('auth-page').style.display = 'none';
    document.getElementById('main-sidebar').style.display = 'block';
    document.getElementById('main-ui').style.display = 'block';
    if(!localStorage.getItem('seenW')) {
        document.getElementById('welcome-modal').style.display = 'flex';
        localStorage.setItem('seenW', 't');
    }
}

// Navigation
function showSection(id, el) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
}

function accessAdmin(el) {
    if(prompt("Code PIN Admin :") === PIN_ADMIN) showSection('admin-panel', el);
    else alert("Accès refusé.");
}

// Outils
function calculateGains() {
    let amt = document.getElementById('investAmount').value;
    document.getElementById('totalReturn').innerText = amt ? (amt * 1.6).toLocaleString() + " FCFA" : "0 FCFA";
}

function updateAddress() {
    let net = document.getElementById('network').value;
    document.getElementById('walletAddress').value = walletAddresses[net];
}

function copyText(id) {
    let c = document.getElementById(id); c.select(); navigator.clipboard.writeText(c.value); alert("Copié !");
}

// Fonctions Admin
function saveNewAddresses() {
    walletAddresses.bep20 = document.getElementById('edit-bep20').value;
    walletAddresses.trc20 = document.getElementById('edit-trc20').value;
    updateAddress();
    alert("Adresses mises à jour !");
}

function publishNews() {
    let m = document.getElementById('news-input').value;
    document.getElementById('ann-text').innerText = m;
    document.getElementById('global-announcement').style.display = 'flex';
}

function processWithdraw(btn, hId) {
    if(!document.getElementById(hId).value) return alert("Collez le Hash TxID !");
    btn.closest('tr').style.opacity = "0.3"; alert("Retrait validé !");
}

function openTerms() { document.getElementById('terms-modal').style.display = 'flex'; }
function closeTerms() { document.getElementById('terms-modal').style.display = 'none'; }

// Preuve Sociale
setInterval(() => {
    let p = document.getElementById('social-proof');
    document.getElementById('p-text').innerHTML = `<strong>Utilisateur</strong> vient de retirer 35,000 F`;
    p.classList.add('show');
    setTimeout(() => p.classList.remove('show'), 4000);
}, 25000);
