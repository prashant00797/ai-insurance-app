import CardPageUI from "../ui/CardPageUI";

const CardPage = ({ componentData }) => {
  // console.log(componentData, "CardPage");

  // eslint-disable-next-line no-unused-vars
  const _extractedData = componentData.map(({ amount, ...rest }) => rest);

  return (
    <div className=" mt-10 pb-24 lg:pb-0">
      <CardPageUI componentData={_extractedData} />
    </div>
  );
};

export default CardPage;
