import React from 'react';
import {Button} from 'antd';
import {setRetryTip} from './redux/saga/actions/common'
import {useDispatch,useSelector} from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const { retryTip }  = useSelector((state:IState)=>state.common)
  const handleTestReduxClick = ()=>{
    dispatch({
      type:'TRIGGER',
      payload:[]
    })
  }
  return (
    <div className="App">
      <Button type="primary" onClick = {handleTestReduxClick}>测试</Button>
    </div>
  );
}

export default App;
