import React from 'react';
import type { Props } from './types';
import { Form } from '@remix-run/react';
import { Stack } from '@mantine/core';

const InstanceForm = ({
  error,
  fields,
  children,
  method = 'post',
  options,
  ...props
}: Props) => {
  return (
    <Form method="post" {...props}>
      <Stack>
        <input name="name" defaultValue={fields?.name} />
        <select name="image" defaultValue={fields?.image} required>
          {options.images.map((image) => (
            <option value={image.id} key={image.id}>
              {image.name}
            </option>
          ))}
        </select>
        <select name="flavor" defaultValue={fields?.image} required>
          {options.flavors.map((image) => (
            <option value={image.id} key={image.id}>
              {image.name}
            </option>
          ))}
        </select>
        <select name="network" defaultValue={fields?.image} required>
          {options.networks.map((image) => (
            <option value={image.id} key={image.id}>
              {image.name}
            </option>
          ))}
        </select>
      </Stack>
      {children}
    </Form>
  );
};

export default InstanceForm;
