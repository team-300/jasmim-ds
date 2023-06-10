import { colors } from '@jasmim-ds/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  // TODO: Categorizar as cores
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key}>
        <div style={{ backgroundColor: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
            }}
          >
            <strong>{key}</strong>
            <span>{color}</span>
          </div>
        </div>
      </div>
    )
  })
}
