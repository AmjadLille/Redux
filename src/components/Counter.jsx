import { useSelector } from 'react-redux'

export const Counter = () => {
  const count = useSelector(state => state.count)

  return (
    <div>
      <p>J'adore les compteurs !!!</p>
      <p>Compteur : {count}</p>
    </div>
  )
}
