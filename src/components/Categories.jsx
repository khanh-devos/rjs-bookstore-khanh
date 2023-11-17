import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Categories() {
  const { categories } = useSelector((store) => store.category);

  useEffect(() => {
    console.log('running');
  }, [categories]);

  return (<div className="category">{categories[0]}</div>);
}
