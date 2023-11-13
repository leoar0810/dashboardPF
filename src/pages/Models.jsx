import "../../public/styles/models.css";

export default function Models() {
  return (
    <div className="dashboard">
      <div>
        <h2>
          Estadísticas sobre las empresas más grandes de colombia
          (clusterizadas)
        </h2>
      </div>
      <iframe
        title="Report Section"
        width="900"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNGEzYTBlYjAtY2JlNi00YTdiLWI3ZWYtYzAwMzJkMmRmMmRlIiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}
