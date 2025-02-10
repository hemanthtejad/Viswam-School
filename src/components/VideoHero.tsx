export default function VideoHero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div style={{ padding: '56.6% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/1054388937?h=6fa89d116c&badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="School Introduction Video"
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js" async />
      </div>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}