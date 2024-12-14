import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="bg-gray-100 p-4">
          <h1>Welcome to the Portfolio</h1>
          <p>This section can contain some introductory content.</p>
        </div>
        <div className="bg-gray-200 p-4">
          <h2>Additional Section</h2>
          <p>This section can have supplementary information or widgets.</p>
        </div>
      </div>
    </>
  );
}
