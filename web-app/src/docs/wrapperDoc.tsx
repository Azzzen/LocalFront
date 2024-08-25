import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import { BrowserRouter } from 'react-router-dom'

const Component = (props: any) => {
  return (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                {props.children}
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
    )
}

export default Component