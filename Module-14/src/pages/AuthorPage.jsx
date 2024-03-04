import { useEffect } from "react";

import { actions } from "../actions";
import { useAuth } from "../hooks/useAuth";
import Bio from "../components/author/Bio";
import { useAxios } from "../hooks/useAxios";
import { useAuthor } from "../hooks/useAuthor";
import MyBlogs from "../components/author/MyBlogs";
import AuthorImage from "../components/author/AuthorImage";

const AuthorPage = () => {
  const { state, dispatch } = useAuthor();

  const { auth } = useAuth();
  const { newAxios } = useAxios();

  const id = auth?.user?.id;

  useEffect(() => {
    dispatch({ type: actions.author.DATA_FETCHING });

    const authorDataFetching = async () => {
      try {
        const response = await newAxios.get(`/profile/3d2dde4b6548275fb066`);

        if (response.status === 200) {
          dispatch({ type: actions.author.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({
          type: actions.author.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    authorDataFetching();
  }, [id, dispatch]);

  if (state.isLoading) return <h2>Fetching...</h2>;

  // console.log(state);

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        {/* profile info */}
        <div className="flex flex-col items-center py-8 text-center">
          <AuthorImage />

          <div>
            <h3 className="text-2xl font-semibold text-white lg:text-[28px] capitalize">
              {state?.author?.firstName} {state?.author?.lastName}
            </h3>
            <p className="leading-[231%] lg:text-lg">{state?.author?.email}</p>
          </div>
          <Bio />
          <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>
        {/* end profile info */}

        <MyBlogs />
      </div>
    </main>
  );
};

export default AuthorPage;
