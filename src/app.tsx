import "./app.css";
import Title from "./components/Title";

export function App() {
  const websiteTitle = "Preact";
  return (
    <div>
      <Title>Home | {websiteTitle}</Title>
      <h1>Home | {websiteTitle}</h1>
    </div>
  );
}
