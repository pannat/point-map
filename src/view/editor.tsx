import React from 'react'
import { Row, Col } from "antd";
import YMap from "../components/ymap";

export default class Editor extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className="editor">
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <YMap/>
                    </Col>
                </Row>
            </div>
        )
    }
}