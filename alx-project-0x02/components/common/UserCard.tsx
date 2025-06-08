import { FC } from 'react';
import { UserProps } from '../../interfaces';

const UserCard: FC<UserProps> = ({ name, email, address }) => (
  <div className="border rounded p-4 shadow">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">{email}</p>
    <p className="mt-2">
      {address.street}, {address.city}, {address.zipcode}
    </p>
  </div>
);

export default UserCard;
