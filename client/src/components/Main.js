import LondonStagsRFC from "../images/LondonStagsRFC.jpg";
import ManchesterSpartans from "../images/ManchesterSpartans.jpg";
import BrightonPride from "../images/BrightonPride.jpg";

function Main({ places, getPlacebylocation, updateLikes }) {
  return (
    <main>
      <div id="sectionone">
        Queer Britain is a charity that supports the LGBT+ community in finding
        belonging. By searching a location, we bring togehter LGBT+ safe spaces
        including local charities, community groups, bars and clubs, cultural
        venues, cabaret and drag, sports clubs and more, in a city or town near
        you, discover the Queer community near where you live or wish to visit.{" "}
      </div>
      <div>
        <img id="stags" src={LondonStagsRFC} />
        <img id="brightonpride" src={BrightonPride} />
        <img id="spartans" src={ManchesterSpartans} />
      </div>
      <div id="buttonsOne">
        <button onClick={() => getPlacebylocation("Colchester")}>
          Colchester
        </button>
        <button onClick={() => getPlacebylocation("Norwich")}>Norwich</button>
        <button onClick={() => getPlacebylocation("North London")}>
          North London
        </button>
        <button onClick={() => getPlacebylocation("South London")}>
          South London
        </button>
      </div>
      <div id="buttonsTwo">
        <img src="" />
        <button onClick={() => getPlacebylocation("Brighton")}>Brighton</button>
        <button onClick={() => getPlacebylocation("Bristol")}>Bristol</button>
        <button onClick={() => getPlacebylocation("Reading")}>Reading</button>
        <button onClick={() => getPlacebylocation("Manchester")}>
          Manchester
        </button>
        <button onClick={() => getPlacebylocation("Liverpool")}>
          Liverpool
        </button>
      </div>

      <div>
        {places.map(function (place) {
          return (
            <div>
              <h2 id="location">{place.location}</h2>
              <p id="name">{place.name}</p>
              <p id="description">{place.description}</p>
              <p id="image">{place.image}</p>
              <p id="link">{place.link}</p>
              <p onClick={() => updateLikes(place._id, place.likes)} id="likes">
                {place.likes}
              </p>
            </div>
          );
        })}
      </div>

      <div id="sectionsix">
        <ul>Why create an account with us</ul>
        <li>Add queer spaces to existing locations</li>
        <li>
          Add a new location which offers welcoming spaces for our community
        </li>
        <li>Favourite places</li>
      </div>

      <div id="sectionthree">Our supporters</div>
      <div id="sectionfour">
        <a href="https://switchboard.lgbt/" id="charity">
          Switchboard
        </a>
        <a href="https://www.stonewall.org.uk/" id="charity">
          Stonewall
        </a>
        <a href="https://queerbritain.org.uk/" id="charity">
          Queer Britian Museum
        </a>
        <a href="https://www.meetup.com/" id="charity">
          MeetUp.Com
        </a>
      </div>
      <div id="sectionfive">
        <a href="https://outforsport.com/" id="charity">
          Out for Sports
        </a>
        <a
          href="https://www.mind.org.uk/information-support/tips-for-everyday-living/lgbtqia-mental-health/about-lgbtqia-mental-health/"
          id="charity"
        >
          Mind
        </a>
        <a href="https://galop.org.uk/" id="charity">
          GALOP anti-abuse
        </a>
      </div>
    </main>
  );
}

export default Main;
