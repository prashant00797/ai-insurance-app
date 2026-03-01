import { useEffect, useState } from "react";
import ProviderUI from "../ui/ProviderUI";
import { getProviders } from "../service/providerService";

const ProviderPage = () => {
  const [componentData, setComponenetData] = useState([]);

  const fetchComponentData = async () => {
    const response = await getProviders();

    setComponenetData(response);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchComponentData();
  }, []);

  return (
    <main className="flex-1  mt-10 pb-1=24 lg:pb-0">
      <ProviderUI componentData={componentData} />
    </main>
  );
};

export default ProviderPage;
