import { useDispatch } from 'react-redux'

export const Button = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => { dispatch({ type: 'INCREASE' }) }}>Increase</button>
      <br />
      <button onClick={() => { dispatch({ type: 'DECREASE' }) }}>Decrease</button>
    </div>
  )
}
