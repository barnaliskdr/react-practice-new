import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./UserefTwo.jsx'));

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

// Lazy loading in React means loading components only when they are needed, instead of loading everything at once when the app starts.
// This improves performance and reduces the initial load time of your application.


// Without lazy loading, all components are bundled together and downloaded when the app starts — even if some are never used right away.
// With lazy loading:
// Only the components needed immediately are loaded first.
// Other components (like UserefTwo) are loaded on-demand.
// Result: Faster initial page load time and better performance.