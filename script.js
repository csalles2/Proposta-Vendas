function contatar() {
    // Substitua pelo seu número de WhatsApp
    const fone = "5569992308825"; 
    const mensagem = encodeURIComponent("Olá! Recebi a proposta do site Magnus e gostaria de fechar o projeto.");
    window.open(`https://wa.me/${fone}?text=${mensagem}`, '_blank');
}

// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});