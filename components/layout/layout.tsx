const Layout = (props) => {
  return (
    <>
      <div
        className="mx-auto mt-8"
        style={{
          maxWidth: "1140px",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Layout;
