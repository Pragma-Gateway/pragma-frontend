// where the patient inputs their Id
const IdInput = ({ id, setId, setCurrComp }) => {
  return (
    <div className="max-w-full">
      <div className="w-full h-96 grid place-content-center gap-4">
        <p className="font-sans font-bold text-2xl">
          Please enter your unique identifier
        </p>
        <input
          placeholder="Enter your identifier here"
          type="text"
          className="rounded pl-2 border-2 h-8"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        {/* button that lets them proceed to the next page */}
        <p
          className="font-sans font-bold text-3xl hover:text-blue-500 cursor-pointer text-center"
          onClick={() => setCurrComp(1)}
        >
          GO!
        </p>
      </div>
    </div>
  );
};

export default IdInput;
