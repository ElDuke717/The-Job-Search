import React, { useState } from 'react';

function ApplicationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    applications: 0,
    phoneScreens: 0,
    inPersonInterviews: 0,
    offers: 0,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      applications: parseInt(event.target.elements.applications.value),
      phoneScreens: parseInt(event.target.elements.phoneScreens.value),
      inPersonInterviews: parseInt(event.target.elements.inPersonInterviews.value),
      offers: parseInt(event.target.elements.offers.value),
    };
    setFormData(newFormData);
    onSubmit(newFormData);
  };

  return (
    <div>
      <h1>Enter Job Search Data Here</h1>
      <form className="application-form" onSubmit={handleFormSubmit}>
        <div>
          <label>Applications:</label>
          <input type="number" className="entry" name="applications" />
        </div>
        <div>
          <label>Phone Screens:</label>
          <input type="number" className="entry" name="phoneScreens" />
        </div>
        <div>
          <label>In-Person Interviews:</label>
          <input type="number" className="entry" name="inPersonInterviews" />
        </div>
        <div>
          <label>Offers:</label>
          <input type="number" className="entry" name="offers" />
        </div>
        <div>
          <label>Rejections:</label>
          <input type="number" className="entry" name="rejections" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
