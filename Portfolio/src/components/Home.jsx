import meImg from "../assets/Profile.png";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

function Home() {
  return (
    <div>
      {/* //start of home */}
      <div className=" my-4 mx-auto m-5">
        <div className="row g-0 m-5">
          <div className="col-md-7 p-5 rounded d-flex flex-column bg-light justify-content-center text-end">
            <div className="p-5">
              <h1 style={{ fontSize: 100 }}>Hi, I am</h1>
              <h2 style={{ fontSize: 120 }}> Jai Gelle J. Aaron</h2>
              <h4>A Graduate in Bachelor of Science in Computer Science</h4>
              <h4>at Bohol Island State University - Clarin Campus</h4>
            </div>
          </div>{" "}
          <div className="col-md-5 d-flex align-items-center p-3 rounded bg-dark">
            <img src={meImg} className="img-fluid rounded" alt="Card image" />
          </div>
        </div>
      </div>
      {/* //end of home //start of about me */}
      <div className="my-4 mx-auto m-5 bg-light mt-5">
        <div className="row g-0 m-5">
          <div className="col-md-6">
            <div className="align-items-center p-3 rounded">
              <img src={image1} alt="" className="img-fluid rounded" />
            </div>
            <div className="align-items-center p-3 rounded">
              <img src={image3} alt="" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5 rounded d-flex flex-column bg-light justify-content-center ">
              <h2 style={{ fontSize: 50 }}>About Me</h2>
              <div className="text-justify">
                <p style={{ fontSize: 25, textAlign: "justify" }}>
                  In the beginning, my aspirations were vague, shaped more by
                  curiosity than by a concrete plan. I was a seeker, eager to
                  explore but unsure of what I was searching for. I dabbled in
                  various pursuits—some academic, some creative, others
                  practical—each offering a glimpse of potential but none
                  feeling like home. I studied, worked odd jobs, and chased
                  opportunities that seemed promising, yet a sense of purpose
                  eluded me. The uncertainty was daunting, but it also fueled my
                  determination to keep moving forward, trusting that clarity
                  would come with time.
                  <br />
                </p>
              </div>
              <div className="text-justify">
                {" "}
                <p style={{ fontSize: 25, textAlign: "justify" }}>
                  The turning point arrived unexpectedly, as life’s pivotal
                  moments often do. My Instructor during my College years
                  suggested I take on a Contract of Service teaching role. I
                  hesitated at first—teaching wasn’t something I’d ever
                  considered seriously. I imagined it as a temporary gig, a way
                  to earn income while I figured out my “real” path. But as I
                  stood before my first group of students, something shifted.
                  Their questions, their struggles, and their small victories
                  sparked something within me. I wasn’t just imparting
                  knowledge; I was connecting, guiding, and witnessing growth in
                  real time. It was a quiet revelation, one that grew louder
                  with each session. <br />
                </p>
              </div>
              <div className="text-justify">
                {" "}
                <p style={{ fontSize: 25, textAlign: "justify" }}>
                  Embracing teaching wasn’t without its challenges. I had to
                  learn to navigate diverse learning styles, manage classroom
                  dynamics, and overcome my own self-doubt. There were moments
                  when I questioned whether I was cut out for this—nights spent
                  preparing lessons, worrying if I was making a difference. But
                  with each hurdle, I grew. I sought mentorship, refined my
                  methods, and leaned into the discomfort of growth. I
                  discovered that teaching wasn’t just about delivering
                  information; it was about fostering curiosity, building
                  confidence, and creating a space where students could thrive.
                  The more I invested in my students, the more I realized how
                  much I was learning from them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of about me */}
      {/* start of experience */}
      <div className="my-4 mx-auto m-5 bg-light mt-5">
        <div className="row g-0 m-5">
          <h1 className="text-center">Experience</h1>
          <div className="col-md-12">
            <h3 className="text-center">
              A year of experience as an Instructor on Bohol Island State
              University
            </h3>
          </div>
          <div className="col-md-6 p-3 rounded">
            <img src={image1} alt="" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 p-3 rounded">
            <img src={image2} alt="" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
