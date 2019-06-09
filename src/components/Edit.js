import React from 'react';

const Edit = (_props) => {
  console.log(_props);
  return (
    <div>
      Editing the expense with ID of
      {_props.match.params.id}
    </div>
  );
};

export default Edit;
