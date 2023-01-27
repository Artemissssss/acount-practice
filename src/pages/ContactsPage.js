import {
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import { useState, useEffect } from 'react';

import * as contactsService from '../services/contactsService';

function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    contactsService
      .getContacts()
      .then((res) => setContacts(res))
      .catch((err) => setError(err.response?.data.message || err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && contacts.length > 0 && (
        <List>
          {contacts.map((contact) => (
            <ListItem key={contact.id}>
              <ListItemText
                primary={contact.fullName}
                secondary={contact.email}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
export default ContactsPage;
