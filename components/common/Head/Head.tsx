import React from 'react';
import { SEO } from '@components/common';

const Head: React.FunctionComponent = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      {/* add this later (with its corresponding file) <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
    </SEO>
  );
};

export default Head;
