export const ListItem = (props: { id: any; name: any; age: any }) => {
  const { id, name, age } = props;
  return (
    <p>
      {id}:{name}({age})
    </p>
  );
};
