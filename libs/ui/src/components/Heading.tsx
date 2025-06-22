const Heading = ({ heading }: { heading: string }) => {
  return (
    <h1 className="text-white font-semibold text-center text-3xl py-4 bg-gray-800 border-b border-gray-60 w-full">
      {heading}
    </h1>
  );
};

export default Heading;
