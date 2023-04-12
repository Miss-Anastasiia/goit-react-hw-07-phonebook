import { Item, DelButton } from './ContactItemStyle';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <Item>
      {contact.name}: {contact.phone}
      <DelButton  type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </DelButton >
    </Item>
  );
}