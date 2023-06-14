import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_USER_INFO } from "../store/reducers/user";
import { SET_STEP } from "../store/reducers/ui";

const useSubmitForm = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormHandler = (values, step) => {
    if (path) navigate(path);
    dispatch(ADD_USER_INFO(values));
    if (step) dispatch(SET_STEP(step));
  };

  return submitFormHandler;
};

export default useSubmitForm;
