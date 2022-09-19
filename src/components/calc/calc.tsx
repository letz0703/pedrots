import {useState, useMemo} from "react";
//import styles from './calc.module.css'

const hardCalculator = (number: number) => {
  return number * 1000;
};
const easyCalculator = (number: number) => {
  return number * 1;
};

export const Calc = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculator(hardNumber);
  }, []);

  const easySum = easyCalculator(hardNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type='number'
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(parseInt(e.target.value));
        }}
      />
      <span> +1000 = {hardSum}</span>
      <h3>쉬운 계산기</h3>
      <input
        type='number'
        value={easyNumber}
        onChange={(e) => {
          setEasyNumber(parseInt(e.target.value));
        }}
      />
      <span> +1 = {easySum}</span>
    </div>
  );
};
