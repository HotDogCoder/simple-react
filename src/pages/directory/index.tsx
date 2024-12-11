import { useEffect, useState } from "react";
import FullWidthLayout from "../../layouts/full_width_layout";
import { ContactDataTable } from "./components/contact_data_table";
import NewContactModal from "./components/new_contact_modal";
import axios from "axios";
import { ContactRequest, ContactResponse, ContactState } from "./redux/types/contact_types";
import { ConnectedProps, connect } from "react-redux";
import { getContact, postContact, putContact, updateContact } from "./redux/actions/contact_action";
import { RootState } from "../../store";

const Directory: React.FC<PropsFromRedux> = ({
  id,
  contacts,
  error,
  message,
  new_one,
  getContact,
  postContact,
  putContact,
  updateContact
}: PropsFromRedux) => {

  const handleFormSubmit = (data:ContactState) => {
    console.log('create contact response: ', data)
  }

  useEffect(() => {
    const handleGetContacts = async (data: ContactRequest) => {
      console.log('handleGetContacts data: ', data)
      await getContact({
        id: 0,
        contacts: []
      })
    }

    handleGetContacts({id:0, first_name: ''})
    
  }, [])

  return (
    <FullWidthLayout>
      <div className='p-3'>
        <NewContactModal 
        handleFormSubmit={handleFormSubmit}
        postContact={postContact}
        putContact={putContact}
        />
      </div>
      <div className='p-3'>
        <ContactDataTable 
          selectedRow={0}
          data={contacts ? contacts : []}
          updateContact={updateContact}
          handleUpdate={handleFormSubmit} 
          putContact={putContact}/>
      </div>
    </FullWidthLayout>
  )
}

const mapStateToProps = (state: RootState) => ({
      id: state.contact_state?.id,
      contacts: state.contact_state?.contacts,
      error: state.contact_state?.error,
      message: state.contact_state?.message,
      new_one: state.contact_state?.new_one
});

const mapDispatchToProps = {
  getContact,
  postContact,
  putContact,
  updateContact
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Directory);