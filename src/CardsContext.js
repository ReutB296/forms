import React, {useEffect, useState} from 'react';

export const CardsContext = React.createContext({
    CreditCards: [],
});

export default function CatrdsProvider({children}) {
    const [CreditCards, setCreditCards] = useState([]);

  useEffect(() => {
    fetch(' https://retoolapi.dev/K0Rs6n/validatecreditcard?')
      .then(response => response.json())
      .then(data => setCreditCards(data));
  }, []);

  return (
    <CardsContext.Provider value={{
      setCreditCards,
      CreditCards,
    }}>
      {children}
    </CardsContext.Provider>
  );
}
