import React, { Component } from 'react';
import InfoManagement from './InfoManagement';

class InfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render InfoList');
        const { data, onRemove, onUpdate } = this.props;

        if (!data) return null;

        const list = data.map(info => (
            <InfoManagement
                onRemove={onRemove}
                onUpdate={onUpdate}
                info={info}
                key={info.id}
            />
        ));

        return <div>{list}</div>;
    }
}

export default InfoList;
