export default function DonorRegistration() {
  return (
    <div className="form-container">
      <h2>Donor Registration</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="number" placeholder="Age" required />
        <input type="text" placeholder="Blood Group" required />
        <input type="text" placeholder="City" required />
        <select>
          <option value="available">Available</option>
          <option value="not-available">Not Available</option>
        </select>
        <label>
          <input type="checkbox" /> No major medical issues
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
