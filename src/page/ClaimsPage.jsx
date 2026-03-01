import { useEffect, useState } from "react";
import ClaimsUI from "../ui/ClaimsUI";
import { getClaims } from "../service/claimsService";

const ClaimsPage = () => {
  const [componentData, setComponentData] = useState([]);

  const fetchComponentData = async () => {
    const response = await getClaims();
    setComponentData(response);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchComponentData();
  }, []);

  return (
    <main className="flex-1  mt-10  pb-24 lg:pb-0">
      <ClaimsUI componentData={componentData} />
    </main>
  );
};

export default ClaimsPage;
