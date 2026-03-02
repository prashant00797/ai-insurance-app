import CardPageUI from "../ui/CardPageUI";

const CardPage = ({ componentData, intentData }) => {
  //shallow copy
  let _componentData = componentData.slice();

  if (intentData.intent === "get_claims") {
    // eslint-disable-next-line no-unused-vars
    _componentData = _componentData.map(({ amount, ...rest }) => rest);
  }

  return (
    <div className=" mt-10 pb-24 lg:pb-0">
      <CardPageUI componentData={_componentData} intentData={intentData} />
    </div>
  );
};

export default CardPage;
