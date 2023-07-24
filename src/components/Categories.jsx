import { useSelector } from 'react-redux';

export default function Categories() {
  const { categories } = useSelector((store) => store.category);

  if (categories.length === 0) return (<div>Under Construction</div>);
  return (<div>Categories</div>);
}
