import React from "react";
import * as Styled from "./styles";

const VerifiedBadge = ({ isVerified }) => {
  return isVerified ? (
    <Styled.Badge success>Verified</Styled.Badge>
  ) : (
    <Styled.Badge danger>Not Verified</Styled.Badge>
  );
};

const CatFact = ({
  pageOrderIndex,
  text,
  newText,
  isVerified,
  isEditable,
  handleEdit,
  handleCancel,
  handleSave,
  handleDelete,
  handleChangeText,
}) => (
  <Styled.CatFact>
    <h3>
      Fact {pageOrderIndex + 1} <VerifiedBadge isVerified={isVerified} />
    </h3>
    {isEditable && (
      <>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={newText}
          onChange={handleChangeText}
        />
        <p>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </p>
      </>
    )}
    {!isEditable && (
      <>
        <p>{text && text}</p>
        <button onClick={handleEdit}>Edit</button>
      </>
    )}
  </Styled.CatFact>
);

export default CatFact;
