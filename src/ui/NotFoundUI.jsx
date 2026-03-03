import notFound from "../assets/notFound.webp";

const NotFoundUI = () => {
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

export default NotFoundUI;
