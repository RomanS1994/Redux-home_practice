import { useDispatch } from "react-redux";
import { deposit, useBalance, withdraw } from "../../redux/slice/balanceSlice";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useBalance();

  return (
    <div>
      <p>Balance: {balance}</p>
      <button onClick={() => dispatch(deposit(50))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(100))}>Withdraw credits</button>


    </div>
  );
}
