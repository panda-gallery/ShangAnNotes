export default function BilibiliVideo({ bvid }) {
    return (
      <div style={{ 
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        maxHeight: '260px',
        margin: '1rem auto',
        padding: '56.25% 0 0 0',
      }}>
        <iframe
          src={`//player.bilibili.com/player.html?bvid=${bvid}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }