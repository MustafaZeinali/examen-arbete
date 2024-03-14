import "../style/mainPage.css";
import image1 from "../../public/image1.png";
import profile from "../../public/profile.png";

const MainPage = () => {
  return (
    <main >
      <article className="main-page-Container">
        <section className="m-post-container">
          <div className="m-p-top">
            <p className="m-p-more">...</p>

            <div>
              {" "}
              <img className="m-p-profile" src={profile} alt="profile" />{" "}
              <p>name</p>
            </div>
          </div>

          <div className="m-p-image">
            {" "}
            <img src={image1} alt="image of flower" />
          </div>
          <p className="m-p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores
            libero incidunt iste, voluptatibus cumque eius quaerat veniam,
            voluptates dicta dolorem reiciendis repudiandae architecto pariatur
            eveniet saepe. Amet, aliquid dolor.
          </p>
          <p  className="m-p-date">2024/02/27 14.21</p>
        </section>
     
        
      </article>
    </main>
  );
};

export default MainPage;
