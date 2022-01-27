// where the patient inputs their Id
const IdInput = ({ id, setId, setCurrComp, pass, setPass }) => {
  const signup = async (e) => {
    let res = await fetch("https://test-pragma-backend.herokuapp.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: id, password: pass }),
    }).catch((e) => alert(e));
    res = await res.json();
    // if the token is returned, the user is signed up
    if (res.token) {
      setCurrComp(1);
    }
  };

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
        <input
          placeholder="Enter your password here"
          type="password"
          className="rounded pl-2 border-2 h-8"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
        {/* button that lets them proceed to the next page */}
        <p
          className="font-sans font-bold text-3xl hover:text-blue-500 cursor-pointer text-center"
          onClick={signup}
        >
          LOGIN!
        </p>
        <p
          className="font-sans font-bold text-3xl hover:text-blue-500 cursor-pointer text-center"
          onClick={signup}
        >
          SIGNUP!
        </p>
      </div>
    </div>
  );
};

export default IdInput;
