import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiCheck, HiPencil } from "react-icons/hi";
import Select from "react-select";
import {
  InputLabel,
  TextField,
  Select as SelectMui,
  SelectChangeEvent,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  FormControl,
} from "@mui/material";
import { CustomButton } from "../../../core/components/buttons/custom_button";
import { ContactRequest, ContactState } from "../redux/types/contact_types";
import axios from "axios";
axios.defaults.withCredentials = true;

type Props = {
  contact: ContactRequest;
  colors: string[];
  icon: React.ReactElement;
  label: string;
  handleFormSubmit: (data: ContactState) => void;
  postContact: (data: ContactState) => void;
  putContact: (data: ContactState) => void;
};

export default function UpdateContactModal(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const initialRequestData: ContactRequest = {
    first_name: props.contact.first_name,
    last_name: props.contact.last_name,
    phone: props.contact.phone,
    office_phone: props.contact.office_phone,
    email: props.contact.email,
    address: props.contact.address,
    office_address: props.contact.office_address,
    photo: props.contact.photo,
    description: props.contact.description,
    id: props.contact.id,
  };

  const [requestData, setRequestData] =
    useState<ContactRequest>(initialRequestData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRequestData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange =
    (fieldName: keyof ContactRequest) => (selectedOptions: any) => {
      setRequestData({
        ...requestData,
        [fieldName]: selectedOptions,
      });
    };

  // const handleChange = <T extends keyof ContactRequestData>(fieldName: T, data: any) => (event: SelectChangeEvent<typeof requestData[T]>) => {
  //   const {
  //     target: { value }
  //   } = event;
  //   console.log(value)
  //   setRequestData(prevState => ({
  //     ...prevState
  //   }));
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/lawyer/add-contact`,
      requestData
    );
    console.log("update contact response: ", response.data);
    props.putContact(response.data);
  };

  return (
    <>
      <CustomButton
        colors={props.colors}
        icon={props.icon}
        label={props.label}
        onClick={openModal}
      />

      <Transition onClose={closeModal} appear show={isOpen} as={Dialog}>
        <Dialog
          onClose={closeModal}
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          open={isOpen}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Dialog.Overlay}
              className="fixed inset-0 bg-black opacity-30"
            />
            <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-1/2 mx-auto z-10">
              <Dialog.Title
                id="modal-title"
                className="text-lg md:text-xl p-1 font-medium leading-6 text-gray-900"
              >
                <strong>Nuevo expediente</strong>
              </Dialog.Title>

              <form
                onSubmit={handleSubmit}
                className="flex flex-wrap items-left"
              >
                <div className="p-1 w-1/2">
                  <label htmlFor="first_name" className="text-md">
                    First Name: *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    onChange={handleInputChange}
                    value={requestData.first_name}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>
                <div className="p-1 w-1/2">
                  <label htmlFor="last_name" className="text-md">
                    Last Name: *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    onChange={handleInputChange}
                    value={requestData.last_name}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>
                <div className="p-1 w-1/2">
                  <label htmlFor="phone" className="text-md">
                    Phone: *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={handleInputChange}
                    value={requestData.phone}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>
                <div className="p-1 w-1/2">
                  <label htmlFor="office_phone" className="text-md">
                    Office Phone:
                  </label>
                  <input
                    type="text"
                    name="office_phone"
                    id="office_phone"
                    onChange={handleInputChange}
                    value={requestData.office_phone}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>
                <div className="p-1 w-1/2">
                  <label htmlFor="email" className="text-md">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleInputChange}
                    value={requestData.email}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>
                <div className="p-1 w-full">
                  <label htmlFor="address" className="text-md">
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleInputChange}
                    value={requestData.address}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>
                <div className="p-1 w-full">
                  <label htmlFor="office_address" className="text-md">
                    Office Address:
                  </label>
                  <input
                    type="text"
                    name="office_address"
                    id="office_address"
                    onChange={handleInputChange}
                    value={requestData.office_address}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>
                <div className="p-1 w-full">
                  <label htmlFor="photo" className="text-md">
                    Photo:
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    onChange={handleInputChange}
                    value={requestData.photo}
                    className="w-full px-2 py-1 border rounded-md"
                  />
                </div>

                <div className="w-full pt-2">
                  <p className="text-sm text-gray-500 text-right">
                    Todo listo para enviar?
                  </p>
                </div>

                <div className="w-full pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={closeModal}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Si
                    <HiCheck className="ml-2 -mr- h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
