import CardPageUI from "../ui/CardPageUI";

const CardPage = ({ componentData, intentData }) => {
  return (
    <div className="pb-24 w-full lg:pb-0">
      <CardPageUI componentData={componentData} intentData={intentData} />
    </div>
  );
};

export default CardPage;
