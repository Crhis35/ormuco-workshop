import React from 'react';
import { Button } from '@mantine/core';
import type { SessionUser } from '~/services/auth.server';

const Nav = ({ user }: { user?: SessionUser }) => {
  if (user)
    return (
      <form action="/logout" method="post">
        <Button type="submit">Log out</Button>
      </form>
    );
  return null;
};

export default Nav;
