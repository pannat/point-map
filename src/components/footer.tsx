import React from 'react'
import { Footer as PageFooter } from "antd/lib/layout/layout";

export default class Footer extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <PageFooter></PageFooter>
        )
    }
}