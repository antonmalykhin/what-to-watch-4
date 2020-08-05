export const userAdapter = (data) => {
  return {
    id: data.id,
    avatar: `https://4.react.pages.academy${data.avatar_url}`,
    email: data.email,
    name: data.name
  };
};
