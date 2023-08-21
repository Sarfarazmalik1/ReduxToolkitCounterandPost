import {React,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { withdraw,deposit,reset,depositbyInput } from '../features/counter/amountSlice';


const Shop = () => {

    const count = useSelector((state)=> state.amountt.amount);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(null);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }


    return (
        <>
            <h2>Deposit/Withdraw Money</h2>
            <div>
                <button className="btn-primary fs-2" onClick={()=>dispatch(withdraw())}>-</button>
                <span className='px-3'>Update Balance  {count}</span>
                <button className="btn-primary fs-2" onClick={() => dispatch(deposit())}>+</button>

            </div>
            <div className='row mt-2'>
                <div className='col-6 offset-3 d-flex justify-content-center'>
                    <button className="btn-primary py-0 me-4"onClick={()=>resetAll()} >Reset</button>
                    <div class="input-group mt-3 ps-2">
                        <input type="text" class="form-control" placeholder="Input your Amount" aria-label="Username" aria-describedby="basic-addon1"
                            value={incrementAmount} onChange= {(e)=>setIncrementAmount(e.target.value)}
                        />
                    </div>
                    <button className="btn-primary py-0 ms-4" onClick={() => dispatch(depositbyInput(addValue))} >Add</button>
                </div>
                
            </div>
        </>

    )
}

export default Shop