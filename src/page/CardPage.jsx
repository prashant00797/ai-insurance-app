import CardPageUI from "../ui/CardPageUI";

const CardPage = ({ componentData, intentData }) => {
  return (
    <div className=" mt-10 pb-24 lg:pb-0">
      <CardPageUI componentData={componentData} intentData={intentData} />
    </div>
  );
};

export default CardPage;
