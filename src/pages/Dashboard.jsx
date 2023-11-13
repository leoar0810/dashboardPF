import "../../public/styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <h2>Estadísticas sobre las empresas más grandes de colombia</h2>
      </div>
      <iframe
        title="Report Section"
        width="1300"
        height="1100"
        src="https://app.powerbi.com/view?r=eyJrIjoiMjc3YjZiNGQtMGQ2NC00ZThlLWE2ZGQtYTkwZWEwZjllNDY0IiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}
