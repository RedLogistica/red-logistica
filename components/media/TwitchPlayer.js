function IFrameComponent({ iframeClassName = "" }) {
  return (
    <iframe
      src="https://player.twitch.tv?allowfullscreen=true&amp;autoplay=true&amp;channel=radioconurbania&amp;controls=true&amp;height=100%25&amp;muted=false&amp;parent=localhost&amp;playsinline=true"
      allow="autoplay; fullscreen"
      title="Twitch"
      sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
      className={iframeClassName}
      width="100%"
      height="100%"
      loading="lazy"
    ></iframe>
  );
}

export default function TwitchPlayer() {
  return (
    <div className="max-w-2xl mt-14 md:mt-0">
      <h2 className="text-center font-bold text-xl md:text-2xl">Twitch</h2>
      <p className="text-center  leading-none text-lg w-full my-3">
        Viví nuestro streaming cada sábado por Twitch en el canal de Conurbania{" "}
      </p>
      <IFrameComponent iframeClassName="rounded-xl w-full h-[calc(100vh/3)] md:h-[calc(100vh/1.8)]" />
    </div>
  );
}
