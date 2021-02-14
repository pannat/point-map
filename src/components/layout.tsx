import React from 'react'
import Header from "./header";
import Footer from "./footer";
import { Layout as PageLayout } from "antd";

export default class Layout extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <PageLayout>
                <Header/>
                {this.props.children}
                <Footer/>
            </PageLayout>
        )
    }
}