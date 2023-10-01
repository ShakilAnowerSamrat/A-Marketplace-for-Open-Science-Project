import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
      const { error, status } = useRouteError()

      return (
            <>
                  <div className="min-h-screen flex items-center justify-center bg-gray-100">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                              <h1 className="text-4xl font-semibold text-red-500 mb-4">Error</h1>
                              <p className="text-gray-700 mb-4">An error occurred. Please try again later.</p>
                              <p className='text-red-700 text-center mt-3'>
                                    {error?.message}</p>
                              <button

                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                              >


                                    <p> <Link
                                          to='/'
                                          className='text-white text-center'
                                    >
                                          Go Back
                                    </Link>

                                    </p>
                              </button>
                        </div>
                  </div>
               

            </>
      );
};

export default ErrorPage;
