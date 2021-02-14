import React from 'react'

export default class YMap extends React.Component {
    yandexMap: any;
    constructor(props: any) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        window.ymaps.ready(this.initMap);
    }

    initMap() {
        this.yandexMap = new window.ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    }

    render() {
        return (
            <div id="map"/>
        )
    }
}