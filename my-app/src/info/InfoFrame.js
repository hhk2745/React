import React, { Component, Fragment } from 'react';

import InfoInsert from './InfoInsert';
import InfoList from './InfoList';

class InfoFrame extends Component {
    id = 0;

    state = {
        information: [],
        keyword: '',
    };
    handleChange = e => {
        this.setState({
            keyword: e.target.value,
        });
    };

    handleCreate = data => {
        console.log(data);
        const { information } = this.state;
        this.setState({
            information: this.state.information.concat({ id: this.id++, ...data }),
        });
    };

    handleRemove = id => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id),
        });
    };

    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(
                info =>
                    id === info.id
                        ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
                        : info, // 기존의 값을 그대로 유지
            ),
        });
    };

    render() {
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1,
        );
        return (
            <Fragment>
                <InfoInsert onCreate={this.handleCreate} />
                {/* 결과 : {JSON.stringify(this.state.information)} */}
                <p>
                    <input
                        placeholder="검색 할 이름 입력"
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <InfoList
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </Fragment>
        );
    }
}

export default InfoFrame;