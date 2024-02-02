import {  sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react'; // ,List
import Search from './search';
import UsersTable from './table';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// interface Accounts {
//   number: number;
//   name: string;
//   username: string;
//   email: string;
//   bank: string;
//   branch: string;
// }

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
      <Text>Users retrieved from database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );


  // const list = searchParams.q ?? '';
  // const product = await sql`
  //   SELECT number, name, username, email, bank, branch 
  //   FROM accounts 
  //   WHERE name ILIKE ${'%' + search + '%'};
  // `;
  // const accounts = product.rows as Accounts[];

  // return (
  //   <main className="p-4 md:p-10 mx-auto max-w-7xl">
  //     <Title>Accounts</Title>
  //     <Text>Accounts retrieved from database.</Text>
  //     <List />
  //     <Card className="mt-6">
  //       <accountsTable accounts={accounts} />
  //     </Card>
  //   </main>
  // );
}
