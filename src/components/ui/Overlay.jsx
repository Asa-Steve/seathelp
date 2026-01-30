const Overlay = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="inset-0 absolute backdrop-blur-sm bg-black/40 z-200"
    ></div>
  );
};

export default Overlay;
