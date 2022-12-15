import { Button, Divider, Group, Paper, Text } from '@mantine/core';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useTransition } from '@remix-run/react';
import { LoginForm } from '~/components/LoginForm';
import { authenticator, USER_LOGIN } from '~/services/auth.server';
import { getSession } from '~/services/session.server';

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate(USER_LOGIN, request, {
    successRedirect: '/',
    throwOnError: true,
    failureRedirect: '/login',
  });
};

type LoaderData = {
  error?: {
    formError: string[];
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/',
  });
  let session = await getSession(request.headers.get('cookie'));
  let error = session.get(authenticator.sessionErrorKey) as Error[] | Error;
  if (error) {
    return json({
      error: {
        formError: [
          'Unable to login with those credentials, please try again!',
        ],
      },
    });
  } else {
    return {};
  }
};

const SignInPage = () => {
  const { error } = useLoaderData<LoaderData>();
  const transition = useTransition();
  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Welcome to Project app
      </Text>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
      <LoginForm error={error}>
        <Group position="apart" mt="xl">
          <Button type="submit">
            {transition.state === 'submitting' || 'loading'
              ? 'Log in'
              : 'Logging in...'}
          </Button>
        </Group>
      </LoginForm>
    </Paper>
  );
};
export default SignInPage;
