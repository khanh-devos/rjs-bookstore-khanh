import { useNavigate } from 'react-router-dom';

const Fourpage = () => {
  const navigate = useNavigate();
  //   const currentUrl = window.location.href.split('/')[];
  navigate('/');
  //   window.location.href = currentUrl;

  return (<>This is the Error page</>);
};

export default Fourpage;
