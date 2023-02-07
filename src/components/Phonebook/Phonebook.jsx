import { useState } from 'react';
import { nanoid } from 'nanoid';

import styles from './phonebook.module.scss'

import ContactList from '../ContactList/ContactList';
import ContactFilter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

const Phonebook = () => {
  const [phonebooks, setPhonebooks] = useState([]);
  const [filter, setFilter] = useState("");

  const isDublicate = (name) => {
    const normalized = name.toLowerCase();
    const people = phonebooks.find(({ name }) => {
      return name.toLowerCase() === normalized;
    })
    return Boolean(people);
  };

  const addContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    setPhonebooks(prevPhonebooks => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      return [newContact, ...prevPhonebooks];
    })
    return true;
  };

  const removeContact = (id) => {
    setPhonebooks( prevPhonebooks  => prevPhonebooks.filter(item => item.id !== id));
  };

  const handleFilter = ({ target }) => setFilter(target.value );

  const getFilterContact = () => {
    if (!filter) {
      return phonebooks;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = phonebooks.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  }

  const filterContact = getFilterContact();

  return (
    <div>
      <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contact</h2>
        <ContactFilter handleChange={handleFilter} />
        <ContactList removeContact={removeContact} items={filterContact} />
      </div>
    </div>
  );

}

export default Phonebook;
