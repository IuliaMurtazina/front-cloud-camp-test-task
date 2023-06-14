import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_USER_INFO } from "../store/reducers/user";

const useSubmitForm = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormHandler = (values) => {
    if (path) navigate(path);
    dispatch(ADD_USER_INFO(values));
  };

  return submitFormHandler;
};

export default useSubmitForm;
