import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react'; // ,List
import Search from './search';
import UsersTable from './table';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, name, username, email
    FROM users
    WHERE name ILIKE ${'%' + search + '%'};
  `;
  const users = result.rows as User[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>Available users</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} /> {/* Pass the 'users' array to the UsersTable component */}
      </Card>
    </main>
  );
}
