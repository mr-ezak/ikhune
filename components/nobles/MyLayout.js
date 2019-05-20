import { createGlobalStyle } from 'styled-components';
import Header from './Header'

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        margin-top: -16px;
    }
`;

const Layout = props => (
    <div>
        <GlobalStyle />
        <Header />
        {props.children}
    </div>
)

export default Layout