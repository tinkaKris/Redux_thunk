import { useSelector } from "react-redux"
import { decrementAsync, incrementAsync } from "../redux/counterSlice.ts"
import { RootState, useAppDispatch } from "../redux/store.ts"

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Лічильник: </h2>
      <h1>{count}</h1>
      <div className="App">
        <button onClick={() => dispatch(decrementAsync())} className="minus">
          - Мінус
        </button>
        <button onClick={() => dispatch(incrementAsync())} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  )
}

export default Counter
