import styles from "../styles/TripForm.module.css";

const AddTrip = () => {
  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      {/* Add your form here with .tripForm as className */}
      <form className={styles.tripForm}>
        <label for="destination">Destination:</label>
        <input type="text" class="destination" name="destination" required />

        <label for="startDate">Start Date:</label>
        <input type="date" class="startDate" name="startDate" required />

        <label for="endDate">End Date:</label>
        <input type="date" class="endDate" name="endDate" required />

        <label for="entry">Journal Entry:</label>
        <textarea class="entry" name="entry" required></textarea>

        <button type="submit">Add Trip</button>
      </form>
    </div>
  )
};

export default AddTrip;
