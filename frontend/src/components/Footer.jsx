const Footer = () => {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Cybrom Pvt Ltd. All Rights Reserved.</p>
            <p>
              <a href="mailto:info@company.com">info@company.com</a> | 
              <a href="https://www.company.com" target="_blank" rel="noreferrer"> www.company.com</a>
            </p>
          </div>
        </footer>
  
        <style jsx>{`
          .footer {
            background-color: #343a40;
            color: white;
            padding: 20px 0;
            text-align: center;
            position: relative;
            bottom: 0;
            width: 100%;
          }
  
          .footer p {
            margin: 5px 0;
            font-size: 1rem;
          }
  
          .footer a {
            color: #ffc107;
            text-decoration: none;
            margin: 0 10px;
            transition: color 0.3s ease;
          }
  
          .footer a:hover {
            color: #fff;
          }
  
          @media screen and (max-width: 768px) {
            .footer {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </>
    );
  };
  
  export default Footer;
  