import { useNavigate } from "react-router-dom";
import CardPageUI from "../ui/CardPageUI";

const CardPage = ({ componentData, intentData }) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    if (intentData.intent === "get_claims") {
      navigate("/claims");
    } else if (intentData.intent === "get_providers") {
      navigate("/provider");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="pb-24 w-full lg:pb-0">
      <CardPageUI
        componentData={componentData}
        intentData={intentData}
        handleViewDetails={handleViewDetails}
      />
    </div>
  );
};

export default CardPage;
