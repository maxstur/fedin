import "./LoaderComponent.css";

export const LoaderComponent = () => {
  return (
    <div className="itemLoader">
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
      <span className="loaderSpan">Cargando...</span>
    </div>
  );
};
