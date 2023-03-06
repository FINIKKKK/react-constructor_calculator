import React from "react";

import ss from "./Field.module.scss";

interface FieldProps {}

export const Field: React.FC<FieldProps> = ({ }) => {

  return (
    <div className="field">
      Перетащите сюда
    </div>
  );
};
