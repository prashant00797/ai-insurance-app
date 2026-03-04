import Error404 from "../assets/Error404.webp";
import loading from "../assets/loading.webp";
import noData from "../assets/noData.webp";
import notFound from "../assets/notFound.webp";
import serviceFailure from "../assets/serviceFailure.webp";

//404
export const InvalidUrl = () => {
  return (
    <div className="min-h-screen bg-primary-100 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-2">
        <img src={Error404} alt="Invalid Url" className="w-[70%] lg:w-[50%]" />
        <h1 className="text-primary-600 text-2xl font-extrabold text-center">
          The page you're looking for doesn't exist. Please check the URL or
          return to the dashboard.
        </h1>
      </div>
    </div>
  );
};

//Please wait auth flicker
export const GlobalLoader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-primary-100 ">
      <div className="lg:w-[50%] pt-30 overflow-hidden">
        <img
          src={loading}
          alt="Please wait your data is being loaded"
          className="animate-bounce"
        />
      </div>
    </div>
  );
};

//apiData empty = component data empty
export const NoData = ({ type }) => {
  const message = {
    claims: "No claims has been filed yet.",
    providers: "No providers consulted.",
    unknown:
      "We couldn’t find any results based on your current filters.Try adjusting your search criteria.",
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh] text-center">
      <img src={noData} alt="No Data" className="w-200 lg:w-300 mb-8" />

      <h2 className="text-page-title font-semibold text-gray-800 mb-3">
        No matching records found
      </h2>

      <p className="text-page-title text-gray-500">{message[type]}</p>
    </div>
  );
};

//No result found based on AI query
export const NotFoundUI = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src={notFound} alt="No Results" className="w-64 lg:w-80 mb-8" />

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        I couldn’t understand your request
      </h2>

      <p className="text-gray-500">
        I can help with claim status and provider searches. Try asking about
        approved, denied, or pending claims, or search for providers by
        speciality or location.
      </p>
    </div>
  );
};

export const ServiceFailure = () => {
  return (
    <div className="min-h-screen bg-primary-100 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-2">
        <img
          src={serviceFailure}
          alt="data not loaded"
          className="w-[70%] lg:w-[50%]"
        />
        <h1 className="text-primary-600 text-2xl font-extrabold text-center">
          We couldn't load the data right now. Please try again in a moment.
        </h1>
      </div>
    </div>
  );
};

export const AuthErrorMessage = (msg) => {
  const { code } = msg.errorMessage;

  const errorString = {
    "auth/invalid-credential": "Invalid email or password.",
    "auth/email-already-in-use": "Email is already registered.",
    "auth/network-request-failed": "Network error. Please try again.",
  };

  return (
    <div className=" mb-7">
      <a className="text-danger text-caption mb-3 ">{errorString[code]}</a>
    </div>
  );
};
