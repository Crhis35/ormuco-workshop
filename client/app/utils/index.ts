import { GraphQLClient } from 'graphql-request';
import type { CreateInstance, LoginUserInput } from '~/gql/types';
import { getSdk } from '~/gql/types';

const client = new GraphQLClient('http://127.0.0.1:3000/graphql');

export async function login(input: LoginUserInput) {
  const sdk = getSdk(client);
  return sdk['Login']({
    input,
  });
}
export async function getNetworks(token: string) {
  const sdk = getSdk(client);
  return sdk['getNetworks']({
    token,
  });
}
export async function getImages(token: string) {
  const sdk = getSdk(client);
  return sdk['getImages']({
    token,
  });
}
export async function getFlavors(token: string) {
  const sdk = getSdk(client);
  return sdk['getFlavors']({
    token,
  });
}
export async function getServers(token: string) {
  const sdk = getSdk(client);
  return sdk['getServers']({
    token,
  });
}
export async function createServerMutation(
  input: CreateInstance,
  token: string
) {
  const sdk = getSdk(client);
  return sdk['createServer']({
    input,
    token,
  });
}
