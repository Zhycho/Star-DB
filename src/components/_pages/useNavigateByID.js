import { useNavigate } from 'react-router-dom';

export default function useNavigateByID(url = '') {
  const navigate = useNavigate();
  return (id) => navigate(url + id);
} 