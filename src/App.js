import './style.css';
import fluffykins from './images/fluffykins.png'
import { BsMailbox2, BsTelephoneFill, BsStar, BsStarFill } from "react-icons/bs";
import React from 'react';

function App() {
  const [contact, setContact] = React.useState({
    firstName: "Fluffykins",
    lastName: "Gemoy",
    phone: "(212) 555-2345",
    email: "fluff@me.com",
    isFavorite: true
  })

  function toggleFavorite() {
    setContact(prevContact => {
      // return object
      return ({
        // kenapa menggunakan ...prevContact ? Karena jika tidak maka state akan mengubah menjadi 1 property saja yaitu isFavorite dan property yang lainnya akan hilang. Sedangkan jika menggunakan ...prevContact akan mengoveride property.
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      })
    })
  }

  return (
    <div className='contacts'>
      <div className='contact-card'>
        <img src={fluffykins} alt='gambar koceng' />
        <h2>{`${contact.firstName} ${contact.lastName}`} {contact.isFavorite ? <BsStar className='icon' size={23} onClick={toggleFavorite} /> : <BsStarFill className='icon' size={23} onClick={toggleFavorite} />} </h2>
        <div className='info-group'>
          <BsTelephoneFill size={23} />
          <p>{contact.phone}</p>
        </div>
        <div className='info-group'>
          <BsMailbox2 size={23} />
          <p>{contact.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
