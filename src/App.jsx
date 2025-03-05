import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import CountDown from './components/CountDown/CountDown'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {

  const [loading, setLoading] =  useState(true);
  const dispatch = useDispatch(); // This hook is used to dispatch actions to the Redux store.

  useEffect(() => {
    authService.getCurrentUser()  // This function is used to get the current user's data.
      .then((userData) => {
        if(userData){
          dispatch(login(userData));
        } else {
          dispatch(logout()); // This function is used to set the user's authentication status and user data.
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='flex justify-center items-center h-screen w-full flex-col gap-4 bg-gray-800 text-white'>
      <h2 className='text-6xl font-bold'>InkFlow</h2>
      <Header />
      <CountDown />
      <Footer />
    </div>
  )
}

export default App