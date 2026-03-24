import { useState } from 'react';

export default function TrackCard({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  // Audio object for preview
  const audio = new Audio(track.preview_url);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  // Handle "ACHETER" button
  const handlePurchase = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackId: track.id,
          format: 'flac', // you can make this dynamic later
          userId: 123, // replace with logged-in user ID
          deviceHash: 'abc123', // replace with actual device hash
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // start download
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to initiate download.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pattern-bg p-4 neon-border rounded-lg bg-slate-900/50">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-white text-lg">{track.title}</h3>
          <p className="text-jengu text-sm font-mono tracking-widest">{track.genre}</p>
        </div>
        <div className="text-right">
          <span className="block text-white font-bold">{track.price_xaf} XAF</span>
          <button
            className="btn-jengu px-6 py-1 mt-2"
            onClick={handlePurchase}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'ACHETER'}
          </button>
        </div>
      </div>

      {/* Mini Player Preview */}
      <div className="mt-4 flex items-center gap-2">
        <button
          className="btn-jengu px-3 py-1 text-xs"
          onClick={togglePlay}
        >
          {isPlaying ? 'Pause' : 'Play Preview'}
        </button>
        <div className="flex-1 h-1 bg-slate-700 w-full overflow-hidden relative">
          <div
            className="bg-jengu h-full w-1/3 shadow-[0_0_8px_#01d4ab] transition-all"
            style={{ width: isPlaying ? '100%' : '33%' }}
          ></div>
        </div>
      </div>
    </div>
  );
}