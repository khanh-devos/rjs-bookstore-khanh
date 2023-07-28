import { useSelector } from 'react-redux';

export default function Categories() {
  const { categories } = useSelector((store) => store.category);

  return (<div className="category">{categories[0]}</div>);
}
