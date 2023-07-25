import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export function useFormData() {
  return useContext(FormDataContext);
}

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    applications: 0,
    phoneScreens: 0,
    inPersonInterviews: 0,
    offers: 0,
  });

  return (
    <FormDataContext.Provider value={[formData, setFormData]}>
      {children}
    </FormDataContext.Provider>
  );
}


