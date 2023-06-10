import { fontSizes } from '@jasmim-ds/tokens'

export function FontsGrid() {
  // TODO: Categorizar as cores
  return Object.entries(fontSizes).map(([key, value]) => {
    return (
      <div key={key}>
        <div
          style={{
            backgroundColor: 'white',
            padding: '1rem',
            margin: '8px 0',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                fontFamily: 'Work Sans',
                fontSize: String(value[0]),
                // @ts-ignore
                fontWeight: value[1].fontWeight,
                // @ts-ignore
                lineHeight: value[1].lineHeight,
                // @ts-ignore
                letterSpacing: value[1].letterSpacing,
              }}
            >
              {key}
            </span>
          </div>
        </div>
      </div>
    )
  })
}
