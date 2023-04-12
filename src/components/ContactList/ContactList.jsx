import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { List } from './ContactListStyled';
import { selectVisibleContacts } from 'redux/selectors';

export function ContactList() {
  const list = useSelector(selectVisibleContacts);
  return (
      <List>
      {list.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
}
