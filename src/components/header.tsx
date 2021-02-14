import React from 'react'
import { PageHeader } from "antd";

export default class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <PageHeader>
                <h1>Route Editor v.0.0.1</h1>
            </PageHeader>
        )
    }
}