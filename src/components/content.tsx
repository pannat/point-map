import React from 'react'
import { Content as PageContent } from "antd/lib/layout/layout";

export default class Content extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <PageContent>
                {this.props.children}
            </PageContent>
        )
    }
}