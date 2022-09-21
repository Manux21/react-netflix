import React from 'react';
import SavedShows from "../components/SavedShows";

const Account  = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/379cdd25-5f9a-45de-92fd-fa51a1cc8b4c/FR-en-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/"/>
      </div>

      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-white text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedShows/>
    </>
  );
};

export default Account;
