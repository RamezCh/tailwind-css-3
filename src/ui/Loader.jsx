function Loader() {
  // inset-0 means top,left, right, bot 0px
  return (
    <div className="backdrop-blue-sm absolute inset-0 flex items-center justify-center bg-slate-200/20">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
