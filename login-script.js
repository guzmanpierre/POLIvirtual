// Configuración del reproductor de YouTube
const playerOptions = {
    autoplay: 1,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3,
    loop: 1,
    modestbranding: 1,
    mute: 1,
    rel: 0,
    showinfo: 0,
    playsinline: 1
};

const videoID = "oGd7ypbwc5U";

function loadYouTubeAPI() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt-player", {
        videoId: videoID,
        playerVars: { ...playerOptions, playlist: videoID },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    resizeVideo();
    window.addEventListener("resize", resizeVideo);
}

function resizeVideo() {
    const videoRatio = 16 / 9;
    const windowRatio = window.innerWidth / window.innerHeight;
    const videoElement = document.getElementById("yt-player");

    if (windowRatio > videoRatio) {
        videoElement.style.width = "100vw";
        videoElement.style.height = "calc(100vw * 9 / 16)";
    } else {
        videoElement.style.width = "calc(100vh * 16 / 9)";
        videoElement.style.height = "100vh";
    }
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

// Animación de entrada para el formulario
document.addEventListener('DOMContentLoaded', () => {
    const loginCard = document.querySelector('.login-card');
    loginCard.style.opacity = '0';
    loginCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        loginCard.style.opacity = '1';
        loginCard.style.transform = 'translateY(0)';
        loginCard.style.transition = 'all 0.5s ease';
    }, 200);

    // Manejo del formulario de login
    document.querySelector('.login-form').addEventListener('submit', handleLogin);
});

// Nueva función para manejar el login
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar validaciones
    if (username && password) {
        // Redirigir al dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Por favor complete todos los campos');
    }
}

loadYouTubeAPI();
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;