import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Layout from './Layout';
import { routes } from '../config/router';

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          {routes.map(({ component: Component, ...route }) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
