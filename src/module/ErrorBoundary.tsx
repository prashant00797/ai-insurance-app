import Error404 from "../assets/Error404.webp";
import loading from "../assets/loading.webp";
import noData from "../assets/noData.webp";
import notFound from "../assets/notFound.webp";
import serviceFailure from "../assets/serviceFailure.webp";
import BackUI from "../ui/BackUI";

//404
export const InvalidUrl = () => {
  return (
    <>
      <BackUI />
      <div className="min-h-screen bg-primary-100 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-2">
          <img
            src={Error404}
            alt="Invalid Url"
            className="w-[70%] lg:w-[50%]"
          />
          <h1 className="text-primary-600 text-2xl font-extrabold text-center">
            The page you're looking for doesn't exist. Please check the URL or
            return to the dashboard.
          </h1>
        </div>
      </div>
    </>
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
export const NoData = ({ type, onBack, hasSearched, search, intentData }) => {
  const message = {
    claims: "No claims has been filed yet.",
    providers: "No providers consulted.",
    get_claims: "No claims found with respect to your search",
    get_providers: "No providers found with respect to your search",
  };

  return (
    <>
      <BackUI onBack={onBack} hasSearched={hasSearched} />
      {type === "unknown" ? (
        <NotFoundUI search={search} intentData={intentData} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full min-h-[70vh] text-center">
          <img src={noData} alt="No Data" className="w-200 lg:w-150 mb-8" />

          <h2 className="text-page-title font-semibold text-gray-800 mb-3">
            No matching records found
          </h2>

          <p className="text-section-title text-gray-500">{message[type]}</p>
          {type === "unknown" && (
            <p className="text-primary-600 text-section-title">
              {`Ai interpreted your query as : Intent -> ${intentData.intent}. Filters : ${Object.entries(intentData.filters).map(([key, value]) => `${key}:${value}`)}`}
            </p>
          )}
        </div>
      )}
    </>
  );
};

//No result found based on AI query
export const NotFoundUI = ({ search, intentData }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <img src={notFound} alt="No Results" className="w-64 lg:w-80 mb-8" />

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 p-2">
          I couldn’t understand your request
        </h2>
        <p className="text-primary-600">{`User Searched: ${search}. AI intepreted your search response : Intent is ${intentData.intent}.`}</p>
        <p className="text-gray-500 p-2">
          I can help with claim status and provider searches. Try asking about
          approved, denied, or pending claims, or search for providers by
          speciality or location.
        </p>
      </div>
    </>
  );
};

export const ServiceFailure = (onBack, hasSearched) => {
  return (
    <>
      <BackUI onBack={onBack} hasSearched={hasSearched} />
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-2">
          <img
            src={serviceFailure}
            alt="data not found"
            className="w-[70%] lg:w-[50%]"
          />
          <h1 className="text-primary-600 text-2xl font-extrabold text-center">
            We couldn't load the data right now. Please try again in a moment.
          </h1>
        </div>
      </div>
    </>
  );
};

export const AuthErrorMessage = ({ errorMessage }) => {
  const errorString = {
    "auth/invalid-credential": "Invalid email or password.",
    "auth/email-already-in-use": "Email is already registered.",
    "auth/weak-password":
      "Password is too weak. Please choose a stronger password.",
    "auth/network-request-failed": "Network error. Please try again.",
  };

  // Validation error (string)
  if (typeof errorMessage === "string") {
    return <p className="text-danger text-caption mb-3">{errorMessage}</p>;
  }

  // Firebase error
  const code = errorMessage?.code;

  return (
    <p className="text-danger text-caption mb-3">
      {errorString[code] || "Something went wrong. Please try again later."}
    </p>
  );
};
