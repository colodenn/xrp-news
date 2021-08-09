import { useState } from "react";

const Newsletter = (props) => {
  const [email, setEmail] = useState("");
  async function subscribe() {
    const response = await fetch(`/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const json = await response.json();
    // TODO(Corno): Add a proper error handling
    alert("You will get notified on the latest XRP news");
  }
  return (
    <>
      <div className="bg-gray-100 mx-auto text-center p-16 mt-16">
        <h2 className="text-4xl font-bold">Newsletter</h2>
        <p className="font-mono mt-8 font-medium text-xl text-gray-500">
          Sign up and get awesome news
        </p>
        <input
          className="focus:outline-none mt-8 py-2 border-b-2 border-black bg-transparent text-center text-gray-400 text-xl font-bold"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button
          onClick={() => subscribe()}
          className="hover:bg-transparent hover:text-black mt-8 border-2 border-black bg-black text-white px-4 py-2 font-medium"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Newsletter;
