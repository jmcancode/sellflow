import { LocalData } from '../types/types';

export const initialData: LocalData = {
  authenticatedUser: {
    __typename: 'AuthenticatedUser',
    email: '',
    id: '',
    expiresAt: '',
    firstName: '',
    lastName: '',
  },
  wishlist: [],
};