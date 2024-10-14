const Home = () => {
    return (
      <>
        <div className="home-container">
          <div className="overlay">
            <div className="content">
              <h1>Welcome to Home Page!</h1>
              <p>Your portal to manage employee data efficiently and smoothly.</p>
              <a href="/insert" className="btn-primary">
                Add Employee
              </a>
              <a href="/display" className="btn-secondary">
                View Employees
              </a>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          .home-container {
            background-image: url('https://via.placeholder.com/1920x1080');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            color: #fff;
            text-align: center;
          }
  
          .overlay {
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
  
          .content {
            position: relative;
            z-index: 1;
          }
  
          h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
          }
  
          p {
            font-size: 1.5rem;
            margin-bottom: 30px;
          }
  
          .btn-primary,
          .btn-secondary {
            display: inline-block;
            padding: 15px 30px;
            margin: 10px;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease-in-out;
          }
  
          .btn-primary {
            background-color: #28a745;
            color: white;
          }
  
          .btn-primary:hover {
            background-color: #218838;
          }
  
          .btn-secondary {
            background-color: #007bff;
            color: white;
          }
  
          .btn-secondary:hover {
            background-color: #0056b3;
          }
  
          @media screen and (max-width: 768px) {
            h1 {
              font-size: 2.5rem;
            }
  
            p {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </>
    );
  };
  
  export default Home;
  