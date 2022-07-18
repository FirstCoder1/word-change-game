import React from "react";
import { useMemo } from "react";
function Test({ para }) {
  console.log("now Test function is being redered");
  return <div>Test</div>;
}
export default React.memo(Test);
