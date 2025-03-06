// Configuración del reproductor de YouTube
const initYouTubePlayer = () => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
        new YT.Player("yt-player", {
            videoId: "qmKLxuy1Hy8", // Cambia por el ID del video que desees
            playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                loop: 1,
                modestbranding: 1,
                mute: 1,
                rel: 0,
                showinfo: 0,
                playlist: "qmKLxuy1Hy8" // Para repetir el video
            },
            events: {
                onReady: event => event.target.playVideo()
            }
        });
    };
};

// Inicializar el reproductor
document.addEventListener("DOMContentLoaded", initYouTubePlayer);
