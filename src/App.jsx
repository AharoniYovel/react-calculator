import { useReducer } from 'react'
import './App.css'
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import { formatOperand, reducer } from './func/functions';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

export const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
})

export default function App() {

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});


  return (
    <div className='calculator-grid'>

      <div className='output'>
        <div className='previous-operand'>{formatOperand(previousOperand)} {operation}</div>
        <div className='current-operand'>{formatOperand(currentOperand)}</div>
      </div>

      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>

      <OperationButton operation='/' dispatch={dispatch} />

      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />

      <OperationButton operation='X' dispatch={dispatch} />

      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />

      <OperationButton operation='+' dispatch={dispatch} />

      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />

      <OperationButton operation='-' dispatch={dispatch} />

      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />

      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>

    </div>
  )
}