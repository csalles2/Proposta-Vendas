function contatar() {
    // O formato correto deve ser: CodigoPais (55) + DDD (69) + Numero
    const fone = "5569992308825"; 
    const mensagem = "Olá! Recebi a proposta do site Magnus e gostaria de fechar o projeto.";
    
    // Usamos o link oficial api.whatsapp.com que é mais estável para navegadores
    const url = "https://api.whatsapp.com/send?phone=" + fone + "&text=" + encodeURIComponent(mensagem);
    
    window.open(url, '_blank');
}

// Efeito de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});