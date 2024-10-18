const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="content-container">
          <h2>Welcome to Your Employee Portal</h2>
          <p>Efficiently manage and track employee data in one place.</p>
          <div className="button-group">
            <a href="/insert" className="btn btn-primary">
              Add Employee
            </a>
            <a href="/display" className="btn btn-secondary">
              View Employees
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQEBEsIJX8mtHg/article-cover_image-shrink_720_1280/0/1702198866773?e=2147483647&v=beta&t=3_pyHt0P7c44VQNsAYpqjVnWhlWErZcpK72WyW5xiXk"
            alt="IT Company"
            className="side-image"
          />
        </div>
      </div>

      <style jsx>{`
        .home-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f8f9fa;
          padding: 20px;
          box-sizing: border-box;
        }

        .content-container {
          flex: 1;
          color: #343a40;
          text-align: left;
          padding: 20px;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #343a40;
          letter-spacing: 1px;
        }

        p {
          font-size: 1.25rem;
          margin-bottom: 40px;
          color: #6c757d;
          line-height: 1.5;
        }

        .button-group {
          display: flex;
          gap: 20px;
        }

        .btn {
          padding: 15px 30px;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 50px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.2s;
        }

        .btn-primary {
          background-color: #28a745;
          color: #fff;
        }

        .btn-primary:hover {
          background-color: #218838;
          transform: translateY(-3px);
        }

        .btn-secondary {
          background-color: #007bff;
          color: #fff;
        }

        .btn-secondary:hover {
          background-color: #0056b3;
          transform: translateY(-3px);
        }

        .image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .side-image {
          max-width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        @media screen and (max-width: 768px) {
          .home-container {
            flex-direction: column;
            text-align: center;
          }

          .image-container {
            margin-top: 20px;
          }

          h2 {
            font-size: 2rem;
          }

          p {
            font-size: 1.1rem;
          }

          .btn {
            padding: 12px 25px;
            font-size: 0.9rem;
          }

          .button-group {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
