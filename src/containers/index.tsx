/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';

// import favorites from './favorites';
import movies from './movies';

const listContainers = [movies];

export default function containers(WrappedComponent: React.FC) {
  const WithContainers = (props: any) => {
    let CompleteComponent: any = null;

    listContainers.forEach((withContainer) => {
      CompleteComponent = withContainer(CompleteComponent || WrappedComponent);
    });

    return <CompleteComponent {...props} />;
  };

  return memo(WithContainers);
}
