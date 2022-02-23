import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// 액션과 리듀서를 한 번에 정의하는 createSlice를 도입
// PayloadAction : createAction() action creator에 의해 반환되는 action type입니다.

interface CounterState {
  // interface : 어떠한 객체가 이러이러한 프로퍼티 혹은 메소드를 가진다고 선언한다.
  // 여기서는 CounterState가 value로 number를 가진다고 선언한다.
  value: number
}

const initialState: CounterState = {value:0};
// initialState에 value로 0을 주되, ConterState의 number로 준다. 

const counterSlice = createSlice({
  // 여기서 액션과 리듀서를 정의한다.
  name: 'counter',
  // 이름은 'counter'로
  initialState,
  // state는 initialState로
  reducers: {
  // reducer는 상태를 다음과 같이 생성한다.
    increment(state:any) {
  // 메소드 increment를 매개변수 state를 받아서 실행.
      state.value++
    }, // 이때 state.value를 +1 한다.
    decrement(state:any) {
      state.value--
    }, //메소드 decrement를 매개변수 state를 받아서 -1
    incrementByAmount(state, action: PayloadAction<number>) {
        // state와 action을 받아서 메소드 실행. 이때 action은 number를 반환받아서 실행한다.
      state.value += action.payload
       // state.value += action.payload는 우측과 같다. state.value = state.value + action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
// 이렇게 생성된 리듀서의 액션 생성함수를 내보낸다.
export default counterSlice.reducer
// 생성된 reducer를 내보낸다.