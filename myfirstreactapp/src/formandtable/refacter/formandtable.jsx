import React from "react";
import Form from "./form.jsx";
import Table from "./table.jsx";
import View from "./view.jsx";
import { FromProvider } from "./provider.jsx";
import "/home/tamil/myfirstreactapp/src/formandtable/formandtable.css";

function FormAndTable() {
  return (
    <div>
      <FromProvider>
        <Table />
        <View />
        <Form />
      </FromProvider>
    </div>
  );
}

export default FormAndTable;
