import React, { Component } from 'react'


export default class Body extends Component {
    render() {
        return (
            <div style={styles.main}>
                BODY
            </div>
        )
    }
}

const styles = {
    main: {
        height: '70vh',
        width: '100vw',
        backgroundColor: 'lightgray'
    }
}