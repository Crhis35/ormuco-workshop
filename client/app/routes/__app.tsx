import React from 'react';
import { Outlet, useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import type { SessionUser } from '~/services/auth.server';
import { authenticator } from '~/services/auth.server';
import { Nav } from '~/components/Nav';

type LoaderData = {
  user: SessionUser;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};

const App = () => {
  const { user } = useLoaderData<LoaderData>();
  return (
    <div>
      <Nav user={user} />
      <Outlet />
    </div>
  );
};

export default App;
