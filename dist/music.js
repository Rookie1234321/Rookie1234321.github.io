const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    mini: true,
    theme: '#FADFA3',
    volume: 0.15,
    audio: [
      {
        name: "向云端",
        artist: '',
        url: 'xiangyunduan.mp3',
        cover: 'background.jpg',
      }
    ]
});