import { useDispatch } from "react-redux";
import { useLen, changeLen } from "../../redux/slice/lenSlice.js";

export default function Length() {
  const len = useLen();
  const dispatch = useDispatch();

  return (
    <select
      value={len}
      onChange={(event) => {
        dispatch(changeLen(event.target.value));
      }}
    >
      <option value="en">EN</option>
      <option value="uk">UK</option>
      <option value="pl">PL</option>
    </select>
  );
}
