import React from 'react'

function Dashboard() {
  return (
    <div className='bg-custom-gradient text-white h-[100vh] flex flex-col  '>
        <h1 className='text-5xl p-10'>Welcome Shudhanshu</h1>
        <div className='border-t-2 w-[80%] mx-auto flex'>
            <div className='border-r-2 w-[20%] p-7 gap-10 flex flex-col'>
                <div className='text-xl p-5'>Created trips</div>
                <div className='text-xl p-5 pt-7'>Joined trips</div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Dashboard