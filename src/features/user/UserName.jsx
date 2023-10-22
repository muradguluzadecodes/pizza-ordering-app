import { useSelector } from 'react-redux';

export default function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return <div className="font- text-semibold hidden md:block">{username}</div>;
}
