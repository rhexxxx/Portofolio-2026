lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger');
    const mobileMenu = document.getElementById('mobile-menu');

    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.elements['name'].value;
        
        showPopup("SUCCESS", `Hi ${name}, pesan kamu berhasil terkirim!`);
        contactForm.reset();
    });

    const music = document.getElementById('bgMusic');
    const musicToggles = document.querySelectorAll('#musicToggle'); // Ada di nav dan footer

    musicToggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (music.paused) {
                music.play();
                btn.innerHTML = "<p>Music : On</p>";
            } else {
                music.pause();
                btn.innerHTML = "<p>Music : Off</p>";
            }
        });
    });
});

function showPopup(title, msg) {
    const modal = document.getElementById('popupModal');
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupMessage').innerText = msg;
    modal.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupModal').style.display = 'none';
}