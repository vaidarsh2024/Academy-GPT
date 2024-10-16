import { useLocation, useParams } from "react-router-dom";

const TutorDetails = () => {
  const { id } = useParams(); 
  const location = useLocation(); 
  const tutor = location.state; 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tutor Profile for {tutor.name}</h1>
      <p className="text-lg">Rating: {tutor.rating}</p>
      <p className="text-lg">Hours taught: {tutor.hours}</p>
      <p className="text-lg">Price: ${tutor.price}</p>
      <p className="text-lg">Language: {tutor.language}</p>
      <p className="text-lg">{tutor.description}</p>
    </div>
  );
};

export default TutorDetails;
