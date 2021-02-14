import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Layout from "./components/layout";
import Content from "./components/content";
import Editor from "./view/editor";

function App() {
    return (
        <div className="App">
            <Layout>
                <Content>
                    <Editor></Editor>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
