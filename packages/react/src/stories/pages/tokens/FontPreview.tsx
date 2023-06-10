interface FontPreviewProps {
  fontName: 'Work Sans' | 'Nunito Sans'
}

export function FontPreview({ fontName }: FontPreviewProps) {
  const grid = fontName === 'Work Sans' ? '1fr 1fr 1fr' : '1fr 1fr'

  return (
    <div
      style={{
        gridTemplateColumns: grid,
        display: 'grid',
        gap: '2rem',
      }}
    >
      <div
        style={{
          padding: '10px',
          background: 'white',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontFamily: fontName, fontSize: '58px' }}>Aa</span>
        <div
          style={{
            background: '#D9D9D9',
            width: '80%',
            height: '1px',
            marginBottom: '6px',
          }}
        />
        <span>Regular</span>
      </div>
      {fontName === 'Work Sans' && (
        <div
          style={{
            padding: '10px',
            background: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: fontName,
              fontSize: '58px',
              fontWeight: 500,
            }}
          >
            Aa
          </span>
          <div
            style={{
              background: '#D9D9D9',
              width: '80%',
              height: '1px',
              marginBottom: '6px',
            }}
          />
          <span>Medium</span>
        </div>
      )}

      <div
        style={{
          padding: '10px',
          background: 'white',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: fontName,
            fontSize: '58px',
            fontWeight: 600,
          }}
        >
          Aa
        </span>
        <div
          style={{
            background: '#D9D9D9',
            width: '80%',
            height: '1px',
            marginBottom: '6px',
          }}
        />
        <span>Semibold</span>
      </div>
    </div>
  )
}
