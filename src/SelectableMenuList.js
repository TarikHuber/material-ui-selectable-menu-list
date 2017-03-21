import React, {  Component, PropTypes } from 'react';
import {List , ListItem} from 'material-ui';
import {makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

function getNestedItems(hostItem, hostIndex){

	if(hostItem.nestedItems!==undefined){
		let items=hostItem.nestedItems.filter(function(item){ return item.visible!==false});

		if(items.length>0){
			return items.map(function(item, i){
				return getItem(item, hostIndex.toString()+i.toString())
			});
		}
	}

	return undefined;
};

function getItem(item, i){

	if(item!==undefined){
		if(item.subheader!==undefined){
			return <Subheader
				key={i}
				inset={item.inset}
				style={item.style}>
				{item.subheader}
			</Subheader>
		}else if(item.divider!==undefined){
			return <Divider
				key={i}
				inset={item.inset}
				style={item.style}
			/>
		}else{
			return <ListItem
				{...item}
				key={i}
				value={item.value}
				nestedItems={getNestedItems(item, i)}
			/>
		}

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
					}).map(function(item, i){
						return getItem(item, i)
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
