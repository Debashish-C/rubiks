import React from 'react'

const Login = () => {
  return (
    <div className='w-2/3 h-full flex justify-center items-center flex-col pt-5 '>
      <h1 className='text-center text-2xl font-mono'>Log In</h1>
      <form action="" className='flex flex-col justify-center items-center p-2 '>
        <input type="text" placeholder='user name' className='p-2 m-1 outline-none bg-black border-2 border-white rounded-md font-semibold'/>
        <input type="password" placeholder='password'className='p-2 m-1 outline-none bg-black border-2 border-white rounded-md' />
      </form>
      <button className='m-1 p-2 border-2 border-white rounded-md'>Submit</button>
      <div className="p-3 mt-2 text-[14px]">
        <button>Don't have account <a href="" className='text-red-500'>
             Signup here
            </a>
             </button>
      </div>
    </div>
  )
}

export default Login
