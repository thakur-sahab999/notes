import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-gray-900 text-primary-content shadow-lg text-white">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name
          ? `Make your Own World, ${sessionData?.user?.name}`
          : `Sign In to start making your Own World`}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              className="btn-ghost btn-circle avatar btn"
              tabIndex={0}
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ? sessionData?.user?.image : ""}
                  alt={sessionData?.user?.name ? sessionData?.user?.name : ""}
                />
              </div>
            </label>
          ) : (
            <button
              className="btn-ghost btn "
              onClick={() => void signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
