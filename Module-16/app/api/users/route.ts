import { users } from "@/app/db/data";

export const GET = () => {
  return Response.json(users);
};

export const POST = async (request: Request) => {
  const user = await request.json();

  const newUser = {
    id: users.length + 1,
    name: user.name,
    username: user.username,
    email: user.email,
  };

  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
