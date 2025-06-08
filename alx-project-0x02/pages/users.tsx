import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

const Users: NextPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {users.map(u => (
          <UserCard key={u.id} {...u} />
        ))}
      </div>
    </div>
  );
};

export default Users;
