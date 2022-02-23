
import { AnyAction, combineReducers } from "@reduxjs/toolkit"; 
// 정의한 리듀서 모듈들을 결합하는 역할
import { HYDRATE } from "next-redux-wrapper"; 
// SSR작업 수행 시 HYDRATE라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행
import counter from './counter'; 
// 같은 폴더의 counter를 가져온다.

const reducer = (state:any, action:any) => { 
    // 리듀셔는 매개변수로 state와 action을 받아온다. 
    if (action.type === HYDRATE) { 
        return { 
            ...state, 
            ...action.payload 
        }; 
    }
    return combineReducers({ 
        counter, // 여기에 추가 
    })(state, action); 
} 

export default reducer;
