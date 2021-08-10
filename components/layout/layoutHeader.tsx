import { useEffect, useState } from "react";
import Modal from "react-modal";
import { supabase } from ".././../utils/supabaseClient";
import { isMobile } from "react-device-detect";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderWidth: "2px",
    borderColor: "black",
    borderRadius: "0px",
  },
};
Modal.setAppElement("#app");

const LayoutHeader = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  const [width, setWidth] = useState(1440);

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    if (typeof window !== "undefined") {
      // detect window screen width function
      setWidth(window.innerWidth);
    }
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <div className="flex justify-between px-8 md:px-0">
        <a className="flex align-center">
          <a href="/">
            <div className="mr-4 my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 my-auto align-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </a>

          <h1 className="font-semibold my-auto">
            <a href="/">XRP to the Moon</a>
          </h1>
        </a>
        {width > 640 ? (
          <div className="my-auto  tracking-widest flex text-sm font-medium text-gray-700">
            <a
              href="/portfolio"
              style={{ color: "#1b1b1b" }}
              className=" mr-12 my-auto"
            >
              <span className="hover:text-gray-500">Portfolio</span>
            </a>
            <div
              className=" my-auto p-3 mr-12"
              style={{ backgroundColor: "#1b1b1b" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" my-auto  align-center h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {!session ? (
              <button
                onClick={() => openModal()}
                className="my-auto text-gray-800 text-sm font-semibold"
              >
                Login
              </button>
            ) : (
              <button
                onClick={async () =>
                  supabase.auth.signOut().then(() => console.log("logout"))
                }
                className="my-auto text-gray-800 text-sm font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          <div className="my-auto  tracking-widest flex text-sm font-medium text-gray-700">
            {!session ? (
              <button
                onClick={() => openModal()}
                className="my-auto text-gray-800 text-sm font-semibold"
              >
                Login
              </button>
            ) : (
              <button
                onClick={async () =>
                  supabase.auth.signOut().then(() => console.log("logout"))
                }
                className="my-auto text-gray-800 text-sm font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="pb-6 pt-4 px-4 md:px-16 text-center mx-auto">
          <div
            className="flex justify-end mb-4 cursor-pointer"
            onClick={() => closeModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="mb-8 text-gray-800 text-center font-mono font-semibold text-2xl">
            Login or Register
          </h2>
          <input
            className="px-8 md:px-24 text-gray-800 text-center border-2 border-black font-bold font-mono mt-2 py-2"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          {/* <input
            className="px-24 text-gray-800 text-center border-2 border-black font-bold font-mono mt-4 py-2"
            placeholder="password"
            type="password"
          />
          <br /> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            disabled={loading}
            className="w-full font-mono mt-4 border-2 px-4 py-2 text-white bg-black hover:bg-transparent hover:text-black border-black "
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button>
          <div className="mt-4 flex justify-between">
            <a href="#" className="underline text-gray-500 font-mono text-left">
              Forgot Password?
            </a>
            <a
              href="#"
              className="underline text-gray-500 font-mono text-right"
            >
              Create Account
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LayoutHeader;
