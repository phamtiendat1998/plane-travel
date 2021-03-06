import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Intro from '../../page/Intro/Intro';
import NavTopContainer from '../../layouts/Nav/NavTopContainer';
import NavBot from '../../layouts/Nav/NavBot';
import Login from '../../page/Login/Login';
import Fly from './../../page/Fly/Fly';
// Style
const Wrapper = styled.div`
    width: 100%;
`;
const MainWrapper = styled.div`
    width: 100%;
    height: ${props => props.theme.Height.MainView};
    position: fixed;
    top: ${ props => props.theme.Height.NavXl};
    left: 0;
    overflow: hidden;
    z-index: 1;
`;

export default class UserTemplate extends Component {
    render() {
        return (
            <Wrapper>
                <NavTopContainer />
                <MainWrapper>
                    <Switch>
                        <Route exact path='/' component={Intro} />
                        <Route path='/login' component={Login} />
                        <Route path='/fly' component={Fly} />
                    </Switch>
                </MainWrapper>
                <NavBot />
            </Wrapper>
        )
    }
}
