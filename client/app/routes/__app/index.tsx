import { Button, Container, Drawer, Group, Table } from '@mantine/core';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useActionData, useLoaderData, useTransition } from '@remix-run/react';
import { useState } from 'react';
import { InstanceForm } from '~/components/InstanceForm';
import type {
  CreateInstance,
  FlavorType,
  ImageType,
  NetworkType,
  ServerType,
} from '~/gql/types';
import { authenticator } from '~/services/auth.server';
import {
  createServerMutation,
  getFlavors,
  getImages,
  getNetworks,
  getServers,
} from '~/utils';
import { CreateServer } from '~/services/validations';

type LoaderData = {
  networks: NetworkType[];
  images: ImageType[];
  flavors: FlavorType[];
  servers: ServerType[];
};

type ActionData = {
  error?: {
    formError?: string[];
    fieldErrors?: {
      image?: string[];
      flavor?: string[];
      network?: string[];
    };
  };
  fields?: {
    image?: string;
    flavor?: string;
    networks?: string[];
  };
};

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  });
  if (!user?.id) return redirect('/login');
  const form = await request.formData();
  const rawImage = form.get('image');
  const rawName = form.get('name');
  const rawNetwork = form.get('network');
  const rawFlavor = form.get('flavor');
  console.log({
    name: rawName,
    imageRef: rawImage,
    flavorRef: rawFlavor,
    form,
    rawNetwork,
  });
  const result = CreateServer.safeParse({
    name: rawName,
    imageRef: rawImage,
    flavorRef: rawFlavor,
    networks: [{ uuid: rawNetwork }],
  });
  if (!result.success) {
    return json(
      {
        error: result.error.flatten(),
        fields: {
          name: rawName,
          imageRef: rawImage,
          flavorRef: rawFlavor,
        },
      },
      {
        status: 400,
      }
    );
  }

  await createServerMutation(result.data, user.id);
  return redirect('/');
};
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  if (!user.id) return redirect('/login');

  const token = user.id;
  const data = await Promise.all([
    getImages(token),
    getNetworks(token),
    getFlavors(token),
    getServers(token),
  ]);

  return json({
    images: data[0].data.images,
    networks: data[1].data.networks,
    flavors: data[2].data.flavors,
    servers: data[3].data.servers,
  });
};
export default function Index() {
  const { flavors, images, networks, servers } = useLoaderData<LoaderData>();
  const formData = useActionData<ActionData>();
  const [opened, setOpened] = useState(false);
  const transition = useTransition();
  const ths = (
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Status</th>
      <th>Image</th>
    </tr>
  );

  const rows = servers?.map((server, idx) => (
    <tr key={server.name}>
      <td>{idx + 1}</td>
      <td>{server.name}</td>
      <td>{server.status}</td>
      <td>
        {images.find((image) => image.id === server.image.id)?.name ||
          'No image'}
      </td>
    </tr>
  ));
  return (
    <Container>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        <InstanceForm
          error={formData?.error}
          fields={formData?.fields}
          options={{
            networks,
            flavors,
            images,
          }}
        >
          <Button type="submit">
            {transition.state === 'submitting' || 'loading'
              ? 'Log in'
              : 'Logging in...'}
          </Button>
        </InstanceForm>
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create instance</Button>
      </Group>

      <Table striped highlightOnHover withBorder>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}
