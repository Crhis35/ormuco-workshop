import React from 'react';
import type { Props } from './types';
import { Form } from '@remix-run/react';
import { PasswordInput, Stack, TextInput } from '@mantine/core';

const LoginForm = ({
  error,
  fields,
  children,
  method = 'post',
  ...props
}: Props) => {
  return (
    <Form method="post" className="flex flex-col gap-4" {...props}>
      <Stack>
        <TextInput
          name="email"
          error={error?.fieldErrors?.email}
          required
          label="Email"
          placeholder="hello@mantine.dev"
        />

        <PasswordInput
          name="password"
          required
          label="Password"
          placeholder="Your password"
          defaultValue={fields?.password}
          error={error?.fieldErrors?.password}
        />
      </Stack>
      {children}
    </Form>
  );
};

export default LoginForm;
