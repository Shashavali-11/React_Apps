export const TrainData = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Train Info System</title>
      {/* Header */}
      <header>
        <h1>🚆 Train Information System 🚆</h1>
      </header>
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li>
            <a
              className="nav-link active"
              aria-current="page"
              href="Search_Station.html"
              target="_blank"
            >
              Search_Station
            </a>
          </li>
          <li>
            <a className="nav-link" href="Search_Train.html" target="_blank">
              Train_Search
            </a>
          </li>
          <li>
            <a
              className="nav-link active"
              aria-current="page"
              href="Search_Between_Stations.html"
              target="_blank"
            >
              Search_Between_Stations
            </a>
          </li>
          <li>
            <a className="nav-link" href="PNR_Status.html" target="_blank">
              PNR_Status
            </a>
          </li>
        </ul>
      </nav>
      {/* Dynamic Content Section */}
      <main id="content">
        <h2>Welcome to Train Information System</h2>
        <div className="booxx">
          <div className="boox">
            <a href="Search_Station.html" target="_blank">
              <img
                src="https://images.unsplash.com/photo-1527839321757-ad3a2f2be351?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhaW4lMjBzdGF0aW9ufGVufDB8fDB8fHww"
                alt="Search_Station"
              />
            </a>
            <p className="cp">Search_Station</p>
          </div>
          <div className="boox">
            <a href="Search_Train.html" target="_blank">
              <img
                src="https://img.freepik.com/free-photo/cinematic-steam-train-railroad-background_1409-5628.jpg"
                alt="Search_Train"
              />
            </a>
            <p className="cp">Search_Train</p>
          </div>
          <div className="boox">
            <a href="Search_Between_Stations.html" target="_blank">
              <img
                src="https://img.freepik.com/premium-photo/modern-background-with-steam-train-bridge-generative-ai_887552-394.jpg"
                alt="Search_Between_Stations"
              />
            </a>
            <p className="cp">Search_Between_Stations</p>
          </div>
          <div className="boox">
            <a href="PNR_Status.html" target="_blank">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG8dc8WShN-UvNkVcki8A4TsZs30EtBSVySen42Ehu0hB6OZb7vo2XeljYZVDp1IGpX0rIz6-FnE2qYMekz0KWrzOBKucYj8T3EHjRnlVC9otymRp-yVaYv9qDLOXl86VHcqyLnGWQwKA/s1600/how-to-check-pnr-status-railway-airlines.jpg"
                alt="PNR_Status"
              />
            </a>
            <p className="cp">PNR_Status</p>
          </div>
        </div>
        <br />
        <br />
        <h2>
          <strong>Select an option from the menu to get started.</strong>
        </h2>
      </main>
      {/* Footer */}
      <footer>
        <p>© 2025 Train Info System | All Rights Reserved</p>
      </footer>
    </>
  );
};
