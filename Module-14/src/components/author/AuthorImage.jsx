import { useRef } from "react";

import { actions } from "../../actions";
import { base_url } from "../../services";
import { useAuth } from "../../hooks/useAuth";
import EDIT from "../../assets/icons/edit.svg";
import { useAxios } from "../../hooks/useAxios";
import { useAuthor } from "../../hooks/useAuthor";

const AuthorImage = () => {
  const { state, dispatch } = useAuthor();
  const { newAxios } = useAxios();
  const fileUploaderRef = useRef();
  const { auth } = useAuth();

  const avatar = state?.author?.avatar ?? auth?.user?.avatar;

  const handleImageUpload = (event) => {
    event.preventDefault();

    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await newAxios.post(`/profile/avatar`, formData, {
        headers: { Authorization: `Bearer ${auth?.accessToken}` },
      });
      if (response.status === 200) {
        dispatch({
          type: actions.author.IMAGE_UPDATED,
          data: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.author.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div>
      <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        {auth?.user?.avatar ? (
          <img
            className="w-[125px] h-[125px] rounded-full border-2 border-green-600"
            src={`${base_url}/uploads/avatar/${avatar}`}
            alt={auth?.user?.firstName}
          />
        ) : (
          <div className="w-[120px] h-[120px] bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
            <span className="">{auth?.user?.firstName.charAt(0)}</span>
          </div>
        )}

        <form id="form" encType="multipart/form-data">
          <button
            className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
            onClick={handleImageUpload}
            type="submit"
          >
            <img src={EDIT} alt="Edit" />
          </button>
          <input id="file" type="file" ref={fileUploaderRef} hidden />
        </form>
      </div>
    </div>
  );
};

export default AuthorImage;
