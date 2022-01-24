import { FormGroup, TextField } from "@mui/material";
import classes from "./ProjectSearch.module.css"

const ProjectSearch = ({ onChangeSearch }) => {
  const onSearchTypeHandler = (event) => {
    onChangeSearch(event.target.value);
  };

  return (
    <div>
      <FormGroup className={classes.formline}>
        <TextField
          variant="standard"
          label="Search"
          type="text"
          onChange={onSearchTypeHandler}
        />
      </FormGroup>
    </div>
  );
};

export default ProjectSearch;
