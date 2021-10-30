import React, { useState } from "react"
import { FaqStyles } from "./FaqStyles"
import { MdExpandMore as Chevron } from "react-icons/md"

const Faq = () => {
  const [activeButton, setAtiveButton] = useState(1);
  const [showInfo, setInfo] = useState(false)

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }
  const activeButtonColor = (id) => {
    setAtiveButton(id);
    // setAtiveButton(!activeButton)
  };
  return (
    <>
    {generalQuestion.map((items,index) => {
      return(
        <div>
        <FaqStyles className={items.id === activeButton ? `${"faq-open"}` : `${"faq-closed"}`} key={index}>
        <button className="question" onClick={() => activeButtonColor(items.id)}>
          {items.title}
          <div className="trigger">
            <Chevron />
          </div>
        </button>
        {items.id === activeButton && <div className="answer">{items.description}</div>}
      </FaqStyles>
      </div>
      )
    })}

    </>
  )
}

export default Faq


const generalQuestion = [
  {
    id: 1,
    title: "Do I need to own stock to send it to someone?",
    description: `No you don't! Send money directly from your bank account`
  },
  {
    id: 2,
    title: "What do I need to get started? ",
    description: `All you need is a phone number to receive a fractional share. To claim a stock to your portfolio, you’ll need to sign up with Staax`
  },
  {
    id: 3,
    title: "What types of stocks can I choose from? ",
    description: `Individual stocks, ETF and any other securities   `
  },
  {
    id: 4,
    title: "Is there an option to send and receive cryptocurrency?",
    description: `We are working on launching this feature which will be incorporated in the next phase`
  },
  {
    id: 5,
    title: "What if I don't want to receive stocks?",
    description: `You have the option to receive cash instead of stocks `
  },
  {
    id: 6,
    title: "What if I need to liquidate my stocks?",
    description: `You can easily sell your shares and transfer the money from staax to your bank account`
  },
  {
    id: 7,
    title: "What if I do not want my friends to see my transactions?",
    description: `All portfolio amounts will not be visible. You get to choose which transactions you share with your friends or which ones you want private.`
  },
  {
    id: 8,
    title: "What if someone sends me stocks I don’t want?",
    description: `You can only receive stocks from your top 5 that you have marked as your favorites on your profile dashboard`
  },
  {
    id: 9,
    title: "What if my stock portfolio goes down in value?",
    description: `With every investment there is risk, but we encourage long term investing where we have seen steady upward trends`
  },
  {
    id: 10,
    title: "I’m new to investing. How do I find the latest information on stocks?",
    description: `We have an explore page where you can search by different themes and industries. When you click into a security, you will have access to all the financial data as well as the latest news associated with the company`
  },
  {
    id: 11,
    title: "I am concerned about privacy, will others see my portfolio?",
    description: `Others will only see your 5 favorite stocks and transactions you make public, not your portfolio or your balances.`
  },
];