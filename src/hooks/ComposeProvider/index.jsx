import React from 'react';

// interface ComposeProps {
//   components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
//   children: React.ReactNode;
// }

const Compose = ({ components = [], children }) => {
  return (
    <>
      {components.reduceRight((acc, Composer) => {
        return <Composer>{acc}</Composer>;
      }, children)}
    </>
  );
};
export default Compose;
