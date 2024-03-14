import { useState } from "react";

import EDIT from "../../assets/icons/edit.svg";
import CHECK from "../../assets/icons/close.svg";
import { useAuthor } from "../../hooks/useAuthor";
import { useAxios } from "../../hooks/useAxios";
import { actions } from "../../actions";
import { useAuth } from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const Bio = () => {
  const { newAxios } = useAxios();
  const { auth } = useAuth();
  const { state, dispatch } = useAuthor();

  const [editMode, setEditMode] = useState(false);
  const [bio, setBio] = useState(state?.author?.bio);

  const handleBioEdit = async () => {
    dispatch({ type: actions.author.DATA_FETCHING });

    try {
      const response = await newAxios.patch(
        `/profile`,
        { bio },
        { headers: { Authorization: `Bearer ${auth?.accessToken}` } }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.author.AUTHOR_DATA_EDITED,
          data: response.data,
        });
      }
      setEditMode(false);
    } catch (err) {
      console.log(err);
      dispatch({
        type: actions.author.DATA_FETCH_ERROR,
        error: err.message,
      });
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-100 lg:text-lg">
            {state?.author?.bio}
          </p>
        ) : (
          <textarea
            className='p-2 className="leading-[188%] text-gray-600 lg:text-lg rounded-md bg-gray-200'
            value={bio}
            rows={4}
            cols={60}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>
      {!editMode ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMode(true)}
        >
          <img src={EDIT} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleBioEdit}
        >
          <img src={CHECK} alt="Check" />
        </button>
      )}
    </div>
  );
};

export default Bio;
