import styled from "styled-components";
import {Link, Route, Routes} from "react-router-dom";
import {Button} from "../components/Button";
import {Dialog} from "../components/Dialog";
import {TabView} from "../components/TabView";
import {Switch} from "../components/Switch";
import { Doc } from "../components/Doc";

const Wrapper = styled.div`
  display: flex;
 `
const Aside = styled.aside`
    width: 20vw;
    background: lightskyblue;
  min-height: 100vh;
  `
const UL = styled.ul`
    display: flex;
  flex-direction: column;
  margin-left: 10px;

  > li {
    margin: 0 10px;
  }
    `
const Main = styled.main`
`
const GetStart=()=>{
    return (
        <Wrapper>
            <Aside>
                <UL>
                    <li>
                        <Link to="button">Button</Link>
                    </li>
                    <li>
                        <Link to="dialog">Dialog</Link>
                    </li>
                    <li>
                        <Link to="tab">Tab</Link>
                    </li>
                    <li>
                        <Link to="switch">Switch</Link>
                    </li>
                    <li>
                        <Link to="/">返回首页</Link>
                    </li>
                </UL>
            </Aside>
            <Main>
                <Routes>
                    <Route path="/" element={<Doc/>}/>
                    <Route path="button" element={<Button/>}/>
                    <Route path="dialog" element={<Dialog/>}/>
                    <Route path="tab" element={<TabView/>}/>
                    <Route path="switch" element={<Switch/>}/>
                </Routes>
            </Main>
        </Wrapper>
    );

}
export {GetStart};