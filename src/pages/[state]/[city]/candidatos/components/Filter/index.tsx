import { useCandidates } from 'hooks'
import partidosLogos from 'data/partidos.json'

import styles from './styles.module.scss'

export const SearchFilter = () => {
  const { candidates, filter, handleChangeFilter } = useCandidates()

  const data = candidates.mayor.concat(candidates.councilor)

  const partidos = data.reduce((acc, item) => {
    const key = item.partidoSigla
    acc[key] = acc[key] ? acc[key] + 1 : 1

    return acc
  }, {} as Record<string, number>)

  return (
    <div className={styles.filter}>
      {Object.keys(partidos).map(partido => (
        <button
          type="button"
          key={partido}
          onClick={() => handleChangeFilter(partido)}
          aria-pressed={filter.includes(partido) || filter.length === 0}
        >
          <img
            loading="lazy"
            width={32}
            height="auto"
            src={`/icons/${partido}.png`}
            alt={`Logo do partido ${partido}`}
            title={`Logo do partido ${partido}`}
          />
          <span>({partidos[partido]})</span>
        </button>
      ))}
    </div>
  )
}
