import './App.css'

function App() {

  return (
    <>
      <Navbar/>
  <Home/>
    </>


  )
}

function Navbar(){

  return (
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#home">Brand</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Portfolio</a>
                    </li>
            
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

function Home(){
  return(
     <div className="card my-4 mx-auto" style={{ maxWidth: '960px' }}>
      <div className="row g-0">
       
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              This is a sample card with a larger text column. You can add any content here, such as
              descriptions, lists, or other elements. The text column is designed to be wider than the
              image column for better readability and emphasis on the content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div> <div className="col-md-4">
          <img
            src="https://via.placeholder.com/150"
            className="img-fluid rounded-start"
            alt="Card image"
          />
        </div>
      </div>
    </div>
  )
}

export default App
