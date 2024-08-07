import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { auth  } = useAuth();

  return (
    <div className="p-16">
      <h1>Welcome {auth?.firstName} {auth?.lastName}</h1>
      <h1 className="text-4xl font-roboto">Home Page</h1>
    </div>
  );
}
  
export default Home;
  