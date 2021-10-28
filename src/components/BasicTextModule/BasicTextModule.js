import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          A Multi-Chain Alpha Reserve 
        </h2>
        <Button text="View App" as={Link} to="https://staging.omegadao.finance" />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
