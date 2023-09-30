import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "خلاصه جلسه ۱۲ صدکدرز ",
      description: "دیزاین یه ماشین حساب رو...",
      date: "۱۸ شهریور ۱۴۰۲",
      color: "#4C86A8",
    },
    {
      id: 2,
      title: "کتاب هایی که میخواهم بخونم",
      description: "کتابخونه نمیشه شب...",
      date: "۱ شهریور ۱۴۰۲",
      color: "#38A3A5",
    },
  ]);
  
  return <CardContext.Provider value={cards}>{children}</CardContext.Provider>;
};

export const useCardContext = () => {
  return useContext(CardContext);
};
