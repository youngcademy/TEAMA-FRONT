import { NextPage } from "next";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "../store";
import * as counter from "../store/slices/counter";
import Link from "next/link";

const Counter: NextPage = (props: any) => {
  const dispatch = useDispatch();
  const { resolvedUrl } = props;
  const value = useSelector(counter.selectCounter);
  // const value = 0;
  const [countNumber, setCountNumber] = useState(value.number);

  return (
    <div>
      <h1>{resolvedUrl}</h1>
      <h1>{countNumber}</h1>
      <button onClick={() => dispatch(counter.increment())}> + </button>
      <button onClick={() => dispatch(counter.decrement())}> - </button>
      <Link href="/counter">
        <a>{resolvedUrl}</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ resolvedUrl }) => {
      return {
        props: {
          resolvedUrl,
        },
      };
    }
);

export default Counter;
