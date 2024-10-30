import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <div id="navbar">
        <div class="title">
          <a href="index.html">HackTravels</a>
        </div>
        <div class="navButtons">
          <a href="addTrip.html">Add Trip</a>
          <a href="addActivity.html">Add Trip Activity</a>
        </div>
      </div>

      <div class="tripsContainer">
        <div class="tripBox">
          <h3>Trips</h3>
        </div>
        <div class="tripBox">
          <h3>Activities</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
