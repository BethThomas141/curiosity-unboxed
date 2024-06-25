
import HintDropDownBox from "../../shared-components/HintDropDownBox";
import {Stack} from "react-bootstrap";


function HintSection({hints}) {
  return (
    <div className={"mt-5 w-100  justify-content-center px-lg-5"}>
      <div className={"mt-5 hints-wrapper "}>
      <h1 className={"text-white"}> Hints</h1>
      <Stack gap={3} className={"pb-4"}>
        {hints.map((hint) => <HintDropDownBox title={hint.title} steps={hint.steps}/>)}
      </Stack>
      </div>
    </div>

  );
}

export default HintSection;
