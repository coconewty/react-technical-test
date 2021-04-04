import React, { useState } from "react";
import CatFactView from "./CatFact.view";

const CatFact = ({ pageOrderIndex, text, isVerified, catData, setCatData }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancel = () => {
    setIsEditable(false);
    setNewText(text);
  };

  const handleSave = () => {
    setCatData(
      catData.map((item, i) => {
        return i !== pageOrderIndex ? item : { ...item, text: newText };
      })
    );
  };

  const handleDelete = () => {
    setCatData(catData.filter((item, i) => i !== pageOrderIndex));
  };

  const handleChangeText = (e) => {
    setNewText(e.target.value);
  };

  return (
    <CatFactView
      pageOrderIndex={pageOrderIndex}
      text={text}
      newText={newText}
      isVerified={isVerified}
      isEditable={isEditable}
      handleEdit={handleEdit}
      handleCancel={handleCancel}
      handleSave={handleSave}
      handleDelete={handleDelete}
      handleChangeText={handleChangeText}
    />
  );
};

export default CatFact;
