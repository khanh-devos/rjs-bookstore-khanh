import { useSelector } from 'react-redux';

export default function Categories() {
  const { categories } = useSelector((store) => store.category);

  return (<div>{categories[0]}</div>);
}
