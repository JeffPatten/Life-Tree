import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import onClickOutside from 'react-onclickoutside';
import '../../styles/global.css';

class SubcategoryDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.category
        }
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }

    selectItem = (item) => {
        let {subcategory_name} = item;
        this.setState({
          headerTitle: subcategory_name,
          listOpen: false
        }, this.props.resetThenSet(item))
      }

    toggleList = () => {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const { list } = this.props;
        const { listOpen, headerTitle } = this.state
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={this.toggleList}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                        ? <FontAwesome name="angle-up" size="2x" />
                        : <FontAwesome name="angle-down" size="2x" />
                    }
                </div>
                {listOpen && <ul className="dd-list">
                    {list.map((item) => (
                        <li className="dd-list-item" key={item.subcategory} onClick={() => this.selectItem(item)}> {item.subcategory_name} {item.selected && <FontAwesome name="check" />}</li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default onClickOutside(SubcategoryDropdown);