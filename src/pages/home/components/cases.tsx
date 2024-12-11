import React from 'react'
import { HiMailOpen } from 'react-icons/hi';

type Case = {
    id: number;
    name: string;
    code: string;
    description: string;
    fullname: string;
}

type Props = {
    handleFormSubmit: (data:any) => void
}

const PanelCases = ({handleFormSubmit}: Props) => {

  return (
    <>
        <div className="bg-white rounded-lg shadow-lg">
            <div className='w-full p-2 text-center'>
                {/* <NewCaseModal handleFormSubmit={handleFormSubmit}/> */}
            </div>
        </div>

    </>
  )
}

export default PanelCases