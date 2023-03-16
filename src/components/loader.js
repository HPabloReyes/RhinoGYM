export default function Loader() {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-danger"
        role="progressbar"
        style={{ width: "100%" }}
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
