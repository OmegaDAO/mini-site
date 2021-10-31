import React, { useState } from "react"
import { FaqStyles } from "./FaqStyles"
import { MdExpandMore as Chevron } from "react-icons/md"
import { useStaticQuery, graphql } from "gatsby"
const Faq = () => {
  const [activeButton, setAtiveButton] = useState(1)

  const activeButtonColor = id => {
    setAtiveButton(id)
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulFaq {
        edges {
          node {
            question {
              question
            }
            answer {
              answer
            }
            contentful_id
          }
        }
      }
    }
  `)
  console.log(data, "data")
  return (
    <>
      {data.allContentfulFaq.edges.map((items, index) => {
        return (
          <div>
            <FaqStyles
              className={
                items.node.contentful_id === activeButton
                  ? `${"faq-open"}`
                  : `${"faq-closed"}`
              }
              key={index}
            >
              <button
                className="question"
                onClick={() => activeButtonColor(items.node.contentful_id)}
              >
                {items.node.question.question}
                <div className="trigger">
                  <Chevron />
                </div>
              </button>
              {items.node.contentful_id === activeButton && (
                <div className="answer">{items.node.answer.answer}</div>
              )}
            </FaqStyles>
          </div>
        )
      })}
    </>
  )
}

export default Faq
