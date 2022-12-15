import type { FormProps } from '@remix-run/react';
import type { FlavorType, ImageType, NetworkType } from '~/gql/types';

export type Props = FormProps & {
  error?: {
    formError?: string[];
    fieldErrors?: {
      name?: string;
      image?: string[];
      flavor?: string[];
      network?: string[];
    };
  };
  fields?: {
    name?: string;
    image?: string;
    flavor?: string;
    networks?: string[];
  };
  options: {
    networks: NetworkType[];
    images: ImageType[];
    flavors: FlavorType[];
  };
};
