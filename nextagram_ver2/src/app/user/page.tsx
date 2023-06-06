type Props = {
  params: {
    slug: string;
  };
};

export default function page(username: Props) {
  return <div>${username.params.slug}</div>;
}
