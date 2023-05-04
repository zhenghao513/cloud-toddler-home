export interface AddressBookRes {
  id: string;
  name: string;
  phone: string;
}

export function queryAddressBook() {
  return axios.get('/address-book');
}
