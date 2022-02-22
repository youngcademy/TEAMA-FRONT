import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from '../../store/reducers'
import { countUp, countDown } from '../../store/actions/count'
import styles from '../../styles/Home.module.scss'

const Home = () => {
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.counter)

  const upEvent = useCallback(() => {
    dispatch(countUp())
  }, [])

  const downEvent = useCallback(() => {
    dispatch(countDown())
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles['counter__text']}>{value}</div>
      <div className={styles['button__area']}>
        <button onClick={upEvent}>Up</button>
        <button onClick={downEvent}>Down</button>
      </div>
    </div>
  )
}

export default Home