import { useState, useEffect } from 'react';

const useFetch = (promiseOrFunction, data, deps) => {
  const [state, setState] = useState({
    data,
    error: null,
    isPending: true,
  });

  useEffect(() => {
    const promise =
      typeof promiseOrFunction === 'function'
        ? promiseOrFunction()
        : promiseOrFunction;

    let isSubscribed = true;

    promise
      .then(val =>
        isSubscribed ? setState({ val, error: null, isPending: false }) : null,
      )
      .catch(err =>
        isSubscribed ? setState({ data, error: err, isPending: false }) : null,
      );

    isSubscribed = false;

    return () => isSubscribed;
  }, deps);

  const { value, error, isPending } = state;
  return [value, error, isPending];
};

export default useFetch;
