import React, {  Component, PropTypes } from 'react';
import {List , ListItem} from 'material-ui';
import {makeSelectable} from 'material-ui/List';


function getNestedItems(nestedItems){

	if(nestedItems.nested!==undefined){
		let items=nestedItems.nested.filter(function(item){ return item.visible!==false});

		if(items.length>0){
			let newItems=[];
			newItems=items.map(function(item){
				return getItem(item)
			})

			return newItems;
		}
	}

	return undefined;
};

function getItem(item){

	if(item!==undefined){
		return <ListItem
			key={item.value}
			value={item.value}
			primaryText={item.label}
			leftIcon={item.icon}
			primaryTogglesNestedList={getNestedItems(item)!==undefined}
			nestedItems={getNestedItems(item)}
		/>
	}

	return undefined;

}


class SelectableMenuList extends Component{


	render(){

		const {  items, onIndexChange, index } = this.props

		const SelectableList = makeSelectable(List);

		return (
			<SelectableList
				value={index}
				onChange={onIndexChange}>
				{
					items.filter(function(item){
						return item.visible!==false;
					}).map(function(item){
						return getItem(item)
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
