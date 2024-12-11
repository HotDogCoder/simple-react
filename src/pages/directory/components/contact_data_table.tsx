import React, { useState } from 'react'
import { ContactRequest, ContactResponse, ContactState } from '../redux/types/contact_types'
import UpdateContactModal from './update_contact_modal';
import { HiPencil } from 'react-icons/hi';

type Props = {
  selectedRow: number,
  data: ContactRequest[],
  updateContact: (data: ContactState) => void,
  handleUpdate: (data: ContactState) => void,
  putContact: (data: ContactState) => void,
}

export const ContactDataTable = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleOptionClick = (row: ContactRequest) => {
    setIsOpen(false)
  };

  return (
    <>
      {props.data && props.data.length > 0 ? (
        <div className='pt-5'>

          <div className="overflow-x-scroll">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        First Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Office Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Office Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Photo
                    </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.data.map((contact) => (
                <tr
                  key={contact.id}
                  onClick={() => handleOptionClick(contact)}
                > 
                <td className="gap-2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className='p-1 w-1/3'>
                      <UpdateContactModal 
                          handleFormSubmit={props.handleUpdate}
                          icon={<HiPencil />}
                          label={''}
                          contact={contact} colors={[]}
                          postContact={props.updateContact}
                          putContact={props.putContact}/>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.first_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.last_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.office_phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.office_address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.photo}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      ) : (
        <p>No tienes contactos aun</p>
      )}
    </>
  )
}
