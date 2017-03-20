import React, {  Component, PropTypes } from 'react';
import {List , ListItem} from 'material-ui';
import {makeSelectable} from 'material-ui/List';

class SelectableMenuList extends Component{


	getNestedItems = (menu) => {

		if(menu.nested!==undefined){
			let items=menu.nested.filter(function(item){ return item.access});

			if(items.length>0){
				let newItems=[];
				newItems=items.map(function(item, i){
					return <ListItem
						key={i}
						value={item.value}
						primaryText={item.label}
						leftIcon={item.icon}
					/>
				})

				return newItems;
			}
		}

		return undefined;
	};


	render(){

		const {  items, onIndexChange, index } = this.props

		const SelectableList = makeSelectable(List);
		const getNestedItems=this.getNestedItems;

		return (
			<SelectableList
				value={index}
				onChange={onIndexChange}>
				{
					items.map(function(item, i){

						return <ListItem
							key={i}
							value={item.value}
							primaryText={item.label}
							leftIcon={item.icon}
							primaryTogglesNestedList={getNestedItems(item)!==undefined}
							nestedItems={getNestedItems(item)}
						/>

					})
				}
			</SelectableList>
		);
	}
};

SelectableMenuList.propTypes = {
	items: PropTypes.array.isRequired,
	onIndexChange: PropTypes.func.isRequired,
	index: PropTypes.string.isRequired
}

export default (SelectableMenuList);
